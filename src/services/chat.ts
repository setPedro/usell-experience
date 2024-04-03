import { OpenAIResponse, Scores } from "@/state/websites/types";
// convertapi
export async function generateImageFromURL(input: string) {
  try {
    const res = await fetch("/api/convertapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: input }),
    });
    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function generateGPTReview(
  _response: OpenAIResponse,
  performance: number
) {
  try {
    // Formatting GPT response
    const response: string = _response.response;
    const design: number = _response.scores.design;
    const average = (performance + _response.scores.design) / 2;
    const scores: Scores = { design, performance, average };
    const result: OpenAIResponse = { response, scores };

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchGPTResponse(imageURL: string | undefined) {
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
        average: undefined,
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
    const res = await fetch(`/api/performance?url=${input}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const performanceText = await res.text();
    const performance = Math.round(parseFloat(performanceText) * 100);
    return performance;
  } catch (error) {
    console.error("Error fetching performance data:", error);
    throw error;
  }
}
