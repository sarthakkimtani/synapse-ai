"use client";

import { motion } from "motion/react";
import { Brain } from "lucide-react";

export const WritingLoader = () => (
  <motion.div
    className="flex h-full w-full flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="absolute h-20 w-20 rounded-full border-2 border-primary/30" />

      <motion.div
        className="absolute h-20 w-20 rounded-full border-2 border-primary border-l-transparent border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
      />
      <motion.div
        className="absolute h-14 w-14 rounded-full border-2 border-primary/40 border-b-transparent border-r-transparent"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Brain className="h-8 w-8 text-primary" />
      </motion.div>
    </motion.div>
    <motion.div
      className="mt-6 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.p
        className="mt-2 text-lg font-medium text-neutral-300"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Analyzing your writing
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
        >
          ...
        </motion.span>
      </motion.p>
      <motion.p
        className="mt-1 text-sm text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Enhancing your language with AI
      </motion.p>
    </motion.div>
  </motion.div>
);
