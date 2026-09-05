import { cn } from '@/lib/utils';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showMarkOnly?: boolean;
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
        className={cn("inline-flex items-center", className)}
        aria-label="Elevato Home"
      >
        <svg
          viewBox="0 0 28 28"
          className="w-7 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9L10.5 23H14L7.5 9H4Z"
            fill="currentColor"
          />
          <path
            d="M9.5 23L19.8 3.5C20.4 2.4 21.8 2 22.9 2.6C24 3.2 24.4 4.6 23.8 5.7L13.5 23H9.5Z"
            fill="#1DB954"
          />
        </svg>
      </Link>
    );
  }

  return (
    <Link 
      href="/" 
      className={cn(
        "inline-flex items-center group font-sans tracking-tight select-none transition-transform duration-200 hover:scale-[1.01]", 
        textColor,
        className
      )}
      aria-label="Elevato Home"
    >
      <span className="text-2xl font-bold tracking-[-0.035em]">Ele</span>
      {/* Custom Stylized "v" with elevated green ascending stroke */}
      <span className="relative inline-flex items-center justify-center w-[20px] h-[26px] mx-[0.5px]">
        <svg 
          viewBox="0 0 24 28" 
          className="w-full h-full overflow-visible" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left stroke */}
          <path 
            d="M3 8.5L9.5 22.5H13L6.5 8.5H3Z" 
            fill="currentColor"
          />
          {/* Right upward green stroke */}
          <path 
            d="M8.5 22.5L18.8 3.2C19.4 2.1 20.8 1.7 21.9 2.3C23 2.9 23.4 4.3 22.8 5.4L12.5 22.5H8.5Z" 
            fill="#1DB954" 
          />
        </svg>
      </span>
      <span className="text-2xl font-bold tracking-[-0.035em]">ato</span>
    </Link>
  );
}
