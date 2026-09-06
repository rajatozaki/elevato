import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { ArchitecturalSkyline } from '@/components/ui/ArchitecturalSkyline';
import { SystemFlowWorkspace } from '@/components/ui/SystemFlowWorkspace';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 pb-16 overflow-hidden">
      <Container>
        {/* Top 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-16">
          {/* Left Column: Big Typography-Led Headline */}
          <div className="lg:col-span-7">
            <AnimateIn direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-surface text-xs font-mono text-text-secondary mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-text-primary font-semibold">Alevate Studio</span>
                <span className="text-text-tertiary">/</span>
                <span>Booking Q3/Q4 · 2 Client Spots</span>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-[-0.035em] leading-[1.08] text-text-primary">
                We build websites, digital engines, and{' '}
                <span className="font-serif italic font-normal text-accent-dark dark:text-accent">
                  automated systems
                </span>
              </h1>
            </AnimateIn>
          </div>

          {/* Right Column: Narrative Intro & CTAs */}
          <div className="lg:col-span-5 lg:pt-14">
            <AnimateIn direction="up" delay={200}>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Alevate helps established businesses modernize their digital foundation and eliminate routine operational bottlenecks through custom Next.js websites and practical automation pipelines.
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={300} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button variant="primary" size="md" href="/contact" className="w-full sm:w-44 text-center justify-center font-semibold">
                Start a Project ↗
              </Button>
              <Button variant="secondary" size="md" href="/work" className="w-full sm:w-44 text-center justify-center font-medium">
                View Selected Work ↗
              </Button>
            </AnimateIn>
          </div>
        </div>

        {/* Architectural Skyline Vector Art */}
        <AnimateIn direction="up" delay={350} className="w-full">
          <ArchitecturalSkyline className="mb-3" />
        </AnimateIn>

        {/* Interactive Systems Showcase Canvas */}
        <AnimateIn direction="up" delay={450} className="w-full">
          <SystemFlowWorkspace />
        </AnimateIn>
      </Container>
    </section>
  );
}
