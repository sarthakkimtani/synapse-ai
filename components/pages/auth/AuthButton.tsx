"use client";

import Image from "next/image";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import Google from "@/assets/brands/google.svg";
import Github from "@/assets/brands/github.svg";

interface AuthButtonProps {
  variant: "google" | "github";
  className?: string;
}

export const AuthButton = ({ className, variant }: AuthButtonProps) => {
  const { fetchStatus, signIn } = useSignIn();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuth = async () => {
    if (fetchStatus === "fetching" || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await signIn.sso({
        strategy: variant === "google" ? "oauth_google" : "oauth_github",
        redirectUrl: "/exercise",
        redirectCallbackUrl: "/auth/sso-callback",
      });

      if (error) {
        console.error(error.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "font-xl flex h-12 w-[275px] flex-row items-center justify-center rounded-xl bg-[#1E1E1E] font-semibold transition duration-150 ease-linear hover:bg-[#2F2F2F] disabled:cursor-not-allowed disabled:opacity-70 md:w-72",
        className ?? ""
      )}
      disabled={fetchStatus === "fetching" || isSubmitting}
      onClick={handleAuth}
    >
      <Image
        className="mr-3"
        width={20}
        src={variant === "google" ? Google : Github}
        draggable={false}
        alt="icon"
      />
      {isSubmitting
        ? `Redirecting to ${variant === "google" ? "Google" : "GitHub"}...`
        : `Continue with ${variant === "google" ? "Google" : "GitHub"}`}
    </button>
  );
};
