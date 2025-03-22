"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { WritingAnalysis } from "@/components/pages/writing/WritingAnalysis";
import { AnalysisForm } from "@/components/pages/writing/AnalysisForm";
import { WritingLoader } from "@/components/pages/writing/WritingLoader";

import { fetchWritingReview } from "@/lib/fetch";

const Placeholder = () => (
  <motion.div
    className="flex h-full w-full flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sparkles strokeWidth={1.3} className="mb-5 text-neutral-500" size={56} />
    </motion.div>
    <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center text-base text-neutral-500"
    >
      Enter text to start analyzing your writing skills.
    </motion.p>
  </motion.div>
);

const ErrorBox = ({
  error,
  setError,
}: {
  error: string | null;
  setError: (error: string | null) => void;
}) => {
  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-lg border border-red-500/30 bg-red-500/10 p-4"
      >
        <p className="mb-1 font-medium text-red-500">Error</p>
        <p className="text-sm text-neutral-300">{error}</p>
      </motion.div>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 rounded-md bg-neutral-800 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-700"
        onClick={() => setError(null)}
      >
        Dismiss
      </motion.button>
    </motion.div>
  );
};

export const WritingCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reviewResponse, setReviewResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (language: string, text: string) => {
    try {
      if (language == "" || text == "") return;
      setIsLoading(true);
      setError(null);
      const data: string = await fetchWritingReview(language, text);
      setReviewResponse(data);
    } catch (error) {
      console.error("Error analyzing writing:", error);
      setError(
        error instanceof Error ? error.message : "Failed to analyze writing. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="mb-14 mt-10 flex w-5/6 flex-col rounded-xl bg-[#1E1F1E] shadow-[0px_0px_20px_theme(colors.primary)] lg:mb-0 lg:h-[440px] lg:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full flex-col items-center justify-center p-6 lg:w-1/2">
        <AnalysisForm onSubmit={handleSubmit} />
      </div>
      <div className="flex h-full w-[1px] items-center bg-neutral-700" />
      <div className="mt-2 flex h-full w-full flex-col items-center justify-center overflow-hidden p-6 lg:mt-0 lg:w-1/2">
        {isLoading ? (
          <WritingLoader />
        ) : error ? (
          <ErrorBox error={error} setError={setError} />
        ) : reviewResponse == null ? (
          <Placeholder />
        ) : (
          <WritingAnalysis text={reviewResponse} />
        )}
      </div>
    </motion.div>
  );
};
