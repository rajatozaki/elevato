import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'light' }: LogoProps) {
  const isDark = variant === 'dark';
  
  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-1 font-semibold text-xl tracking-tight", 
        isDark ? "text-text-on-dark" : "text-text-primary",
        className
      )}
      aria-label="Elevato Home"
    >
      Elevato
      <svg 
        width="8" 
        height="8" 
        viewBox="0 0 8 8" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-accent mt-1"
        aria-hidden="true"
      >
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
    </Link>
  );
}
