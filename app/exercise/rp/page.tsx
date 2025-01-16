"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { ChatInterface } from "@/components/pages/rp/ChatInterface";
import { AILoader } from "@/components/common/AILoader";
import { ErrorBanner } from "@/components/common/ErrorBanner";

import { RPExercise } from "@/app/api/exercise/schema";
import { fetchExercise } from "@/lib/fetchExercise";

export default function RolePlayingExercise() {
  const [exercise, setExercise] = useState<RPExercise | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const data: RPExercise = await fetchExercise(lang, "RP");
        setExercise(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    callAPI();
  }, [lang]);

  if (error) return <ErrorBanner message="Something went wrong!" />;
  if (isLoading) return <AILoader />;
  if (!exercise) return null;

  return <ChatInterface exercise={exercise} />;
}
