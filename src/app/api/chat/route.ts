import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { SYSTEM_PROMPT, USER_PROMPT } from "./prompts";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { image_url } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",

    messages: [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: USER_PROMPT,
          },
          {
            type: "image_url",
            image_url,
          },
        ],
      },
    ],
    stream: true,
    max_tokens: 2048,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
