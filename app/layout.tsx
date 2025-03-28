import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { LightFiller } from "@/components/util/LightFiller";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Synapse: AI-first language learning revolution",
  description: "Synapse is an AI-first language learning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-black text-white antialiased`}>
        <NextTopLoader color="#FFE9B4" showSpinner={false} />
        <LightFiller className="left-1/2 top-0 -z-10 w-full -translate-x-1/2 transform" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
