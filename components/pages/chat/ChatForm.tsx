"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { AudioLinesIcon, SendHorizonal } from "lucide-react";

export const ChatForm = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-row items-center w-full justify-center z-0">
        <motion.form
          layoutId="expandable"
          className="flex items-center bg-[#171817] w-2/3 md:w-2/4 h-16 p-4 rounded-xl shadow-[0px_0px_20px_theme(colors.primary)]"
        >
          <input
            type="text"
            className="bg-[#171817] w-full h-full text-white outline-none break-words placeholder:text-ellipsis"
            placeholder="Chat with AI in any language..."
          />
          <button className="flex items-center justify-center w-10 h-10 bg-primary cursor-pointer rounded-xl ml-4">
            <SendHorizonal size={18} color="black" />
          </button>
        </motion.form>
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
