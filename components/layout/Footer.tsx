import Image from "next/image";
import Link from "next/link";

import { githubLink, linkedinLink, xLink } from "@/utils/social";

import Brand from "@/assets/brand.svg";
import GitHubIcon from "@/assets/brands/github-gray.svg";
import XIcon from "@/assets/brands/x.svg";
import LinkedInIcon from "@/assets/brands/linkedin.svg";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 rounded-2xl font-medium cursor-pointer text-white transition ease-in-out hover:bg-zinc-800"
    >
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-4">
      <div className="w-[98%] flex flex-col items-center rounded-2xl mb-4 bg-[#1E1F1E] shadow-[inset_0px_0px_20px_rgba(255,225,153,0.15)]">
        <div className="flex flex-row items-center mt-12">
          <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
        </div>
        <div className="flex flex-row items-center mt-8">
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#features">Features</FooterLink>
        </div>
        <div className="flex flex-row items-center mt-6">
          <Link href={linkedinLink} target="_blank">
            <Image className="w-6 cursor-pointer" src={LinkedInIcon} alt="linkedin" />
          </Link>
          <Link href={githubLink} target="_blank">
            <Image className="w-6 ml-4 cursor-pointer" src={GitHubIcon} alt="github" />
          </Link>
          <Link href={xLink} target="_blank">
            <Image className="w-6 ml-4 cursor-pointer" src={XIcon} alt="x" />
          </Link>
        </div>
        <div className="w-full border-[0.5px] border-zinc-700 mt-10" />
        <span className="text-md text-zinc-600 my-5">
          &copy; {new Date().getFullYear()}, All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
