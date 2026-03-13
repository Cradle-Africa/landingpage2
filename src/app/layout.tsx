import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BigCradle — The Intelligence Engine for Teams",
  description:
    "BigCradle connects your team with the infrastructure they need to build, ship, and scale — faster than ever before.",
  keywords: ["BigCradle", "teams", "infrastructure", "intelligence engine", "collaboration"],
  openGraph: {
    title: "BigCradle — The Intelligence Engine for Teams",
    description:
      "Connect your team with the infrastructure they need to build, ship, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
