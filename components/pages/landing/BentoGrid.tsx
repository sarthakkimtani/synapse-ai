import Image from "next/image";
import { memo } from "react";

import { BentoCard } from "@/components/pages/landing/BentoCard";
import { cn } from "@/lib/utils";

import Chat from "@/assets/chat.svg";
import Pen from "@/assets/pen.svg";
import Gemini from "@/assets/gemini.svg";

const BentoGridComponent = () => {
  return (
    <div className="mt-14 min-h-screen bg-transparent p-6 lg:p-8">
      <div className="mx-auto grid max-w-6xl auto-rows-[250px] grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-3">
        <BentoCard className="flex-col" columnSpan={1}>
          <Image
            src={Chat}
            alt="Chat"
            className={cn(
              "w-24 text-primary transition-all duration-500 lg:w-32",
              "group-hover:rotate-[-4deg] group-hover:scale-110"
            )}
            loading="lazy"
          />
          <h3 className="mt-4 text-center text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2">
            Conversational AI
          </h3>
        </BentoCard>
        <BentoCard className="flex-col lg:flex-row" columnSpan={2}>
          <h3
            className={cn(
              "flex items-start text-7xl font-bold text-primary transition-all duration-500 lg:text-8xl",
              "group-hover:rotate-[-4deg] group-hover:scale-105"
            )}
          >
            40<span className="text-4xl text-primary md:text-6xl">+</span>
          </h3>
          <p className="mb-4 text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2 md:text-4xl lg:ml-8 lg:text-6xl">
            Languages
          </p>
        </BentoCard>
        <BentoCard className="flex-row flex-wrap" columnSpan={1}>
          <Image
            src={Pen}
            alt="Pen"
            className={cn(
              "w-20 text-primary transition-all duration-500 lg:w-24",
              "group-hover:rotate-[-4deg] group-hover:scale-110"
            )}
            loading="lazy"
          />
          <h3 className="ml-6 mt-4 text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
            Writing
            <br /> Review
          </h3>
        </BentoCard>
        <BentoCard className="flex-col" columnSpan={1}>
          <h3 className="mb-4 mt-4 text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2">
            Powered By
          </h3>
          <Image
            src={Gemini}
            alt="Gemini"
            className={cn(
              "w-40 text-primary transition-all duration-500 lg:w-48",
              "group-hover:rotate-[-4deg] group-hover:scale-110"
            )}
            loading="lazy"
          />
        </BentoCard>
        <BentoCard className="flex-col lg:flex-row" columnSpan={1}>
          <h3
            className={cn(
              "mb-4 flex items-start text-7xl font-bold text-primary transition-all duration-500 lg:mb-0",
              "group-hover:rotate-[-4deg] group-hover:scale-105"
            )}
          >
            $0
          </h3>
          <h3 className="ml-4 text-center text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2 lg:text-4xl">
            Free to <br className="hidden lg:block" /> Use
          </h3>
        </BentoCard>
      </div>
    </div>
  );
};

export const BentoGrid = memo(BentoGridComponent);
