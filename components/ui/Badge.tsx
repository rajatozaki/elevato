import { cn } from '@/lib/utils';

interface BadgeProps {
  label: string;
  variant?: 'concept' | 'demo' | 'internal' | 'client';
  className?: string;
}

export function Badge({ label, variant = 'client', className }: BadgeProps) {
  const variants = {
    concept: "bg-accent/10 text-accent",
    demo: "bg-accent/10 text-accent",
    internal: "bg-text-primary/10 text-text-secondary",
    client: "bg-accent text-dark",
  };

  return (
    <span className={cn(
      "inline-flex items-center justify-center text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap",
      variants[variant],
      className
    )}>
      {label}
    </span>
  );
}
