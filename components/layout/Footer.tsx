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
      className="cursor-pointer rounded-2xl px-4 py-2 font-medium text-white transition ease-in-out hover:bg-zinc-800"
    >
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col items-center justify-center">
      <div className="bg-surface mb-4 flex w-[98%] flex-col items-center rounded-2xl shadow-[inset_0px_0px_20px_rgba(255,225,153,0.15)]">
        <div className="mt-12 flex flex-row items-center">
          <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
        </div>
        <div className="mt-8 flex flex-row items-center">
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#features">Features</FooterLink>
        </div>
        <div className="mt-6 flex flex-row items-center">
          <Link href={linkedinLink} target="_blank">
            <Image className="w-6 cursor-pointer" src={LinkedInIcon} alt="linkedin" />
          </Link>
          <Link href={githubLink} target="_blank">
            <Image className="ml-4 w-6 cursor-pointer" src={GitHubIcon} alt="github" />
          </Link>
          <Link href={xLink} target="_blank">
            <Image className="ml-4 w-6 cursor-pointer" src={XIcon} alt="x" />
          </Link>
        </div>
        <div className="mt-10 w-full border-[0.5px] border-zinc-700" />
        <span className="text-md my-5 text-zinc-600">
          &copy; {new Date().getFullYear()}, All Rights Reserved
        </span>
      </div>
    </footer>
  );
};
