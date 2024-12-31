import Image from "next/image";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { createClient } from "@/utils/supabase/server";
import { cn } from "@/utils/cn";

import Google from "@/assets/brands/google.svg";
import Github from "@/assets/brands/github.svg";

interface AuthButtonProps {
  variant: "google" | "github";
  className?: string;
}

export const AuthButton = ({ className, variant }: AuthButtonProps) => {
  const handleAuth = async () => {
    "use server";

    const supabase = await createClient();
    const origin = (await headers()).get("origin");

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: variant,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
    } else {
      return redirect(data.url);
    }
  };

  return (
    <button
      className={cn(
        "flex flex-row items-center justify-center w-[275px] md:w-72 h-12 bg-[#1E1E1E] hover:bg-[#2F2F2F] transition duration-150 ease-linear font-semibold font-xl rounded-xl",
        className ?? ""
      )}
      onClick={handleAuth}
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
