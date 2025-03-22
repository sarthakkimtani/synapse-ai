import Image from "next/image";

import Pattern from "@/assets/pattern.svg";

export const PatternFiller = () => {
  return (
    <div className="absolute bottom-0 h-5/6 w-full">
      <Image
        src={Pattern}
        className="-z-50 select-none object-cover"
        layout="fill"
        alt="Pattern"
        draggable={false}
        priority
      />
    </div>
  );
};
