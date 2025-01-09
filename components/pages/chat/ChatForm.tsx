"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { AudioLinesIcon, Play } from "lucide-react";

import { LanguageSwitcher } from "@/components/pages/chat/LanguageSwitcher";
import { ModeSwitcher } from "./ModeSwitcher";

const ChatButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");

  return (
    <motion.div layoutId="expandable" className="flex flex-col md:flex-row items-center">
      <button className="w-full md:w-auto h-16 flex items-center justify-center text-lg bg-primary px-5 rounded-xl text-black shadow-[0px_0px_20px_theme(colors.primary)]">
        <Play size={20} className="text-black mr-3" />
        <span className="font-semibold whitespace-nowrap text-lg">Start Exercise</span>
      </button>
      <div className="flex flex-col md:flex-row items-center w-full my-5 md:my-0">
        <LanguageSwitcher
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        <ModeSwitcher currMode={selectedMode} setCurrMode={setSelectedMode} />
      </div>
    </motion.div>
  );
};

export const ChatForm = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col md:flex-row items-center w-full justify-center z-0">
        <ChatButton />
        <motion.div layoutId="shrinkable" className="flex-shrink-0">
          <Link
            href="/voice"
            className="hidden md:flex items-center justify-center w-16 h-16 bg-[#171817] cursor-pointer rounded-xl ml-4 md:ml-8 shadow-[0px_0px_20px_theme(colors.primary)]"
          >
            <AudioLinesIcon size={28} color="#FFE9B4" />
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
