import Link from "next/link";
import Image from "next/image";

import { projectLink } from "@/utils/social";
import { cn } from "@/lib/utils";

import Brand from "@/assets/brand.svg";
import GitHub from "@/assets/brands/github-dark.svg";

export const AppNavbar = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-row items-center justify-between", className)}>
      <Link href="/">
        <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      </Link>
      <Link
        href={projectLink}
        target="_blank"
        className="text-md flex cursor-pointer items-center rounded-[30px] bg-primary px-5 py-4 text-black"
      >
        GitHub
        <Image src={GitHub} className="ml-3 w-6" draggable={false} alt="GitHub" />
      </Link>
    </div>
  );
};
