import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { navLinks } from '@/data/navigation';
import { Logo } from './Logo';
import { Container } from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border-subtle pt-16 pb-8 text-text-primary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-text-secondary max-w-sm text-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-primary mb-6 text-sm uppercase tracking-wider font-mono">Navigation</h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-accent-dark dark:hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-text-primary mb-6 text-sm uppercase tracking-wider font-mono">Connect</h3>
            <ul className="space-y-3.5">
              {siteConfig.social.linkedin && (
                <li>
                  <a 
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-dark dark:hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.social.instagram && (
                <li>
                  <a 
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-dark dark:hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
