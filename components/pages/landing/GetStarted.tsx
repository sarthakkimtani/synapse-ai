import { Rocket } from "lucide-react";

import { Button } from "@/components/ui/Button";

export const GetStarted = () => {
  return (
    <section className="pt-24 relative overflow-hidden">
      <h1 className="text-3xl md:text-5xl px-4 font-bold text-center flex flex-wrap justify-center items-center mt-10 md:mt-20 mb-10 md:mb-0">
        Ready to Take The Leap with<span className="text-primary w-40 md:w-60"> Synapse?</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center py-44">
        <Button className="w-2/3 md:w-1/3 lg:w-1/4 h-24 rounded-[50px] font-semibold shadow-[0_0_75px_#FFFAED]">
          <span className="text-2xl md:text-3xl">Get Started</span>
          <Rocket className="ml-4" size={36} />
        </Button>
      </div>
    </section>
  );
};
