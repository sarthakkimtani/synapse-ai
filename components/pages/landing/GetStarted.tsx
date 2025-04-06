import Link from "next/link";
import { Rocket } from "lucide-react";

export const GetStarted = () => {
  return (
    <section className="relative overflow-hidden pt-24">
      <h1 className="mb-10 mt-10 flex flex-wrap items-center justify-center px-4 text-center text-3xl font-bold md:mb-0 md:mt-20 md:text-5xl">
        Ready to Take The Leap with<span className="w-40 text-primary md:w-60"> Synapse?</span>
      </h1>
      <div className="flex w-full flex-col items-center justify-center py-44">
        <Link
          href="/exercise"
          className="flex h-24 w-full flex-row items-center justify-center rounded-[50px] bg-primary px-3 py-3 text-center font-medium text-black shadow-[0_0_75px_theme(colors.primary)] transition duration-150 ease-in-out hover:bg-yellow-50 md:w-1/3 md:px-6 md:py-4 md:text-base lg:w-1/4"
        >
          <span className="text-2xl lg:text-3xl">Get Started</span>
          <Rocket className="ml-4" strokeWidth={2} size={36} />
        </Link>
      </div>
    </section>
  );
};
