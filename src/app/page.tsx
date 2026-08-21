import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Patents } from "@/components/Patents";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sankha-singhamahapatra.vercel.app/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Achievements />
      <Patents />
      <Projects />
      <Contact />
    </main>
  );
}
