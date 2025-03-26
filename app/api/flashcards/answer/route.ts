import { NextRequest } from "next/server";
import { z } from "zod";

import { createClient } from "@/utils/supabase/server";
import { redisClient } from "@/lib/redis";
import { withRateLimit, errorResponse, successResponse } from "@/lib/api-utils";

const answerSchema = z.object({
  lang: z.string(),
  index: z.number(),
  answer: z.string(),
});

export async function POST(req: NextRequest) {
  return withRateLimit(req, async () => {
    try {
      const body = await req.json();
      const validation = answerSchema.safeParse(body);
      
      if (!validation.success) {
        return errorResponse(validation.error.message, 400);
      }
      
      const { lang, index, answer } = validation.data;

      const supabase = await createClient();
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      const redisKey = `user:${user?.id}:${lang}:flashcards`;
      const field = `card:${index}`;
      const correctAnswer = await redisClient.hget(redisKey, field);

      if (!correctAnswer) {
        return errorResponse("Flashcard not found", 404);
      }

      return successResponse({ 
        correctAnswer, 
        isCorrect: answer === correctAnswer 
      });
    } catch (error) {
      console.error("Error checking answer:", error);
      return errorResponse("Failed to check answer", 500);
    }
  });
}
