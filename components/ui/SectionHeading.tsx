import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  inverted = false,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "flex flex-col",
      align === 'center' && "items-center text-center",
      className
    )}>
      {label && (
        <div className="inline-flex items-center gap-1.5 mb-3 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{label}</span>
        </div>
      )}
      <h2 className={cn(
        "text-3xl lg:text-4xl font-bold tracking-tight",
        inverted ? "text-text-on-dark" : "text-text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg mt-4 max-w-2xl leading-relaxed",
          inverted ? "text-text-muted-dark" : "text-text-secondary",
          align === 'center' && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
