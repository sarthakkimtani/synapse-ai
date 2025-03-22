import { Rocket } from "lucide-react";

import { RouteButton } from "@/components/common/RouteButton";

export const GetStarted = () => {
  return (
    <section className="relative overflow-hidden pt-24">
      <h1 className="mb-10 mt-10 flex flex-wrap items-center justify-center px-4 text-center text-3xl font-bold md:mb-0 md:mt-20 md:text-5xl">
        Ready to Take The Leap with<span className="w-40 text-primary md:w-60"> Synapse?</span>
      </h1>
      <div className="flex w-full flex-col items-center justify-center py-44">
        <RouteButton
          className="h-24 w-2/3 rounded-[50px] font-semibold shadow-[0_0_75px_theme(colors.primary)] md:w-1/3 lg:w-1/4"
          routeTo="/exercise"
        >
          <span className="text-2xl lg:text-3xl">Get Started</span>
          <Rocket className="ml-4" size={36} />
        </RouteButton>
      </div>
    </section>
  );
};
