import Image from "next/image";

import Filler from "@/assets/light-filler.png";

export const LightFiller = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute ${className}`}>
      <Image src={Filler} draggable={false} alt="Filler" />
    </div>
  );
};
