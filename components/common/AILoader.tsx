"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Position {
  x: number;
  y: number;
}

export const AILoader = () => {
  const [dots, setDots] = useState("");
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newPositions = Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setPositions(newPositions);
    }
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="absolute w-32 h-32 rounded-full border-2 border-[#FFE9B4]/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border-2 border-[#FFE9B4]/40"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="w-16 h-16 rounded-full bg-[#FFE9B4]/10 backdrop-blur-sm"
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 233, 180, 0.2)",
              "0 0 40px rgba(255, 233, 180, 0.4)",
              "0 0 20px rgba(255, 233, 180, 0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#FFE9B4]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="mt-20 text-center">
        <motion.h1
          className="text-[#FFE9B4] text-2xl font-light tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creating your Lesson{dots}
        </motion.h1>

        <motion.p
          className="text-[#FFE9B4]/60 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Preparing your experience
        </motion.p>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FFE9B4]/20"
            initial={{
              x: pos.x,
              y: pos.y,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
