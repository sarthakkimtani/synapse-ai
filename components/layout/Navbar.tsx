import Link from "next/link";
import Image from "next/image";

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
      <Link
        href="/exercise"
        className="flex flex-row items-center justify-center rounded-[30px] bg-primary px-3 py-3 text-center text-sm font-medium text-black transition duration-150 ease-in-out hover:bg-yellow-50 md:px-6 md:py-4 md:text-base lg:text-base"
      >
        Get Started
        <Rocket className="ml-2" size={20} />
      </Link>
    </nav>
  );
};
