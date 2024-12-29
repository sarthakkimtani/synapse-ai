import type { Metadata } from "next";
import Image from "next/image";

import { AuthButton } from "@/components/pages/auth/AuthButton";

import Grid from "@/assets/grid.svg";

export const metadata: Metadata = {
  title: "Synapse: Login or Signup",
};

export default function Auth() {
  return (
    <section className="fixed inset-0 overflow-hidden">
      <Image src={Grid} className="-z-10 object-cover" fill alt="Grid" />
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-4/5 md:w-5/12 lg:w-1/3 bg-black border border-primary py-10 px-6 rounded-xl shadow-[0_0_10px_#FFFAED]">
          <h5 className="text-2xl font-bold text-white text-center">
            Login or Signup to use Synapse
          </h5>
          <p className="text-[#7D7D7D] text-md mt-4 text-center">
            Choose your preferred sign in method
          </p>
          <AuthButton variant="google" className="mt-8 mb-6" />
          <AuthButton variant="github" />
        </div>
      </div>
    </section>
  );
}
