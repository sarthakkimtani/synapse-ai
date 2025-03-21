"use client";

import { motion } from "motion/react";
import { Brain } from "lucide-react";

export const WritingLoader = () => (
  <motion.div
    className="flex flex-col items-center justify-center w-full h-full"
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
      <motion.div className="absolute w-20 h-20 rounded-full border-2 border-primary/30" />

      <motion.div
        className="absolute w-20 h-20 rounded-full border-2 border-primary border-t-transparent border-l-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
      />
      <motion.div
        className="absolute w-14 h-14 rounded-full border-2 border-primary/40 border-b-transparent border-r-transparent"
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
        <Brain className="w-8 h-8 text-primary" />
      </motion.div>
    </motion.div>
    <motion.div
      className="mt-6 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.p
        className="text-lg text-neutral-300 font-medium mt-2"
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
        className="text-sm text-neutral-500 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Enhancing your language with AI
      </motion.p>
    </motion.div>
  </motion.div>
);
