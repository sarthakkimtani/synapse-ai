"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MessagesSquare } from "lucide-react";

export const VoiceForm = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-row items-center w-full justify-center z-0">
        <motion.div layoutId="shrinkable" className="flex-shrink-0">
          <Link
            href="/chat"
            className="flex items-center justify-center w-16 h-16 bg-[#171817] cursor-pointer rounded-xl mr-4 md:ml-8 shadow-[0px_0px_20px_theme(colors.primary)]"
          >
            <MessagesSquare size={28} color="#FFE9B4" />
          </Link>
        </motion.div>
        <motion.div
          layoutId="expandable"
          className="flex items-center justify-center cursor-pointer bg-[#171817] text-[#4D4D4D] w-2/3 md:w-2/4 h-16 p-4 rounded-xl shadow-[0px_0px_20px_theme(colors.primary)]"
        >
          <p className="text-lg">
            Enter &nbsp;
            <span className="px-2 bg-primary text-black font-bold rounded inline-block align-top">
              &#9251;
            </span>
            &nbsp; to begin voice mode
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
