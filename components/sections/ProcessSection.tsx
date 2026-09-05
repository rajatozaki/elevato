
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We start by understanding the business, its customers, current systems, and the problem that needs fixing.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the pages, workflow, technical requirements, and scope before development begins.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We design and develop the solution with regular review points instead of disappearing until delivery.',
  },
  {
    number: '04',
    title: 'Improve',
    description: 'After launch, we test, refine, document, and identify worthwhile opportunities for further automation or digital improvement.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative border-t border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <AnimateIn>
              <SectionHeading label="Process" title="How we work" align="left" />
              <p className="mt-6 text-text-secondary leading-relaxed">
                Clear milestones and direct communication. No disappearing for weeks.
              </p>
            </AnimateIn>
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <AnimateIn key={step.number} delay={i * 100}>
                  <div className={`py-8 ${i !== steps.length - 1 ? 'border-b border-border-subtle' : ''} ${i === 0 ? 'pt-0' : ''}`}>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                      <div className="text-accent-dark dark:text-accent font-mono text-xl font-bold">{step.number}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2.5">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
