import { Hero } from "@/components/pages/landing/Hero";
import { Features } from "@/components/pages/landing/Features";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}
