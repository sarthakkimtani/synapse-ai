import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextResponse } from "next/server";

import { FCExerciseSchema, SafeFCExerciseSchema } from "@/app/api/flashcards/schema";

import { enhancePromptWithParams } from "@/utils/exercise-params";
import { createClient } from "@/utils/supabase/server";

import { systemPrompt } from "@/lib/prompt";
import { redisClient } from "@/lib/redis";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt, lang } = await req.json();
  if (!prompt || !lang) {
    return NextResponse.json({ message: "Invalid Request Body" }, { status: 400 });
  }

  try {
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
      await redisClient.hset(redisKey, `card:${i}`, card.correctAnswer);
    }

    const safeObject = SafeFCExerciseSchema.parse(object);
    return NextResponse.json(safeObject);
  } catch (error) {
    console.error("Exercise generation error:", error);
    return NextResponse.json({ error: "Failed to generate exercise content." }, { status: 500 });
  }
}
