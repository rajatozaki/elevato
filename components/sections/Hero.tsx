import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

const heroPillars = [
  {
    num: '01',
    title: '0.4s Page Load',
    desc: 'Next.js App Router with 100/100 Core Web Vitals.',
  },
  {
    num: '02',
    title: 'Lead Funnel Architecture',
    desc: 'Frictionless enquiry flow optimized for mobile conversions.',
  },
  {
    num: '03',
    title: 'Instant Lead Routing',
    desc: 'Automated triage pipelines to WhatsApp, Email, & CRM in <2 mins.',
  },
  {
    num: '04',
    title: '100% Code Ownership',
    desc: 'Clean GitHub repo transferred to you with zero vendor lock-in.',
  },
];

export default function Hero() {
  return (
    <section className="min-h-[90vh] pt-36 pb-24 flex items-center relative">
      <Container className="max-w-5xl mx-auto text-center relative z-10">
        {/* Studio Availability Pill Badge */}
        <AnimateIn direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-secondary mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
            <span className="text-text-primary font-semibold">Available for Q3/Q4</span>
            <span className="text-text-tertiary">/</span>
            <span>2 Client Spots Open</span>
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
            Elevato builds fast, high-converting websites for established businesses and eliminates routine operational bottlenecks.
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
        
        {/* Capabilities / Proof Pillars Grid */}
        <AnimateIn direction="up" delay={400} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {heroPillars.map((pillar) => (
              <div 
                key={pillar.num}
                className="p-5 rounded-xl border border-border-subtle bg-surface shadow-xs hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-xs font-mono text-accent-dark dark:text-accent font-semibold block mb-2">
                  {pillar.num} {'//'}
                </span>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
