import { Feature, HowItWorksStep, Testimonial } from "@/types";

export const features: Feature[] = [
  {
    icon: "Zap",
    title: "Lightning Fast Deployment",
    description:
      "Ship your projects in minutes, not days. Our infrastructure handles the complexity so your team can focus on what matters.",
  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Built-in security protocols, encrypted pipelines, and compliance-ready architecture to keep your data safe at every layer.",
  },
  {
    icon: "Users",
    title: "Seamless Team Collaboration",
    description:
      "Real-time collaboration tools that connect remote and hybrid teams with shared workspaces and intelligent routing.",
  },
  {
    icon: "BarChart3",
    title: "Actionable Analytics",
    description:
      "Deep insights into team performance, resource utilization, and project health — all in one unified dashboard.",
  },
  {
    icon: "Cpu",
    title: "AI-Powered Automation",
    description:
      "Intelligent workflows that learn from your patterns. Automate repetitive tasks and let your team focus on creative work.",
  },
  {
    icon: "Globe",
    title: "Global Scale Infrastructure",
    description:
      "Edge-optimized, multi-region deployments that deliver sub-100ms latency to users anywhere in the world.",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    icon: "UserPlus",
    title: "Create Your Workspace",
    description:
      "Sign up and configure your team workspace in under two minutes. Invite your team with a single link.",
  },
  {
    step: 2,
    icon: "GitBranch",
    title: "Connect Your Stack",
    description:
      "Integrate with your existing tools — GitHub, Slack, Jira, and 50+ more. Zero migration headaches.",
  },
  {
    step: 3,
    icon: "Rocket",
    title: "Ship & Scale",
    description:
      "Deploy with confidence. Our intelligence engine optimizes resources, monitors health, and scales automatically.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "BigCradle transformed how our engineering team operates. We cut our deployment time by 80% in the first month.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Luminara",
    avatarFallback: "SC",
  },
  {
    quote:
      "The collaboration features are unmatched. Our remote team feels more connected than ever before.",
    name: "Marcus Rivera",
    role: "CTO",
    company: "NovaBuild",
    avatarFallback: "MR",
  },
  {
    quote:
      "We evaluated 12 platforms before choosing BigCradle. The intelligence engine is genuinely a step ahead.",
    name: "Aisha Patel",
    role: "Head of DevOps",
    company: "Stratosphere",
    avatarFallback: "AP",
  },
];
