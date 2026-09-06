import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showMarkOnly?: boolean;
}

export function AlevateMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("w-7 h-7", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        {/* Left Leg Base Foot */}
        <polygon points="6,86 23,86 23,71 12,71" />
        {/* Upper Left Stroke to Apex */}
        <polygon points="35,12 47,12 47,46 35,46" />
        {/* Right Leg */}
        <polygon points="47,12 60,12 94,86 77,86 49,28" />
      </g>
      {/* 3 Green Elevation Steps */}
      <g fill="#1DB954">
        <rect x="23" y="71" width="10" height="10" rx="0.5" />
        <rect x="31" y="60" width="10" height="10" rx="0.5" />
        <rect x="39" y="49" width="10" height="10" rx="0.5" />
      </g>
    </svg>
  );
}

export function Logo({ className, variant = 'auto', showMarkOnly = false }: LogoProps) {
  const textColor =
    variant === 'dark'
      ? 'text-text-on-dark'
      : variant === 'light'
      ? 'text-text-primary'
      : 'text-text-primary';

  if (showMarkOnly) {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center", textColor, className)}
        aria-label="Alevate Home"
      >
        <AlevateMark />
      </Link>
    );
  }

  return (
    <Link 
      href="/" 
      className={cn(
        "inline-flex items-center gap-0.5 group font-sans tracking-tight select-none transition-transform duration-200 hover:scale-[1.01]", 
        textColor,
        className
      )}
      aria-label="Alevate Home"
    >
      <span className="relative inline-flex items-center justify-center w-[26px] h-[26px] mr-[1px]">
        <AlevateMark className="w-full h-full" />
      </span>
      <span className="text-2xl font-bold tracking-[-0.035em]">levate</span>
    </Link>
  );
}
