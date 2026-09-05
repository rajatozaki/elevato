import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "flex flex-col",
      align === 'center' && "items-center text-center",
      className
    )}>
      {label && (
        <div className="inline-flex items-center gap-1.5 mb-3 font-mono text-xs uppercase tracking-widest text-accent-dark dark:text-accent font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{label}</span>
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary dark:text-text-on-dark">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-text-secondary dark:text-text-muted-dark mt-4 max-w-2xl leading-relaxed",
          align === 'center' && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
