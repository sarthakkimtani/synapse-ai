"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MessageBubble } from "@/components/pages/role-play/MessageBubble";
import { MCQQuestion } from "@/components/pages/role-play/MCQQuestion";
import { ChatHeader } from "@/components/pages/role-play/ChatHeader";

import type { RPExercise } from "@/app/api/exercise/schema";

interface ChatInterfaceProps {
  exercise: RPExercise;
}

type AnswersMap = {
  [questionIndex: number]: string;
};

export function ChatInterface({ exercise }: ChatInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswersMap>({});
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleAnswerSubmit = (mcq: NonNullable<(typeof exercise.conversation)[number]["mcq"]>) => {
    const isCorrect = currentAnswer === mcq.correctAnswer;
    setFeedback(isCorrect ? mcq.feedback.correct : mcq.feedback.incorrect);
    if (isCorrect) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentIndex]: currentAnswer,
      }));
      setAnsweredQuestions((prev) => [...prev, currentIndex]);
      if (currentIndex < exercise.conversation.length - 1) {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setCurrentAnswer("");
          setFeedback("");
        }, 500);
      }
    }
  };

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [currentIndex, feedback]);

  const isComplete = currentIndex === exercise.conversation.length - 1;

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto min-h-screen">
        <div className="p-6 flex flex-col min-h-screen text-foreground">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) / exercise.conversation.length) * 100}%`,
            }}
            className="h-1 bg-primary fixed top-0 left-0 z-50"
          />
          <ChatHeader
            roleDescription={exercise.roleDescription}
            initialPrompt={exercise.initialPrompt}
          />
          <div className="flex-1 space-y-6 overflow-y-auto">
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {exercise.conversation.slice(0, currentIndex + 1).map((msg, idx) => {
                  if (msg.mcq && answeredQuestions.includes(idx)) {
                    return (
                      <motion.div
                        key={`answer-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MessageBubble speaker="user" message={selectedAnswers[idx]} />
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {msg.mcq ? (
                        <MCQQuestion
                          question={msg.mcq.question}
                          options={msg.mcq.options}
                          selectedAnswer={currentAnswer}
                          feedback={feedback}
                          onSelectAnswer={setCurrentAnswer}
                        />
                      ) : (
                        <MessageBubble speaker={msg.speaker} message={msg.message || ""} />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="pt-6">
            {isComplete ? (
              <Button
                onClick={() => router.back()}
                className="w-full bg-primary text-black hover:bg-primary/90 h-12 text-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            ) : (
              <>
                <Button
                  onClick={() =>
                    exercise.conversation[currentIndex].mcq
                      ? handleAnswerSubmit(exercise.conversation[currentIndex].mcq!)
                      : setCurrentIndex((prev) => prev + 1)
                  }
                  className="w-full bg-primary text-black hover:bg-primary/90 h-12 text-lg"
                >
                  Continue
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
