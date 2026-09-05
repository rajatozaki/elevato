import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <Container className="max-w-4xl mx-auto text-center relative z-10">
        <AnimateIn direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Websites and automation built around how your business actually works.
          </h1>
        </AnimateIn>
        
        <AnimateIn direction="up" delay={100}>
          <p className="text-lg lg:text-xl text-text-secondary mt-6 max-w-2xl mx-auto">
            Elevato builds modern websites for established businesses and helps teams automate repetitive work using practical AI systems.
          </p>
        </AnimateIn>
        
        <AnimateIn direction="up" delay={200} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/contact">
            Start a Project
          </Button>
          <Button variant="secondary" size="lg" href="/work">
            View Our Work
          </Button>
        </AnimateIn>
        
        <AnimateIn delay={400} className="mt-24 flex justify-center opacity-40">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
            <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </AnimateIn>
      </Container>
    </section>
  );
}
