import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionHeading({ title, subtitle, className, dark = false }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className={cn("text-4xl font-serif font-bold mb-4", dark ? "text-white" : "text-primary")}>{title}</h2>
      {subtitle && (
        <p className={cn("text-xl max-w-4xl mx-auto", dark ? "text-gray-200" : "text-gray-700")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
