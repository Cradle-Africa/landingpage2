import { BackgroundDecor } from "@/components/shared/BackgroundDecor";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Solutions } from "@/components/sections/Solutions";
import { SolutionsTabs } from "@/components/sections/SolutionsTabs";
import { Results } from "@/components/sections/Results";
import { Trust } from "@/components/sections/Trust";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#FCFCFC] relative min-h-screen overflow-x-hidden">
      <BackgroundDecor />
      <main className="relative z-10 font-sans overflow-x-hidden">
        <Hero />
        <Partners />
        <Solutions />
        <SolutionsTabs />
        <Results />
        <Trust />
      </main>
      <Footer />
    </div>
  );
}