"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { languages } from "@/utils/languages";

interface LanguageSwitcherProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageSwitcher = ({
  selectedLanguage,
  setSelectedLanguage,
}: LanguageSwitcherProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const currLanguage = languages.find((lang) => lang.value === selectedLanguage);

  const switchLanguage = (newLang: string) => {
    setSelectedLanguage(newLang);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="bg-[#212221] h-16 w-full md:w-auto rounded-xl px-4 py-2 ml-0 lg:ml-10 mb-8 md:mb-0 hover:bg-[#2a2b2a] transition-colors duration-200 shadow-[0px_0px_20px_theme(colors.primary)] flex items-center justify-center">
        <div className="mr-2 flex flex-row items-center">
          {currLanguage && <ReactCountryFlag countryCode={currLanguage.flag.toUpperCase()} svg />}
          <p className="text-lg ml-2">{currLanguage?.label || "Select Language"}</p>
        </div>
        <ChevronDown strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="grid grid-cols-2 gap-2 bg-[#171817] text-white border border-[#353535] p-2 rounded-lg shadow-lg">
        {languages.map((lang) => (
          <button
            className={`
              w-full text-left text-md p-2 transition-colors duration-200 rounded-md
              ${selectedLanguage === lang.value ? "bg-[#282824]" : "hover:bg-[#2a2b2a]"}
            `}
            key={lang.value}
            onClick={() => switchLanguage(lang.value)}
          >
            <ReactCountryFlag countryCode={lang.flag.toUpperCase()} svg /> &nbsp; {lang.label}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
