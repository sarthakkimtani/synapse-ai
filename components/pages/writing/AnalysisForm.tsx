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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value == "") setWords(0);
    else setWords(e.target.value.split(" ").length);
  };

  return (
    <>
      <motion.textarea
        className="bg-surface mb-4 h-64 w-full resize-none rounded-lg border border-neutral-700 p-4 text-white transition duration-100 ease-linear focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary lg:h-[90%]"
        placeholder="Enter your text for review..."
        value={text}
        onChange={handleChange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      <div className="flex w-full flex-row items-center justify-center lg:justify-between">
        <p className="hidden text-sm text-gray-500 lg:block">{words} Words</p>
        <div className="flex flex-row items-center">
          <LanguageSwitcher
            className="flex items-center justify-center rounded-3xl border border-primary bg-[#212221] px-4 py-2 transition-colors duration-200 hover:bg-[#2a2b2a]"
            selectedLanguage={language}
            setSelectedLanguage={setLanguage}
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={async () => {
                setIsSubmitting(true);
                try {
                  await onSubmit(language, text);
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="ml-4 h-[42px] rounded-3xl bg-primary px-6 py-2 text-base font-medium text-black transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!language || !text || isSubmitting}
            >
              {isSubmitting ? "Analyzing..." : "Analyze Text"}
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};
