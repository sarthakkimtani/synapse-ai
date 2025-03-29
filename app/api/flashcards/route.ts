import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextRequest } from "next/server";
import { z } from "zod";

import { FCExerciseSchema, SafeFCExerciseSchema } from "@/app/api/flashcards/schema";
import { enhancePromptWithParams } from "@/utils/exercise-params";
import { createClient } from "@/utils/supabase/server";
import { systemPrompt } from "@/lib/prompt";
import { redisClient } from "@/lib/redis";
import { withRateLimit, errorResponse, successResponse } from "@/lib/api-utils";

export const maxDuration = 30;

const requestSchema = z.object({
  prompt: z.string(),
  lang: z.string(),
});

export async function POST(req: NextRequest) {
  return withRateLimit(req, async () => {
    try {
      const body = await req.json();
      const validation = requestSchema.safeParse(body);
      
      if (!validation.success) {
        return errorResponse("Invalid request format", 400);
      }
      
      const { prompt, lang } = validation.data;

      const supabase = await createClient();
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      const { object } = await generateObject({
        model: google("gemini-1.5-flash"),
        prompt: enhancePromptWithParams(prompt),
        schema: FCExerciseSchema,
        system: systemPrompt,
        temperature: 0.6,
      });

      const redisKey = `user:${user?.id}:${lang}:flashcards`;

      for (let i = 0; i < object.flashcards.length; i++) {
        const card = object.flashcards[i];
        await redisClient.hset(redisKey, { [`card:${i}`]: card.correctAnswer });
      }

      const safeObject = SafeFCExerciseSchema.parse(object);
      return successResponse(safeObject);
    } catch (error) {
      console.error("Flashcard generation error:", error);
      return errorResponse("Failed to generate flashcards", 500);
    }
  });
}
