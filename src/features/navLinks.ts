import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Solution", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "UseCases", href: "#usecases" },
  {
    label: "Data Annotation",
    href: "/data-annotation",
    megaMenu: {
      title: "BigCradle Intelligent Data Operations",
      subtitle: "Comprehensive data services for AI and autonomous systems",
      items: [
        {
          title: "Data Annotation",
          description: "Structured annotation workflows for training data across image, text, audio, video, and sensor datasets.",
          href: "/data-annotation#annotation",
        },
        {
          title: "Model Evaluation",
          description: "Human feedback systems for AI improvement, output ranking, and behavioral evaluation.",
          href: "/data-annotation#evaluation",
        },
        {
          title: "Data Validation",
          description: "Layered quality assurance systems, dataset auditing, and integrity validation.",
          href: "/data-annotation#validation",
        },
      ],
    },
  },
  { label: "ADIAW", href: "/adiaw", badge: "New" },
];