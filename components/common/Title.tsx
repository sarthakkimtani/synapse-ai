"use client";

import { motion } from "motion/react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      className="text-3xl md:text-5xl px-4 font-bold text-center flex flex-wrap justify-center items-center mt-16 md:mt-20 mb-10 md:mb-20"
      animate={{ scale: 1 }}
      initial={{ scale: 0.9 }}
    >
      {children}
    </motion.h1>
  );
};
