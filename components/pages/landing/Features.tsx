import { LightFiller } from "@/components/util/LightFiller";
import { BentoGrid } from "@/components/pages/landing/BentoGrid";

export const Features = () => {
  return (
    <section id="features" className="pt-56 relative overflow-hidden">
      <h1 className="text-3xl md:text-5xl px-4 font-bold text-center flex flex-wrap justify-center items-center mt-10 md:mt-20 mb-10 md:mb-0">
        Your<span className="text-primary w-40 md:w-60"> AI Partner </span>for Real-World Fluency
      </h1>
      <BentoGrid />
      <LightFiller className="-right-[410px] top-72 rotate-90 -z-10" />
      <LightFiller className="-left-[410px] top-72 -rotate-90 -z-10" />
    </section>
  );
};
