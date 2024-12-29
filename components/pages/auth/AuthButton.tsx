import Image from "next/image";

import { cn } from "@/util/cn";

import Google from "@/assets/brands/google.svg";
import Github from "@/assets/brands/github.svg";

interface AuthButtonProps {
  variant: "google" | "github";
  className?: string;
}

export const AuthButton = ({ className, variant }: AuthButtonProps) => {
  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center w-[275px] md:w-72 h-12 bg-[#1E1E1E] hover:bg-[#2F2F2F] transition duration-150 ease-linear font-semibold font-xl rounded-xl",
        className ?? ""
      )}
    >
      <Image
        className="mr-3"
        width={20}
        src={variant === "google" ? Google : Github}
        draggable={false}
        alt="icon"
      />
      Continue with {variant === "google" ? "Google" : "GitHub"}
    </button>
  );
};
