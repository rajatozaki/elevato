import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'light' }: LogoProps) {
  const isDarkVariant = variant === 'dark';
  
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-1.5 font-bold text-xl tracking-tight transition-colors", 
        isDarkVariant ? "text-text-on-dark" : "text-text-primary",
        className
      )}
      aria-label="Elevato Home"
    >
      <span>Elevato</span>
      <span className="w-2 h-2 rounded-full bg-accent inline-block mt-0.5" />
    </Link>
  );
}
