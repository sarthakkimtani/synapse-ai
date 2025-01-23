"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { Flashcard } from "@/components/pages/flashcards/Flashcard";
import { CompletionCard } from "@/components/pages/flashcards/CompletionCard";
import { FCExercise } from "@/app/api/exercise/schema";

interface FlashcardInterfaceProps {
  flashcards: FCExercise["flashcards"];
}

export const FlashcardInterface = ({ flashcards }: FlashcardInterfaceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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
      <div className="w-full p-6 mt-36 flex flex-col items-center justify-center text-black">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${((currentIndex + 1) / flashcards.length) * 100}%`,
          }}
          className="h-1 bg-primary fixed top-0 left-0 z-50"
        />
        {isCompleted ? (
          <CompletionCard correct={correctAnswers} total={flashcards.length} />
        ) : (
          <>
            <Flashcard
              card={flashcards[currentIndex]}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
            <h6 className="text-center font-semibold text-2xl text-primary mt-10">
              Correct Answers: {correctAnswers} / {flashcards.length}
            </h6>
          </>
        )}
      </div>
    </div>
  );
};
