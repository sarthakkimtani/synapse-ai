import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { NextRequest } from "next/server";
import { z } from "zod";

import { systemPrompt } from "@/lib/prompt";
import { withRateLimit, errorResponse } from "@/lib/api-utils";

export const maxDuration = 30;

const chatSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    })
  ),
});

export async function POST(req: NextRequest) {
  return withRateLimit(req, async () => {
    try {
      const body = await req.json();
      const validation = chatSchema.safeParse(body);
      
      if (!validation.success) {
        return errorResponse("Invalid request format", 400);
      }
      
      const { messages } = validation.data;

      const result = streamText({
        model: google("gemini-1.5-flash"),
        system: systemPrompt,
        messages,
      });

      return result.toDataStreamResponse();
    } catch (error) {
      console.error("Chat API error:", error);
      return errorResponse("Failed to process chat request", 500);
    }
  });
}
