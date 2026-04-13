import type { Metadata } from "next";
import { ADIAWHero } from "@/components/adiaw/ADIAWHero";
import { ADIAWFeatures } from "@/components/adiaw/ADIAWFeatures";
import { ADIAWPartners } from "@/components/adiaw/ADIAWPartners";
import { ADIAWExecutive } from "@/components/adiaw/ADIAWExecutive";
import { ADIAWSpeakers } from "@/components/adiaw/ADIAWSpeakers";
import { ADIAWFellowship } from "@/components/adiaw/ADIAWFellowship";
import { ADIAWCTA } from "@/components/adiaw/ADIAWCTA";
import { ADIAWContact } from "@/components/adiaw/ADIAWContact";
import { ADIAWNavbar } from "@/components/adiaw/ADIAWNavbar";
import { ADIAWStickyBar } from "@/components/adiaw/ADIAWStickyBar";
import { ADIAWVideoSection } from "@/components/adiaw/ADIAWVideoSection";

export const metadata: Metadata = {
  title: "Africa Data Integrity & Annotation Workshop (ADIAW) | BigCradle",
  description:
    "Building Trusted Data Infrastructure for Africa's Digital Economy. Register for the Executive Leadership Workshop or Apply for the ADIAW Talent Fellowship — April 23, Kigali.",
  keywords: [
    "ADIAW",
    "Africa data workshop",
    "AI data annotation",
    "data governance Africa",
    "BigCradle workshop",
    "Rwanda data leadership",
    "Africa AI strategy",
  ],
  openGraph: {
    title: "Africa Data Integrity & Annotation Workshop | BigCradle",
    description:
      "Join senior leaders to navigate the intersection of AI, data governance, and organizational strategy.",
    type: "website",
  },
};

export default function ADIAWPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans">
      <ADIAWNavbar />
      <ADIAWStickyBar />
      <main>
        <ADIAWHero />
        <ADIAWVideoSection />
        <ADIAWExecutive />
        <ADIAWSpeakers />
        <ADIAWPartners />
        <ADIAWFellowship />
        <ADIAWFeatures />
        <ADIAWCTA />
        <ADIAWContact />
      </main>
    </div>
  );
}
