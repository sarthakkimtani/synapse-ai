import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/Button";

import Brand from "@/assets/brand.svg";
import { Rocket } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-6 md:px-20 py-6 md:py-8">
      <Link href="/">
        <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      </Link>
      <div className="hidden lg:flex flex-row justify-between items-center px-6 py-4 w-80 border border-[#E2E2E2] rounded-[40px]">
        <a className="cursor-pointer" href="#">
          Home
        </a>
        <a className="cursor-pointer" href="#">
          About
        </a>
        <a className="cursor-pointer" href="#features">
          Features
        </a>
      </div>
      <Button className="text-sm rounded-[30px]" routeTo="/chat">
        Get Started
        <Rocket className="ml-2" size={20} />
      </Button>
    </nav>
  );
};
