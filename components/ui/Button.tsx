import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-[#080808] font-semibold hover:bg-accent-dark shadow-xs hover:shadow-md hover:shadow-accent/15 active:scale-[0.99]",
    secondary: "border border-border-subtle bg-surface text-text-primary hover:border-accent/50 hover:bg-surface-elevated shadow-xs active:scale-[0.99]",
    dark: "bg-dark border border-border-dark text-text-on-dark hover:bg-dark-lighter shadow-xs active:scale-[0.99]",
    ghost: "text-text-primary hover:text-accent-dark dark:hover:text-accent hover:bg-black/5 dark:hover:bg-white/5",
  };
  
  const sizes = {
    sm: "text-xs px-3.5 py-1.5",
    md: "text-sm px-5 py-2.5",
    lg: "text-base px-7 py-3.5",
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled} tabIndex={disabled ? -1 : undefined}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
