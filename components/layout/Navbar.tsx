import Link from "next/link";
import Image from "next/image";

import { RouteButton } from "@/components/common/RouteButton";

import Brand from "@/assets/brand.svg";
import { Rocket } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-6 py-6 md:px-20 md:py-8">
      <Link href="/">
        <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      </Link>
      <div className="hidden w-80 flex-row items-center justify-between rounded-[40px] border border-[#E2E2E2] px-6 py-4 lg:flex">
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
      <RouteButton className="rounded-[30px] text-sm" routeTo="/exercise">
        Get Started
        <Rocket className="ml-2" size={20} />
      </RouteButton>
    </nav>
  );
};
