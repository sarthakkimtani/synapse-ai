import { google } from "@ai-sdk/google";
import { streamText } from "ai";

import { getSystemPrompt } from "@/lib/prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, language } = await req.json();

  if (!language) {
    return new Response("Invalid Language Code", { status: 400 });
  }

  const result = streamText({
    model: google("gemini-2.0-flash-exp"),
    system: getSystemPrompt(language as string),
    messages,
  });

  return result.toDataStreamResponse();
}
