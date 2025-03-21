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
    className="flex flex-col items-center justify-center w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Sparkles strokeWidth={1.3} className="text-neutral-500 mb-5" size={56} />
    </motion.div>
    <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-base text-neutral-500 text-center"
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
      className="flex flex-col items-center justify-center w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 w-full max-w-md"
      >
        <p className="text-red-500 font-medium mb-1">Error</p>
        <p className="text-neutral-300 text-sm">{error}</p>
      </motion.div>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-md text-sm text-neutral-300 transition-colors"
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
      className="flex flex-col lg:flex-row w-5/6 lg:h-[440px] mt-10 mb-14 lg:mb-0 rounded-xl bg-[#1E1F1E] shadow-[0px_0px_20px_theme(colors.primary)]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center p-6">
        <AnalysisForm onSubmit={handleSubmit} />
      </div>
      <div className="flex items-center w-[1px] h-full bg-neutral-700" />
      <div className="flex flex-col items-center justify-center mt-2 lg:mt-0 lg:w-1/2 w-full p-6 h-full overflow-hidden">
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
