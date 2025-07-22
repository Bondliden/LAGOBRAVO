import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-4xl font-serif font-bold text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
