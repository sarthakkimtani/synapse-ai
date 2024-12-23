import Image from "next/image";
import { Rocket } from "lucide-react";

import Brand from "@/assets/brand.svg";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-20 py-8">
      <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      <div className="flex flex-row justify-between items-center px-6 py-4 w-80 border border-[#E2E2E2] rounded-[40px]">
        <a className="cursor-pointer" href="#">
          Home
        </a>
        <a className="cursor-pointer" href="#">
          About
        </a>
        <a className="cursor-pointer" href="#">
          Features
        </a>
      </div>
      <button className="flex flex-row items-center justify-center bg-primary px-6 py-4 text-center font-medium text-black rounded-[30px]">
        Get Started
        <Rocket className="ml-2" size={20} />
      </button>
    </nav>
  );
};
