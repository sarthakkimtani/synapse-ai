import Image from "next/image";

import { AppNavbar } from "@/components/common/AppNavbar";
import { WritingCard } from "@/components/pages/writing/WritingCard";

import Grid from "@/assets/grid.svg";

export const metadata = {
  title: "Synapse: AI Writing Review",
  description: "Enhance your writing with AI-powered grammar and style suggestions.",
};

export default function Writing() {
  return (
    <section className="min-h-screen overflow-auto">
      <Image src={Grid} className="-z-10 object-cover" fill alt="Grid" />
      <AppNavbar className="px-6 lg:px-20 py-6 lg:pt-8 pb-0" />
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl lg:text-4xl mt-8 lg:mt-0 font-bold mb-2 text-center text-primary">
          AI Writing Review
        </h1>
        <p className="text-center p-4 lg:p-0 text-gray-400">
          Enhance your writing with AI-powered grammar and style suggestions.
        </p>
        <WritingCard />
      </div>
    </section>
  );
}
