import Link from "next/link";
import Image from "next/image";

// TODO: Reuse Icons with different colors
import XIcon from "@/assets/brands/x-primary.svg";
import LinkedInIcon from "@/assets/brands/linkedin-primary.svg";
import GitHubIcon from "@/assets/brands/github-primary.svg";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center w-12 h-12 ml-4 bg-transparent cursor-pointer rounded-2xl bg-[#171817] border border-primary"
    >
      {children}
    </Link>
  );
};

export const AppFooter = () => {
  const linkedinUrl = "https://www.linkedin.com/in/sarthak-kimtani/";
  const githubUrl = "https://github.com/sarthakkimtani/synapse-ai";
  const xUrl = "https://x.com/sarthakkimtani/";

  return (
    <div className="absolute bottom-0 flex flex-row items-center justify-center w-full py-8 text-center text-white">
      <FooterLink href={linkedinUrl}>
        <Image src={LinkedInIcon} alt="LinkedIn" height={24} />
      </FooterLink>
      <FooterLink href={githubUrl}>
        <Image src={GitHubIcon} alt="LinkedIn" height={24} />
      </FooterLink>
      <FooterLink href={xUrl}>
        <Image src={XIcon} alt="LinkedIn" height={24} />
      </FooterLink>
    </div>
  );
};
