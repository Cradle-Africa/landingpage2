import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
