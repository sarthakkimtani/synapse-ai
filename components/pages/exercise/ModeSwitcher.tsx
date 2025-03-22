"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { modes } from "@/utils/modes";

interface ModeSwitcherProps {
  currMode: string;
  setCurrMode: React.Dispatch<React.SetStateAction<string>>;
}

export const ModeSwitcher = ({ currMode, setCurrMode }: ModeSwitcherProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const mode = modes.find((mode) => mode.route === currMode);

  const switchMode = (newMode: string) => {
    setCurrMode(newMode);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="mb-8 ml-0 flex h-16 w-full items-center justify-center rounded-xl bg-[#212221] px-4 py-2 shadow-[0px_0px_20px_theme(colors.primary)] transition-colors duration-200 hover:bg-[#2a2b2a] md:mb-0 md:w-auto lg:ml-10">
        <div className="mr-2 flex flex-row items-center">
          {mode && mode.icon}
          <p className="ml-2 text-lg">{mode?.name.split(" ")[0] || "Select Mode"}</p>
        </div>
        <ChevronDown strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col rounded-lg border border-[#353535] bg-[#171817] p-2 text-white shadow-lg">
        {modes.map((mode, index) => (
          <div
            className={`flex w-full flex-col ${
              index !== modes.length - 1 ? "mb-2" : ""
            } cursor-pointer rounded-md border border-[#262626] p-3 transition-colors duration-200 hover:bg-[#2a2b2a] ${currMode === mode.route ? "bg-[#282824]" : null} `}
            key={mode.route}
            onClick={() => switchMode(mode.route)}
          >
            <div className="flex flex-row">
              {mode.icon}
              <h6 className="ml-2 font-semibold">{mode.name}</h6>
            </div>
            <p className="mt-1 text-sm text-[#4D4D4D]">{mode.description}</p>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
