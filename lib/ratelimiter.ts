import { Ratelimit } from "@upstash/ratelimit";

import { redisClient } from "@/lib/redis";

export const ratelimit = new Ratelimit({
  redis: redisClient,
  limiter: Ratelimit.slidingWindow(5, "5 s"),
  analytics: true,
});
