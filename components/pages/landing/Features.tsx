import { LightFiller } from "@/components/util/LightFiller";
import { BentoGrid } from "@/components/pages/landing/BentoGrid";

export const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden pt-56">
      <h1 className="mb-10 mt-10 flex flex-wrap items-center justify-center px-4 text-center text-3xl font-bold md:mb-0 md:mt-20 md:text-5xl">
        Your<span className="w-40 text-primary md:w-60"> AI Partner </span>for Real-World Fluency
      </h1>
      <BentoGrid />
      <LightFiller className="-right-[340px] top-[360px] -z-10 w-[1250px] rotate-90" />
      <LightFiller className="-left-[340px] top-[360px] -z-10 w-[1250px] -rotate-90" />
    </section>
  );
};
