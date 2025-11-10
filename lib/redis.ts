import { Redis } from "@upstash/redis";

let redisClientInstance: Redis | null = null;

export function getRedisClient() {
  if (!redisClientInstance) {
    redisClientInstance = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
      retry: {
        retries: 3,
        backoff: (retryCount) => Math.min(Math.pow(2, retryCount) * 50, 1000),
      },
      automaticDeserialization: false,
    });
  }
  return redisClientInstance;
}

export const redisClient = getRedisClient();
