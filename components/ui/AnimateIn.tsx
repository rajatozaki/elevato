'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function AnimateIn({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up' 
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(() => getPrefersReducedMotion());

  useEffect(() => {
    if (getPrefersReducedMotion()) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  const getTranslate = () => {
    if (isVisible) return 'translate(0)';
    switch (direction) {
      case 'up': return 'translateY(16px)';
      case 'down': return 'translateY(-16px)';
      case 'left': return 'translateX(16px)';
      case 'right': return 'translateX(-16px)';
      default: return 'translateY(16px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTranslate(),
        transition: 'opacity 600ms ease-out, transform 600ms ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
