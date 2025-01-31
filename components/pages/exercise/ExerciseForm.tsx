"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { AudioLinesIcon, Play } from "lucide-react";

import { LanguageSwitcher } from "@/components/pages/exercise/LanguageSwitcher";
import { ModeSwitcher } from "@/components/pages/exercise/ModeSwitcher";

const FormButtons = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<string>("");

  const handleClick = () => {
    if (!selectedLanguage || !selectedMode) {
      return;
    }
    const data = { lang: selectedLanguage };
    const params = new URLSearchParams(data).toString();
    router.push(`/exercise/${selectedMode}?${params}`);
  };

  return (
    <motion.div
      layoutId="expandable"
      className="flex flex-col md:flex-row items-center"
      onClick={handleClick}
    >
      <button className="w-full md:w-auto h-16 flex items-center justify-center text-lg bg-primary hover:bg-yellow-50 transition-colors duration-150 ease-linear px-5 rounded-xl text-black shadow-[0px_0px_20px_theme(colors.primary)]">
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

export const ExerciseForm = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col md:flex-row items-center w-full justify-center z-0">
        <FormButtons />
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
