export async function generateImageFromURL(input: string) {
  try {
    const res = await fetch(
      `https://v2.convertapi.com/convert/web/to/png?Secret=IK0O6yJ4GSuZNaB3&Url=${input}&StoreFile=true&ConversionDelay=5`
    );
    const data = await res.json();
    const image_url = data.Files[0].Url;
    return image_url;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function generateGPTReview(imageURL: string) {
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