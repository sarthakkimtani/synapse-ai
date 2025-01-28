import { NextResponse } from "next/server";
import { z } from "zod";

import { createClient } from "@/utils/supabase/server";
import { redisClient } from "@/lib/redis";

const answerSchema = z.object({
  lang: z.string(),
  index: z.number(),
  answer: z.string(),
});

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = answerSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.message }, { status: 400 });
  }

  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user;

  try {
    const { lang, index, answer } = parsed.data;
    const redisKey = `user:${user?.id}:${lang}:flashcards`;
    const field = `card:${index}`;
    const correctAnswer = await redisClient.hget(redisKey, field);

    if (!correctAnswer) {
      return NextResponse.json({ message: "Flashcard not found" }, { status: 404 });
    }

    return NextResponse.json({ correctAnswer, isCorrect: answer === correctAnswer });
  } catch (error) {
    console.error("Error checking answer:", error);
    return NextResponse.json({ error: "Failed to check answer" }, { status: 500 });
  }
}
