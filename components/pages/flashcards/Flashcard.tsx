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
    const response = await fetch("/api/flashcards/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang, index, answer }),
    });
    const { isCorrect: correct } = await response.json();

    setSelectedAnswer(answer);
    setHasAnswered(true);
    setIsCorrect(correct);
    onAnswer(correct);

    setTimeout(() => onNext(), 500);
  };

  return (
    <div className="w-full max-w-md">
      <div
        className="relative h-[400px] w-full cursor-pointer preserve-3d"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
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
            <div className="absolute inset-0 w-full h-full backface-hidden bg-primary rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center">
              <h2 className="text-5xl text-center font-bold mb-4">{card.term}</h2>
              {card.exampleSentence && (
                <p className="text-md text-center italic mt-4">{card.exampleSentence}</p>
              )}
              <p className="text-sm mt-8">Click to flip</p>
            </div>
          )}
          {isFlipped && (
            <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center bg-primary rounded-3xl shadow-lg p-6 [transform:rotateY(180deg)]">
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
                      "w-full bg-white border-yellow-100 p-4 text-left rounded-xl border-2 transition-all",
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
