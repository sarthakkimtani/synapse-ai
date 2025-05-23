import Image from "next/image";
import { memo } from "react";

import { AnimatedTitle } from "@/components/pages/landing/AnimatedTitle";

import Node from "@/assets/node.svg";

const HeroComponent = () => {
  return (
    <section>
      <AnimatedTitle />
      <div className="flex items-center justify-center overflow-hidden">
        <Image 
          className="w-full scale-125 md:scale-100" 
          draggable={false} 
          src={Node} 
          alt="Node" 
          priority
          loading="eager"
        />
      </div>
    </section>
  );
};

export const Hero = memo(HeroComponent);
