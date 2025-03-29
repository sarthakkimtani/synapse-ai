"use client";

import { useRouter } from "nextjs-toploader/app";

import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  routeTo?: string;
}

// TODO: Replace with Link from "next/link"
export const RouteButton = ({ className, children, routeTo }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center bg-primary px-3 py-3 text-center font-medium text-black transition duration-150 ease-in-out hover:bg-yellow-50 md:px-6 md:py-4 md:text-base",
        className ?? ""
      )}
      onClick={routeTo ? () => router.push(routeTo) : undefined}
    >
      {children}
    </button>
  );
};
