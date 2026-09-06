import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { siteConfig } from '@/data/site';

export default function AboutPreview() {
  const { founders } = siteConfig;

  return (
    <section className="py-24 lg:py-32 relative border-t border-border-subtle">
      <Container>
        <AnimateIn>
          <SectionHeading label="Leadership" title="Small team. Direct responsibility." align="center" />
        </AnimateIn>
        
        <div className="max-w-2xl mx-auto mt-6 text-center">
          <AnimateIn delay={100}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Alevate is run by Yash and Rajat. Projects stay close to the people responsible for understanding, building, and delivering the work.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
          {/* Yash */}
          <AnimateIn delay={200}>
            <div className="bg-surface border border-border-subtle p-8 rounded-2xl shadow-xs flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40 h-full justify-between">
              <div>
                <div className="w-20 h-20 bg-surface-elevated border border-border-subtle rounded-full flex items-center justify-center text-2xl font-bold font-mono text-text-primary mb-6 mx-auto">
                  Y
                </div>
                <h3 className="text-xl font-bold text-text-primary">{founders.yash.name}</h3>
                <p className="text-accent-dark dark:text-accent font-medium text-xs font-mono uppercase tracking-wider mb-4">{founders.yash.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {founders.yash.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border-subtle w-full justify-center">
                <a
                  href={founders.yash.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a
                  href={`mailto:${founders.yash.social.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Email
                </a>
              </div>
            </div>
          </AnimateIn>
          
          {/* Rajat */}
          <AnimateIn delay={300}>
            <div className="bg-surface border border-border-subtle p-8 rounded-2xl shadow-xs flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40 h-full justify-between">
              <div>
                <div className="w-20 h-20 bg-surface-elevated border border-border-subtle rounded-full flex items-center justify-center text-2xl font-bold font-mono text-text-primary mb-6 mx-auto">
                  R
                </div>
                <h3 className="text-xl font-bold text-text-primary">{founders.rajat.name}</h3>
                <p className="text-accent-dark dark:text-accent font-medium text-xs font-mono uppercase tracking-wider mb-4">{founders.rajat.title}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {founders.rajat.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-border-subtle w-full justify-center">
                <a
                  href={founders.rajat.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn
                </a>
                <a
                  href={founders.rajat.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
                <a
                  href={`mailto:${founders.rajat.social.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-elevated text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  Email
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
        
        <AnimateIn delay={400} className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-xs text-text-tertiary font-mono">
            * Both founders contribute to client communication, lead generation, and business development.
          </p>
        </AnimateIn>
        
        <AnimateIn delay={500} className="mt-10 text-center">
          <Button variant="ghost" href="/about">
            More About Alevate <span className="ml-1.5">→</span>
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
