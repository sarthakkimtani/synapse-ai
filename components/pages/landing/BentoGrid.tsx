import Image from "next/image";

import { BentoCard } from "@/components/pages/landing/BentoCard";
import { cn } from "@/utils/cn";

import Chat from "@/assets/chat.svg";
import Audio from "@/assets/audio.svg";
import Gemini from "@/assets/gemini.svg";

export const BentoGrid = () => {
  return (
    <div className="p-6 lg:p-8 bg-transparent mt-14 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto auto-rows-[250px] gap-x-5 gap-y-5">
        <BentoCard className="flex-col" columnSpan={1}>
          <Image
            src={Chat}
            alt="Chat"
            className={cn(
              "w-24 lg:w-32 text-primary transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-[-4deg]"
            )}
          />
          <h3 className="text-3xl font-bold mt-4 text-center transition-transform duration-500 group-hover:translate-x-2">
            Conversational AI
          </h3>
        </BentoCard>
        <BentoCard className="flex-col lg:flex-row" columnSpan={2}>
          <h3
            className={cn(
              "flex items-start text-7xl lg:text-8xl font-bold text-primary transition-all duration-500",
              "group-hover:scale-105 group-hover:rotate-[-4deg]"
            )}
          >
            40<span className="text-4xl md:text-6xl text-primary">+</span>
          </h3>
          <p className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:ml-8 transition-transform duration-500 group-hover:translate-x-2">
            Languages
          </p>
        </BentoCard>
        <BentoCard className="flex-row flex-wrap" columnSpan={1}>
          <Image
            src={Audio}
            alt="Audio"
            className={cn(
              "w-20 lg:w-24 text-primary transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-[-4deg]"
            )}
          />
          <h3 className="text-3xl lg:text-4xl font-bold ml-6 mt-4 transition-transform duration-500 group-hover:translate-x-2">
            Voice
            <br /> Mode
          </h3>
        </BentoCard>
        <BentoCard className="flex-col" columnSpan={1}>
          <h3 className="text-3xl font-bold mb-4 mt-4 transition-transform duration-500 group-hover:translate-x-2">
            Powered By
          </h3>
          <Image
            src={Gemini}
            alt="Gemini"
            className={cn(
              "w-40 lg:w-48 text-primary transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-[-4deg]"
            )}
          />
        </BentoCard>
        <BentoCard className="flex-col lg:flex-row" columnSpan={1}>
          <h3
            className={cn(
              "flex items-start text-7xl mb-4 lg:mb-0 font-bold text-primary transition-all duration-500",
              "group-hover:scale-105 group-hover:rotate-[-4deg]"
            )}
          >
            $0<span className="text-2xl md:text-4xl text-primary">*</span>
          </h3>
          <h3 className="text-3xl lg:text-4xl text-center font-bold ml-4 transition-transform duration-500 group-hover:translate-x-2">
            Free to <br className="hidden lg:block" /> Use
          </h3>
        </BentoCard>
      </div>
    </div>
  );
};
