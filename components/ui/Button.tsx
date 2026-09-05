import { ReactNode, ButtonHTMLAttributes } from 'react';
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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-dark hover:bg-accent-dark",
    secondary: "border border-text-primary text-text-primary hover:bg-text-primary hover:text-starlight",
    dark: "bg-dark text-starlight hover:bg-dark-lighter",
    ghost: "text-text-primary hover:text-accent",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
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
