"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { AudioLinesIcon, Shuffle } from "lucide-react";

import { languages } from "@/utils/languages";

const ChatButton = () => {
  return (
    <motion.button
      layoutId="expandable"
      className="flex items-center justify-center bg-[#171817] w-2/3 md:w-2/4 h-16 p-4 rounded-xl shadow-[0px_0px_20px_theme(colors.primary)]"
    >
      <span className="flex items-center justify-center w-10 h-10 bg-primary cursor-pointer rounded-xl ml-4">
        <Shuffle size={18} color="black" />
      </span>
      <p className="text-lg text-[#4D4D4D] ml-4">Start a random exercise in</p>
      <div className="bg-[#212221] text-[#4D4D4D] rounded-full px-3 py-1 ml-2">
        <select className="bg-[#212221] outline-none">
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </motion.button>
  );
};

export const ChatForm = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-row items-center w-full justify-center z-0">
        <ChatButton />
        <motion.div layoutId="shrinkable" className="flex-shrink-0">
          <Link
            href="/voice"
            className="flex items-center justify-center w-16 h-16 bg-[#171817] cursor-pointer rounded-xl ml-4 md:ml-8 shadow-[0px_0px_20px_theme(colors.primary)]"
          >
            <AudioLinesIcon size={28} color="#FFE9B4" />
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
