import Image from 'next/image';
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
    desc: 'Frictionless enquiry flow engineered for mobile conversion.',
  },
  {
    num: '03',
    title: 'Instant Lead Routing',
    desc: 'Automated triage pipelines to WhatsApp, Email, & CRM.',
  },
  {
    num: '04',
    title: '100% Code Ownership',
    desc: 'Clean GitHub repo transferred to you with zero lock-in.',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 flex items-center overflow-hidden">
      {/* Atmospheric 'Elevate' Background Art */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none">
        <Image
          src="/images/elevate-hero.jpg"
          alt="Elevato Mountain Peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-center opacity-35 dark:opacity-25 transition-opacity duration-700 filter saturate-[1.1]"
        />
        {/* Gradient overlays for seamless text readability and dark/light mode blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-starlight via-starlight/85 to-transparent dark:from-dark dark:via-dark/85 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-starlight via-transparent to-starlight/40 dark:from-dark dark:via-transparent dark:to-dark/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl text-left">
          {/* Studio Status Pill */}
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-surface/90 backdrop-blur-md text-xs font-mono text-text-secondary mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent inline-block animate-pulse" />
              <span className="text-text-primary font-semibold">Available for Q3/Q4</span>
              <span className="text-text-tertiary">/</span>
              <span>2 Client Spots Open</span>
            </div>
          </AnimateIn>

          {/* Expressive Display Headline (Sample Inspired) */}
          <AnimateIn direction="up" delay={100}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-[-0.045em] leading-[0.92] text-text-primary uppercase">
              rise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#22C55E]">
                above.
              </span>
            </h1>
          </AnimateIn>

          {/* Short Phrase Tagline */}
          <AnimateIn direction="up" delay={200}>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-text-primary mt-6 max-w-2xl leading-snug">
              In a sea of ordinary, make sure your website is set apart from the competition.
            </p>
          </AnimateIn>

          {/* Supporting Pitch */}
          <AnimateIn direction="up" delay={250}>
            <p className="text-base sm:text-lg text-text-secondary mt-3.5 max-w-xl leading-relaxed">
              Elevato builds high-performance, conversion-focused websites and practical workflow automations for established businesses ready to modernize.
            </p>
          </AnimateIn>

          {/* CTAs */}
          <AnimateIn direction="up" delay={300} className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Start a Project
            </Button>
            <Button variant="secondary" size="lg" href="/work">
              View Our Work
            </Button>
          </AnimateIn>
        </div>

        {/* Capabilities Grid */}
        <AnimateIn direction="up" delay={400} className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {heroPillars.map((pillar) => (
              <div 
                key={pillar.num}
                className="p-4 sm:p-5 rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-md shadow-xs hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-xs font-mono text-accent-dark dark:text-accent font-semibold block mb-1.5">
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
