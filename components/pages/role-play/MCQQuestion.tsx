"use client";

import { motion } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface MCQQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string;
  feedback: string;
  onSelectAnswer: (answer: string) => void;
}

export function MCQQuestion({
  question,
  options,
  selectedAnswer,
  feedback,
  onSelectAnswer,
}: MCQQuestionProps) {
  return (
    <div className="space-y-6 py-8">
      <h2 className="text-2xl font-semibold text-center text-primary">{question}</h2>
      <div className="space-y-3 max-w-xl mx-auto">
        {options.map((option, optIdx) => (
          <Button
            key={optIdx}
            onClick={() => onSelectAnswer(option)}
            variant={selectedAnswer === option ? "default" : "outline"}
            className={`w-full p-4 justify-start h-auto ${
              selectedAnswer === option
                ? "text-black hover:bg-primary/90"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {feedback.includes("Good") || feedback.includes("Excellent") ? (
              <div className="bg-primary/10 p-4 rounded-full">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
            ) : (
              <div className="bg-red-500/10 p-4 rounded-full">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-lg text-muted-foreground"
          >
            {feedback}
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
