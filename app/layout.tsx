import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { LightFiller } from "@/components/util/LightFiller";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${plusJakartaSans.className} antialiased bg-black text-white`}>
        <LightFiller className="w-full top-0 left-1/2 transform -translate-x-1/2 -z-10" />
        {children}
      </body>
    </html>
  );
}
