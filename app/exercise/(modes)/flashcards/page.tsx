"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { FlashcardInterface } from "@/components/pages/flashcards/FlashcardInterface";
import { ErrorBanner } from "@/components/common/ErrorBanner";
import { AILoader } from "@/components/common/AILoader";

import { FCExercise } from "@/app/api/exercise/schema";
import { fetchExercise } from "@/lib/fetchExercise";

import Grid from "@/assets/grid.svg";

export default function FlashcardExercise() {
  const [exercise, setExercise] = useState<FCExercise | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    const callAPI = async () => {
      try {
        const data: FCExercise = await fetchExercise(lang, "FC");
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

  return (
    <section className="fixed inset-0 overflow-hidden">
      <Image src={Grid} className="-z-10 object-cover" fill alt="Grid" />
      <FlashcardInterface {...exercise} />
    </section>
  );
}
