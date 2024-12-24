import { Hero } from "@/components/pages/landing/Hero";
import { Features } from "@/components/pages/landing/Features";
import { Navbar } from "@/components/layout/Navbar";
import { GetStarted } from "@/components/pages/landing/GetStarted";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <GetStarted />
      <Footer />
    </>
  );
}
