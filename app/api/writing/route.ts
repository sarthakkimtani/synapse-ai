import { NextRequest } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { z } from "zod";

import { systemPrompt } from "@/lib/prompt";
import { withRateLimit, errorResponse, successResponse } from "@/lib/api-utils";

export const maxDuration = 30;

const requestSchema = z.object({
  prompt: z.string(),
});

export async function POST(req: NextRequest) {
  return withRateLimit(req, async () => {
    try {
      const body = await req.json();
      const validation = requestSchema.safeParse(body);
      
      if (!validation.success) {
        return errorResponse("Invalid request format", 400);
      }
      
      const { prompt } = validation.data;

      const { text } = await generateText({
        model: google("gemini-1.5-flash"),
        system: systemPrompt,
        prompt,
      });

      return successResponse({ text });
    } catch (error) {
      console.error("Writing generation error:", error);
      return errorResponse("Failed to generate writing content", 500);
    }
  });
}
