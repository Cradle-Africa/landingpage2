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

export const metadata: Metadata = {
  title: "Africa Data Integrity & Annotation Fellowship (ADIAW) | BigCradle",
  description:
    "Building Trusted Data Infrastructure for Africa's Digital Economy. Apply for the ADIAW Fellowship or Register for the Executive Leadership Workshop — April 23, Kigali.",
  keywords: [
    "ADIAW",
    "Africa data fellowship",
    "AI data annotation",
    "data labeling Africa",
    "BigCradle fellowship",
    "Rwanda data training",
    "Africa AI workforce",
  ],
  openGraph: {
    title: "Africa Data Integrity & Annotation Fellowship | BigCradle",
    description:
      "Equipping African talent with practical skills to work in the global AI data ecosystem.",
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
        <ADIAWFeatures />
        <ADIAWPartners />
        <ADIAWExecutive />
        <ADIAWSpeakers />
        <ADIAWFellowship />
        <ADIAWCTA />
        <ADIAWContact />
      </main>
    </div>
  );
}
