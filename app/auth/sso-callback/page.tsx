"use client";

import Image from "next/image";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

import Grid from "@/assets/grid.svg";

export default function AuthSSOCallback() {
  return (
    <>
      <AuthenticateWithRedirectCallback
        signInUrl="/auth"
        signUpUrl="/auth"
        signInFallbackRedirectUrl="/exercise"
        signUpFallbackRedirectUrl="/exercise"
      />
      <section className="fixed inset-0 overflow-hidden bg-black">
        <Image src={Grid} className="-z-10 object-cover opacity-80" fill alt="Grid" />
        <div className="flex h-full w-full items-center justify-center px-6">
          <div className="flex w-full max-w-md flex-col items-center rounded-xl border border-primary/70 bg-black/90 px-8 py-10 text-center shadow-[0_0_18px_rgba(255,233,180,0.2)] backdrop-blur-sm">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white">Signing you in</h1>
            <p className="mt-3 text-sm text-[#7D7D7D]">
              Finishing your secure sign-in and taking you to your dashboard.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary [animation-delay:150ms]" />
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
