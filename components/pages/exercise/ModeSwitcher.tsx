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
      <PopoverTrigger className="bg-[#212221] h-16 w-full md:w-auto rounded-xl px-4 py-2 ml-0 lg:ml-10 mb-8 md:mb-0 hover:bg-[#2a2b2a] transition-colors duration-200 shadow-[0px_0px_20px_theme(colors.primary)] flex items-center justify-center">
        <div className="mr-2 flex flex-row items-center">
          {mode && mode.icon}
          <p className="text-lg ml-2">{mode?.name.split(" ")[0] || "Select Mode"}</p>
        </div>
        <ChevronDown strokeWidth={1} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col bg-[#171817] text-white border border-[#353535] p-2 rounded-lg shadow-lg">
        {modes.map((mode, index) => (
          <div
            className={`
              w-full flex flex-col ${
                index !== modes.length - 1 ? "mb-2" : ""
              } p-3 transition-colors duration-200 rounded-md cursor-pointer border border-[#262626] hover:bg-[#2a2b2a]
              ${currMode === mode.route ? "bg-[#282824]" : null}
            `}
            key={mode.route}
            onClick={() => switchMode(mode.route)}
          >
            <div className="flex flex-row">
              {mode.icon}
              <h6 className="font-semibold ml-2">{mode.name}</h6>
            </div>
            <p className="text-[#4D4D4D] text-sm mt-1">{mode.description}</p>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
