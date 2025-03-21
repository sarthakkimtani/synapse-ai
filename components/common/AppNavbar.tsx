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
        className="flex bg-primary text-black px-5 cursor-pointer py-4 items-center text-md rounded-[30px]"
      >
        GitHub
        <Image src={GitHub} className="ml-3 w-6" draggable={false} alt="GitHub" />
      </Link>
    </div>
  );
};
