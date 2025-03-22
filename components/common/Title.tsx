"use client";

import { motion } from "motion/react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      className="mb-10 mt-16 flex flex-wrap items-center justify-center px-4 text-center text-3xl font-bold md:mb-20 md:mt-20 md:text-5xl"
      animate={{ scale: 1 }}
      initial={{ scale: 0.9 }}
    >
      {children}
    </motion.h1>
  );
};
