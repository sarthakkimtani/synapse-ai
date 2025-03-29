"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePhraseAnimation } from "@/hooks/usePhraseAnimation";

const AnimatedTitleComponent = () => {
  const phrases = ["AI-First", "エーアイ", "एआई-प्रथम"];
  const { currentPhrase, isLoading } = usePhraseAnimation(phrases, 2500);

  return (
    <h1 className="mb-5 mt-24 flex flex-wrap items-center justify-center px-2 text-center text-3xl font-bold md:mb-0 md:mt-20 md:text-5xl">
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
              willChange: "opacity, transform",
            }}
            className="inline-block w-40 text-primary md:w-60"
          >
            {currentPhrase}
          </motion.span>
        )}
      </AnimatePresence>
      <span className="md:ml-1">Language Learning Revolution</span>
    </h1>
  );
};

export const AnimatedTitle = memo(AnimatedTitleComponent);
