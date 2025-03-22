import { google } from "@ai-sdk/google";
import { streamText } from "ai";

import { systemPrompt } from "@/lib/prompt";
import { ratelimit } from "@/lib/ratelimiter";
import { NextRequest } from "next/server";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const { success } = await ratelimit.limit(ip);
  const { messages } = await req.json();

  if (!success) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const result = streamText({
    model: google("gemini-1.5-flash"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
