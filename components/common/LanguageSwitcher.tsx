"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { languages } from "@/utils/languages";

interface LanguageSwitcherProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export const LanguageSwitcher = ({
  selectedLanguage,
  setSelectedLanguage,
  className,
}: LanguageSwitcherProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const currLanguage = languages.find((lang) => lang.value === selectedLanguage);

  const switchLanguage = (newLang: string) => {
    setSelectedLanguage(newLang);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={className}>
        <div className="mr-2 flex flex-row items-center">
          {currLanguage && <ReactCountryFlag countryCode={currLanguage.flag.toUpperCase()} svg />}
          <p className="ml-2">{currLanguage?.label || "Select Language"}</p>
        </div>
        <ChevronDown strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="grid grid-cols-2 gap-2 rounded-lg border border-[#353535] bg-[#171817] p-2 text-white shadow-lg">
        {languages.map((lang) => (
          <button
            className={`text-md w-full rounded-md p-2 text-left transition-colors duration-200 ${selectedLanguage === lang.value ? "bg-[#282824]" : "hover:bg-[#2a2b2a]"} `}
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
