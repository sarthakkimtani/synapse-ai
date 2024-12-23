import { LightFiller } from "@/components/util/LightFiller";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedTitle } from "@/components/pages/AnimatedTitle";

export default function Home() {
  return (
    <>
      <LightFiller />
      <Navbar />
      <AnimatedTitle />
    </>
  );
}
