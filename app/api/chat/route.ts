import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, UIMessage } from "ai";

import { systemPrompt } from "@/lib/prompt";
import { withRateLimit, errorResponse } from "@/lib/api-utils";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  return withRateLimit(req, async () => {
    try {
      const { messages }: { messages: UIMessage[] } = await req.json();

      const result = streamText({
        model: google("gemini-2.5-flash"),
        system: systemPrompt,
        messages: convertToModelMessages(messages),
      });

      return result.toUIMessageStreamResponse();
    } catch (error) {
      console.error("Chat API error:", error);
      return errorResponse("Failed to process chat request", 500);
    }
  });
}
