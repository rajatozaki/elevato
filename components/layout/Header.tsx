'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { navLinks, ctaLink } from '@/data/navigation';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          isScrolled 
            ? "bg-starlight/85 dark:bg-starlight/85 backdrop-blur-md border-b border-border-subtle dark:border-border-subtle py-3 shadow-xs" 
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 bg-surface/80 dark:bg-surface/80 px-6 py-2 rounded-full border border-border-subtle dark:border-border-subtle shadow-xs backdrop-blur-md">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent-dark dark:hover:text-accent",
                    pathname === link.href ? "text-text-primary font-semibold" : "text-text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button href={ctaLink.href} variant="primary" size="md">
                {ctaLink.label}
              </Button>
            </div>

            {/* Mobile Actions (Toggle + Menu Button) */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button 
                className="p-2 text-text-primary hover:text-accent-dark dark:hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
