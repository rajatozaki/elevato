import { cn } from '@/lib/utils';

interface BadgeProps {
  label: string;
  variant?: 'concept' | 'demo' | 'internal' | 'client';
  className?: string;
}

export function Badge({ label, variant = 'client', className }: BadgeProps) {
  const variants = {
    concept: "bg-accent/15 text-accent-dark dark:text-accent border border-accent/25",
    demo: "bg-accent/15 text-accent-dark dark:text-accent border border-accent/25",
    internal: "bg-black/5 dark:bg-white/10 text-text-secondary dark:text-text-muted-dark border border-border-subtle dark:border-border-subtle",
    client: "bg-accent text-[#080808] font-semibold shadow-xs",
  };

  return (
    <span className={cn(
      "inline-flex items-center justify-center text-[11px] font-mono px-3 py-1 rounded-full font-medium whitespace-nowrap",
      variants[variant],
      className
    )}>
      {label}
    </span>
  );
}
