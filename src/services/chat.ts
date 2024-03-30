export async function generateImageFromURL(input: string) {
  try {
    const res = await fetch("/api/convertapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: input }),
    });
    const data = await res.text()
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function generateGPTReview(imageURL: string | undefined) {
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

    return responseText;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
