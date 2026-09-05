import type { Metadata } from 'next';
import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Practical digital services for established businesses, from website development to AI automation.',
};

export default function ServicesPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading 
            title="Practical digital services for established businesses" 
            description="We build websites that generate leads and implement automation that saves time."
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-24 space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isDark = service.id === 'ai-automation';
            const isEven = index % 2 !== 0;

            return (
              <AnimateIn key={service.id} delay={index * 100}>
                <section 
                  id={service.id}
                  className={cn(
                    "rounded-2xl p-8 md:p-12 lg:p-16",
                    isDark ? "bg-dark text-text-on-dark" : "bg-starlight border border-border-subtle"
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className={cn(isEven ? "lg:order-2" : "lg:order-1")}>
                      <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                      <p className={cn(
                        "text-lg mb-8",
                        isDark ? "text-text-muted-dark" : "text-text-secondary"
                      )}>
                        {service.fullDescription}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="font-semibold text-lg mb-3">Who is it for?</h3>
                        <p className={cn(
                          isDark ? "text-text-muted-dark" : "text-text-secondary"
                        )}>
                          {service.whoIsItFor}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h3 className="font-semibold text-lg mb-3">Typical problems</h3>
                        <ul className="space-y-2">
                          {service.typicalProblems.map((problem, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-accent mr-2 mt-1.5 leading-none">•</span>
                              <span className={isDark ? "text-text-muted-dark" : "text-text-secondary"}>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={cn(
                      isEven ? "lg:order-1 lg:pr-8 lg:border-r" : "lg:order-2 lg:pl-8 lg:border-l",
                      "border-border-subtle/50 flex flex-col"
                    )}>
                      <div className="mb-8">
                        <h3 className="font-semibold text-lg mb-3">What we build</h3>
                        <ul className="space-y-2">
                          {service.whatWeBuild.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-accent mr-2 mt-1.5 leading-none">•</span>
                              <span className={isDark ? "text-text-muted-dark" : "text-text-secondary"}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-10">
                        <h3 className="font-semibold text-lg mb-3">Project outputs</h3>
                        <ul className="space-y-2">
                          {service.projectOutputs.map((output, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-accent mr-2 mt-1.5 leading-none">•</span>
                              <span className={isDark ? "text-text-muted-dark" : "text-text-secondary"}>{output}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto pt-4">
                        <Button variant={isDark ? "primary" : "secondary"} href={service.cta.href}>{service.cta.label}</Button>
                      </div>
                    </div>
                  </div>
                </section>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
