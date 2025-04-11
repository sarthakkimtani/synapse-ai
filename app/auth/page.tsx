import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import { AuthButton } from "@/components/pages/auth/AuthButton";
import { createClient } from "@/utils/supabase/server";

import Grid from "@/assets/grid.svg";

export const metadata = {
  title: "Synapse: Login or Signup",
};

export default async function Auth() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/exercise");
  }

  return (
    <section className="fixed inset-0 overflow-hidden">
      <Image src={Grid} className="-z-10 object-cover" fill alt="Grid" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-4/5 flex-col items-center justify-center rounded-xl border border-primary bg-black px-6 py-10 shadow-[0_0_10px_theme(colors.primary)] md:w-5/12 lg:w-1/3">
          <h5 className="text-center text-2xl font-bold text-white">
            Login or Signup to use Synapse
          </h5>
          <p className="text-md mt-4 text-center text-[#7D7D7D]">
            Choose your preferred sign in method
          </p>
          <AuthButton variant="google" className="mb-6 mt-8" />
          <AuthButton variant="github" />
          <Link href="/privacy-policy" className="mt-6 text-center text-xs text-[#7D7D7D]">
            By continuing, you have read and accepted the privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}
