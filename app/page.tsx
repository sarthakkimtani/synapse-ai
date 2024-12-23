import { LightFiller } from "@/components/util/LightFiller";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/pages/Hero";

export default function Home() {
  return (
    <>
      <LightFiller />
      <Navbar />
      <Hero />
    </>
  );
}
