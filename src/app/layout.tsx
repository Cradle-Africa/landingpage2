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
  title: "BigCradle — The Intelligence Engine for Africa",
  description:
    "BigCradle connects your team with the infrastructure they need to build, ship, and scale — faster than ever before.",
  keywords: ["BigCradle", "teams", "infrastructure", "intelligence engine", "collaboration"],
  openGraph: {
    title: "BigCradle — The Intelligence Engine for Africa",
    description:
      "Connect your team with the infrastructure they need to build, ship, and scale.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "BigCradle",
    capable: true,
    statusBarStyle: "default",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="BigCradle" />
      </head>
      <body className={`${dmSans.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
