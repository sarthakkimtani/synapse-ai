import { NextResponse } from "next/server";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

import { systemPrompt } from "@/lib/prompt";
import { ratelimit } from "@/lib/ratelimiter";

export const maxDuration = 30;

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const { success } = await ratelimit.limit(ip);
  const { prompt } = await req.json();

  if (!success) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const { text } = await generateText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    prompt,
  });

  return NextResponse.json(text);
}
