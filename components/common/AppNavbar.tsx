import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

import Brand from "@/assets/brand.svg";
import GitHub from "@/assets/brands/github-dark.svg";

export const AppNavbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-6 md:px-20 py-6 md:py-8">
      <Link href="/">
        <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      </Link>
      <Button className="flex items-center text-sm rounded-[30px]">
        GitHub
        <Image src={GitHub} className="ml-3 w-6" draggable={false} alt="GitHub" />
      </Button>
    </div>
  );
};
