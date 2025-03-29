"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { motion, AnimatePresence } from "motion/react";
import { PenTool, Play } from "lucide-react";

import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
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
      className="flex flex-col items-center md:flex-row"
      onClick={handleClick}
    >
      <button className="flex h-16 w-full items-center justify-center rounded-xl bg-primary px-5 text-lg text-black shadow-[0px_0px_20px_theme(colors.primary)] transition-colors duration-150 ease-linear hover:bg-yellow-50 md:w-auto">
        <Play size={20} className="mr-3 text-black" />
        <span className="whitespace-nowrap text-lg font-semibold">Start Exercise</span>
      </button>
      <div className="my-5 flex w-full flex-col items-center md:my-0 md:flex-row">
        <LanguageSwitcher
          className="mb-8 ml-0 flex h-16 w-full items-center justify-center rounded-xl bg-[#212221] px-4 py-2 text-lg shadow-[0px_0px_20px_theme(colors.primary)] transition-colors duration-200 hover:bg-[#2a2b2a] md:mb-0 md:w-auto lg:ml-10"
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
      <div className="z-0 flex w-full flex-col items-center justify-center md:flex-row">
        <FormButtons />
        <motion.div layoutId="shrinkable" className="flex-shrink-0">
          <Link
            href="/writing"
            className="ml-4 hidden h-16 w-16 cursor-pointer items-center justify-center rounded-xl bg-[#171817] shadow-[0px_0px_20px_theme(colors.primary)] md:ml-8 md:flex"
          >
            <PenTool size={28} color="#FFE9B4" />
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
