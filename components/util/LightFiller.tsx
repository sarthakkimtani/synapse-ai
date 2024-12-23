import Image from "next/image";

import Filler from "@/assets/light-filler.png";

export const LightFiller = () => {
  return (
    <div className="absolute w-full top-0 left-1/2 transform -translate-x-1/2">
      <Image src={Filler} alt="Filler" />
    </div>
  );
};
