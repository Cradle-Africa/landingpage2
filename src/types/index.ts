export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  megaMenu?: {
    title: string;
    subtitle: string;
    items: MegaMenuItem[];
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarFallback: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
