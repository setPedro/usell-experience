import { OpenAIResponse, Scores } from "@/state/websites/types";

// convertapi
export async function generateImageFromURL(input: string) {
  try {
    const res = await fetch(
      `https://v2.convertapi.com/convert/web/to/png?Secret=${process.env.NEXT_PUBLIC_CONVERT_API_KEY}&Url=${input}&StoreFile=true`
    );
    const data = await res.json();
    const image_url = data.Files[0].Url;

    return image_url
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function generateGPTReview(
  _response: OpenAIResponse,
  performance: number
) {
  const { response, scores: _scores } = _response;
  try {
    // Formatting GPT response
    const scores = { ..._scores, performance };
    const result = { response, scores };

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchGPTResponse(imageURL: string | undefined): Promise<OpenAIResponse> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image_url: imageURL }),
    });
    const reader = res.body?.getReader();
    if (!reader) {
      throw new Error("Failed to get reader from response body");
    }

    const decoder = new TextDecoder();
    let responseText = "";

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        break;
      }

      const currentChunk = decoder.decode(value);
      responseText += currentChunk;
    }
    const responseLines = responseText.split("\n");
    const response = responseLines.slice(0, -1).join("\n").trim();
    const design = +responseLines[responseLines.length - 1].trim();
    const result = {
      response,
      scores: {
        design,
        performance: undefined,
      },
    };

    return result;
  } catch (error) {
    console.error("Error fetching GPT response:", error);
    throw error;
  }
}

export async function fetchPerformance(input: string) {
  try {

    const response = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${input}`
    );
    const data = await response.json();
    const score = await data.lighthouseResult?.categories?.performance?.score;
    const performance = Math.round(parseFloat(score) * 100);
    return performance
  } catch (error) {
    console.error("Error fetching performance data:", error);
    throw error;
  }
}
