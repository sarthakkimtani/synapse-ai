"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePhraseAnimation } from "@/hooks/usePhraseAnimation";

export const AnimatedTitle = () => {
  const phrases = ["AI-First", "エーアイ", "एआई-प्रथम"];
  const { currentPhrase, isLoading } = usePhraseAnimation(phrases, 2500);

  return (
    <h1 className="text-3xl md:text-5xl px-2 font-bold text-center flex flex-wrap justify-center items-center mt-24 md:mt-20 mb-5 md:mb-0">
      <span className="md:mr-1">The</span>
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.span
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="inline-block text-primary w-40 md:w-60"
          >
            {currentPhrase}
          </motion.span>
        )}
      </AnimatePresence>
      <span className="md:ml-1">Language Learning Revolution</span>
    </h1>
  );
};
