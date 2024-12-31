"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/utils/cn";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  routeTo?: string;
}

export const Button = ({ className, children, routeTo }: ButtonProps) => {
  const router = useRouter();

  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center bg-primary hover:bg-yellow-50 transition duration-150 ease-in-out px-3 md:px-6 py-3 md:py-4 text-center font-medium text-black md:text-base",
        className ?? ""
      )}
      onClick={routeTo ? () => router.push(routeTo) : undefined}
    >
      {children}
    </button>
  );
};
