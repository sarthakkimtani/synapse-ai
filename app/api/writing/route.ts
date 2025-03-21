import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

import { systemPrompt } from "@/lib/prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const { text } = await generateText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    prompt,
  });

  return NextResponse.json(text);
}
