import Link from "next/link";
import Image from "next/image";

import { githubLink, linkedinLink, xLink } from "@/utils/social";

// TODO: Reuse Icons with different colors
import XIcon from "@/assets/brands/x-primary.svg";
import LinkedInIcon from "@/assets/brands/linkedin-primary.svg";
import GitHubIcon from "@/assets/brands/github-primary.svg";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="ml-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-primary bg-[#171817] bg-transparent"
    >
      {children}
    </Link>
  );
};

export const AppFooter = () => {
  return (
    <div className="absolute bottom-0 flex w-full flex-row items-center justify-center py-8 text-center text-white">
      <FooterLink href={linkedinLink}>
        <Image src={LinkedInIcon} alt="Linkedin" height={24} />
      </FooterLink>
      <FooterLink href={githubLink}>
        <Image src={GitHubIcon} alt="GitHub" height={24} />
      </FooterLink>
      <FooterLink href={xLink}>
        <Image src={XIcon} alt="X" height={24} />
      </FooterLink>
    </div>
  );
};
