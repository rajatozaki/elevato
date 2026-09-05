import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function AboutPreview() {
  return (
    <section className="bg-starlight py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading title="Small team. Direct responsibility." />
        </AnimateIn>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <AnimateIn delay={100}>
            <p className="text-lg lg:text-xl text-text-secondary">
              Elevato is run by Yash and Rajat. Projects stay close to the people responsible for understanding, building, and delivering the work.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <AnimateIn delay={200}>
            <div className="bg-white border border-border-subtle p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-starlight border border-border-subtle rounded-full flex items-center justify-center text-2xl font-semibold text-text-secondary mb-6">
                Y
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Yash</h3>
              <p className="text-accent-dark font-medium mb-4">Founder</p>
              <p className="text-text-secondary text-sm">
                Yash primarily handles sales, client strategy, discovery, pricing, relationships, and automation solution design.
              </p>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={300}>
            <div className="bg-white border border-border-subtle p-8 rounded-xl flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-starlight border border-border-subtle rounded-full flex items-center justify-center text-2xl font-semibold text-text-secondary mb-6">
                R
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Rajat</h3>
              <p className="text-accent-dark font-medium mb-4">Co-founder</p>
              <p className="text-text-secondary text-sm">
                Rajat primarily handles front-end execution, technical delivery, quality assurance, documentation, and delivery systems.
              </p>
            </div>
          </AnimateIn>
        </div>
        
        <AnimateIn delay={400} className="mt-8 text-center max-w-4xl mx-auto">
          <p className="text-sm text-text-secondary italic">
            * Both founders contribute to client communication, lead generation, and business development.
          </p>
        </AnimateIn>
        
        <AnimateIn delay={500} className="mt-12 text-center">
          <Button variant="ghost" href="/about">
            More About Elevato <span className="ml-2">→</span>
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
