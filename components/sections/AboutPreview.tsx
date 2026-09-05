import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 relative border-t border-border-subtle">
      <Container>
        <AnimateIn>
          <SectionHeading label="Leadership" title="Small team. Direct responsibility." align="center" />
        </AnimateIn>
        
        <div className="max-w-2xl mx-auto mt-6 text-center">
          <AnimateIn delay={100}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Elevato is run by Yash and Rajat. Projects stay close to the people responsible for understanding, building, and delivering the work.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
          <AnimateIn delay={200}>
            <div className="bg-surface border border-border-subtle p-8 rounded-2xl shadow-xs flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40">
              <div className="w-20 h-20 bg-surface-elevated border border-border-subtle rounded-full flex items-center justify-center text-2xl font-bold font-mono text-text-primary mb-6">
                Y
              </div>
              <h3 className="text-xl font-bold text-text-primary">Yash</h3>
              <p className="text-accent-dark dark:text-accent font-medium text-xs font-mono uppercase tracking-wider mb-4">Founder</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Yash primarily handles sales, client strategy, discovery, pricing, relationships, and automation solution design.
              </p>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={300}>
            <div className="bg-surface border border-border-subtle p-8 rounded-2xl shadow-xs flex flex-col items-center text-center transition-all duration-300 hover:border-accent/40">
              <div className="w-20 h-20 bg-surface-elevated border border-border-subtle rounded-full flex items-center justify-center text-2xl font-bold font-mono text-text-primary mb-6">
                R
              </div>
              <h3 className="text-xl font-bold text-text-primary">Rajat</h3>
              <p className="text-accent-dark dark:text-accent font-medium text-xs font-mono uppercase tracking-wider mb-4">Co-founder</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Rajat primarily handles front-end execution, technical delivery, quality assurance, documentation, and delivery systems.
              </p>
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
            More About Elevato <span className="ml-1.5">→</span>
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
