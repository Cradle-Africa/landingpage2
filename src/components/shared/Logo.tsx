import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a href="/" className={cn("flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="BigCradle"
        width={161}
        height={37}
        className="h-full w-auto max-w-full object-contain object-left"
        priority
      />
    </a>
  );
}
