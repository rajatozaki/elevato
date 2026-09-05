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
        <span className="text-xs uppercase tracking-widest text-accent font-medium mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg text-text-secondary mt-4 max-w-2xl",
          align === 'center' && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
