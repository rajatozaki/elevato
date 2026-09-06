'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { navLinks, ctaLink } from '@/data/navigation';
import { siteConfig } from '@/data/site';
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
          "fixed top-0 inset-x-0 z-40 transition-all duration-200",
          isScrolled 
            ? "bg-starlight/90 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-xs" 
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <Logo />
              <Link 
                href="/contact" 
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-subtle bg-surface text-[11px] font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors shadow-2xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{siteConfig.availability.badge}</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <nav className="flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={cn(
                        "relative py-1 transition-colors hover:text-text-primary flex flex-col items-center",
                        isActive ? "text-text-primary font-semibold" : "text-text-secondary"
                      )}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent absolute -bottom-1" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-3 pl-2 border-l border-border-subtle">
                <ThemeToggle />
                <Button href={ctaLink.href} variant="primary" size="md" className="rounded-lg px-4 py-2 text-xs font-semibold">
                  {ctaLink.label}
                </Button>
              </div>
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
