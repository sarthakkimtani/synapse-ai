import Image from "next/image";

import { AnimatedTitle } from "@/components/pages/AnimatedTitle";

import Node from "@/assets/node.svg";

export const Hero = () => {
  return (
    <section>
      <AnimatedTitle />
      <div className="flex items-center justify-center overflow-hidden">
        <Image className="w-full md:scale-100 scale-125" draggable={false} src={Node} alt="Node" />
      </div>
    </section>
  );
};
