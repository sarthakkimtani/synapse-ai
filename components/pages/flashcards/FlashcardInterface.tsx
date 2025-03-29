"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { useState } from "react";

import { Flashcard } from "@/components/pages/flashcards/Flashcard";
import { CompletionCard } from "@/components/pages/flashcards/CompletionCard";
import { SafeFCExercise } from "@/app/api/flashcards/schema";

interface FlashcardInterfaceProps {
  flashcards: SafeFCExercise["flashcards"];
}

export const FlashcardInterface = ({ flashcards }: FlashcardInterfaceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20 flex w-full flex-col items-center justify-center p-6 text-black">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${((currentIndex + 1) / flashcards.length) * 100}%`,
          }}
          className="fixed left-0 top-0 z-50 h-1 bg-primary"
        />
        {isCompleted ? (
          <CompletionCard correct={correctAnswers} total={flashcards.length} />
        ) : (
          <>
            <Flashcard
              lang={lang as string}
              index={currentIndex}
              card={flashcards[currentIndex]}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
            <h6 className="mt-10 text-center text-2xl font-semibold text-primary">
              Correct Answers: {correctAnswers} / {flashcards.length}
            </h6>
          </>
        )}
      </div>
    </div>
  );
};
