import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { CodeCraftHero } from '@/components/ui/CodeCraftHero';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-24 flex items-center relative">
      <Container className="max-w-5xl mx-auto text-center relative z-10">
        {/* Studio Pill Badge */}
        <AnimateIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-secondary mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <span className="text-text-primary font-medium">Elevato Studio</span>
            <span className="text-text-tertiary">/</span>
            <span>Websites &amp; AI Systems</span>
          </div>
        </AnimateIn>

        {/* Main Headline */}
        <AnimateIn direction="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-text-primary max-w-4xl mx-auto">
            Websites and automation built around how your business actually works.
          </h1>
        </AnimateIn>
        
        {/* Supporting Copy */}
        <AnimateIn direction="up" delay={200}>
          <p className="text-lg md:text-xl text-text-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
            Elevato builds modern websites for established businesses and helps teams automate repetitive work using practical AI systems.
          </p>
        </AnimateIn>
        
        {/* Action CTAs */}
        <AnimateIn direction="up" delay={300} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/contact">
            Start a Project
          </Button>
          <Button variant="secondary" size="lg" href="/work">
            View Our Work
          </Button>
        </AnimateIn>
        
        {/* Code Craft Architecture Canvas */}
        <AnimateIn direction="up" delay={400}>
          <CodeCraftHero />
        </AnimateIn>
      </Container>
    </section>
  );
}
