"use client";

import { motion } from "motion/react";

interface ChatHeaderProps {
  roleDescription: string;
  initialPrompt: string;
}

export const ChatHeader = ({ roleDescription, initialPrompt }: ChatHeaderProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg font-medium text-primary mb-5"
      >
        {roleDescription}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border-l-4 border-primary bg-black/40 p-4 mb-8 rounded text-muted-foreground"
      >
        {initialPrompt}
      </motion.div>
    </>
  );
};
