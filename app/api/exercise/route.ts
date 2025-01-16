import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextResponse } from "next/server";

import { getExerciseSchema } from "@/app/api/exercise/schema";
import { systemPrompt } from "@/lib/prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt, mode } = await req.json();
  if (!mode) {
    return NextResponse.json({ message: "Invalid Mode" }, { status: 400 });
  }

  try {
    const { object } = await generateObject({
      model: google("gemini-2.0-flash-exp"),
      schema: getExerciseSchema(mode),
      system: systemPrompt,
      prompt,
    });

    return NextResponse.json(object);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error occurred" }, { status: 500 });
  }
}
