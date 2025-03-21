"use client";

import { motion } from "motion/react";
import { ChangeEvent, useState } from "react";

import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { Button } from "@/components/ui/button";

export const AnalysisForm = ({
  onSubmit,
}: {
  onSubmit: (language: string, text: string) => Promise<void>;
}) => {
  const [language, setLanguage] = useState<string>("");
  const [words, setWords] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value == "") setWords(0);
    else setWords(e.target.value.split(" ").length);
  };

  return (
    <>
      <motion.textarea
        className="w-full h-64 lg:h-[90%] p-4 mb-4 bg-[#1E1F1E] text-white rounded-lg border transition duration-100 ease-linear border-neutral-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        placeholder="Enter your text for review..."
        value={text}
        onChange={handleChange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <div className="flex flex-row w-full items-center justify-center lg:justify-between">
        <p className="hidden lg:block text-gray-500 text-sm">{words} Words</p>
        <div className="flex flex-row items-center">
          <LanguageSwitcher
            className="bg-[#212221] rounded-3xl px-4 py-2 border border-primary hover:bg-[#2a2b2a] transition-colors duration-200 flex items-center justify-center"
            selectedLanguage={language}
            setSelectedLanguage={setLanguage}
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => onSubmit(language, text)}
              className="px-6 py-2 ml-4 h-[42px] bg-primary text-black text-base font-medium rounded-3xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              disabled={!language || !text}
            >
              Analyze Text
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};
