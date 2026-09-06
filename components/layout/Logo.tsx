import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showMarkOnly?: boolean;
}

export function Logo({ className, variant = 'auto', showMarkOnly = false }: LogoProps) {
  if (showMarkOnly) {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02]", className)}
        aria-label="Alevate Home"
      >
        {variant === 'dark' ? (
          <Image
            src="/brand/alevate-mark-white.png"
            alt="Alevate"
            width={32}
            height={30}
            className="h-7 w-auto object-contain"
            priority
          />
        ) : variant === 'light' ? (
          <Image
            src="/brand/alevate-mark.png"
            alt="Alevate"
            width={32}
            height={30}
            className="h-7 w-auto object-contain"
            priority
          />
        ) : (
          <>
            <Image
              src="/brand/alevate-mark.png"
              alt="Alevate"
              width={32}
              height={30}
              className="h-7 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/brand/alevate-mark-white.png"
              alt="Alevate"
              width={32}
              height={30}
              className="h-7 w-auto object-contain hidden dark:block"
              priority
            />
          </>
        )}
      </Link>
    );
  }

  return (
    <Link 
      href="/" 
      className={cn(
        "inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02]", 
        className
      )}
      aria-label="Alevate Home"
    >
      {variant === 'dark' ? (
        <Image
          src="/brand/alevate-logo-white.png"
          alt="Alevate"
          width={130}
          height={32}
          className="h-7 sm:h-8 w-auto object-contain"
          priority
        />
      ) : variant === 'light' ? (
        <Image
          src="/brand/alevate-logo.png"
          alt="Alevate"
          width={130}
          height={32}
          className="h-7 sm:h-8 w-auto object-contain"
          priority
        />
      ) : (
        <>
          <Image
            src="/brand/alevate-logo.png"
            alt="Alevate"
            width={130}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain dark:hidden"
            priority
          />
          <Image
            src="/brand/alevate-logo-white.png"
            alt="Alevate"
            width={130}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain hidden dark:block"
            priority
          />
        </>
      )}
    </Link>
  );
}

// Export alias for mark
export const AlevateMark = ({ className }: { className?: string }) => (
  <span className={cn("inline-flex items-center", className)}>
    <Image
      src="/brand/alevate-mark.png"
      alt="Alevate"
      width={32}
      height={30}
      className="h-full w-auto object-contain dark:hidden"
    />
    <Image
      src="/brand/alevate-mark-white.png"
      alt="Alevate"
      width={32}
      height={30}
      className="h-full w-auto object-contain hidden dark:block"
    />
  </span>
);
