"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { SafeFCExercise } from "@/app/api/flashcards/schema";
import { cn } from "@/lib/utils";

interface FlashcardProps {
  card: SafeFCExercise["flashcards"][number];
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  lang: string;
  index: number;
}

export const Flashcard = ({ card, lang, index, onAnswer, onNext }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFlipped(false);
    setSelectedAnswer("");
    setHasAnswered(false);
  }, [card]);

  const handleFlip = () => {
    if (!hasAnswered) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleAnswerSelect = async (answer: string) => {
    const fetchAnswer = await fetch("/api/flashcards/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang, index, answer }),
    });
    const response = await fetchAnswer.json();
    const { isCorrect: correct } = response.data;

    setSelectedAnswer(answer);
    setHasAnswered(true);
    setIsCorrect(correct);
    onAnswer(correct);

    setTimeout(() => onNext(), 500);
  };

  return (
    <div className="w-full max-w-md">
      <div
        className="preserve-3d relative h-[400px] w-full cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
      >
        <motion.div
          className="absolute inset-0 h-full w-full"
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {!isFlipped && (
            <div className="backface-hidden absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-primary p-8 shadow-lg">
              <h2 className="mb-4 text-center text-5xl font-bold">{card.term}</h2>
              {card.exampleSentence && (
                <p className="text-md mt-4 text-center italic">{card.exampleSentence}</p>
              )}
              <p className="mt-8 text-sm">Click to flip</p>
            </div>
          )}
          {isFlipped && (
            <div className="backface-hidden absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-3xl bg-primary p-6 shadow-lg [transform:rotateY(180deg)]">
              <div className="w-full space-y-3">
                {card.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAnswerSelect(option);
                    }}
                    disabled={hasAnswered}
                    className={cn(
                      "w-full rounded-xl border-2 border-yellow-100 bg-white p-4 text-left transition-all",
                      "hover:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                      hasAnswered &&
                        option === selectedAnswer &&
                        isCorrect &&
                        "border-green-500 bg-green-50",
                      hasAnswered &&
                        option === selectedAnswer &&
                        !isCorrect &&
                        "border-red-500 bg-red-50",
                      "disabled:cursor-not-allowed"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
