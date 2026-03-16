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
        className="h-[37px] w-[161px] object-contain"
        priority
      />
    </a>
  );
}
