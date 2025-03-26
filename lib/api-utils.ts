import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { ratelimit } from "@/lib/ratelimiter";

export type ApiResponse<T> = {
  data?: T;
  error?: string;
  status: number;
};

export async function withRateLimit(
  req: NextRequest | Request,
  handler: () => Promise<Response>
): Promise<Response> {
  const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return errorResponse("Too many requests", 429);
  }

  try {
    return await handler();
  } catch (error) {
    console.error("API error:", error);
    return errorResponse("Internal server error", 500);
  }
}

export function errorResponse(message: string, status: number = 400): Response {
  return NextResponse.json({ error: message }, { status });
}

export function successResponse<T>(data: T, status: number = 200): Response {
  return NextResponse.json({ data }, { status });
}

export function validateRequest<T>(schema: z.ZodType<T>, data: unknown): { 
  success: true; 
  data: T;
} | { 
  success: false; 
  error: string;
} {
  const result = schema.safeParse(data);
  if (!result.success) {
    return { 
      success: false, 
      error: result.error.message 
    };
  }
  return { 
    success: true, 
    data: result.data 
  };
}
