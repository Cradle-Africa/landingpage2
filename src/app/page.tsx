import { BackgroundDecor } from "@/components/shared/BackgroundDecor";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StartSurvey } from "@/components/sections/StartSurvey";
import { GetStarted } from "@/components/sections/GetStarted";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#FCFCFC] relative min-h-screen overflow-x-hidden">
      <BackgroundDecor />
      <main className="relative z-10 font-sans overflow-x-hidden">
        <Hero />
        <Story />
        <Services />
        <HowItWorks />
        <StartSurvey />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}