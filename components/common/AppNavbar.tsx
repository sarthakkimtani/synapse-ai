"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import { cn } from "@/lib/utils";

import Brand from "@/assets/brand.svg";

export const AppNavbar = ({ className }: { className?: string }) => {
  const { signOut } = useClerk();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    if (isSigningOut) return;

    setIsSigningOut(true);
    await signOut({ redirectUrl: "/" });
  };

  return (
    <div className={cn("flex flex-row items-center justify-between", className)}>
      <Link href="/">
        <Image className="cursor-pointer" src={Brand} draggable={false} alt="Brand" width={150} />
      </Link>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="text-md flex items-center rounded-[30px] border border-primary/50 bg-[#111111] px-5 py-4 text-primary transition duration-150 ease-in-out hover:border-primary hover:bg-[#1A1A1A] hover:shadow-[0_0_18px_rgba(255,233,180,0.12)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <LogOut size={18} className="mr-2" />
          {isSigningOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </div>
  );
};
