'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { navLinks, ctaLink } from '@/data/navigation';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#080808]/95 backdrop-blur-2xl text-text-on-dark flex flex-col animate-in fade-in duration-300"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-between h-20 px-6 border-b border-border-dark">
        <Logo variant="dark" />
        <button 
          onClick={onClose}
          className="p-2 -mr-2 text-text-on-dark hover:text-accent transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center px-8 gap-8 pb-12">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-3xl font-semibold tracking-tight hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-6 border-t border-border-dark bg-[#0E0E0E]">
        <Button 
          href={ctaLink.href} 
          variant="primary" 
          size="lg" 
          className="w-full justify-center"
          onClick={onClose}
        >
          {ctaLink.label}
        </Button>
      </div>
    </div>
  );
}
