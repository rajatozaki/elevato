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
    <div className="py-24 lg:py-32 relative overflow-hidden">
      <Container>
        <AnimateIn>
          <SectionHeading 
            label="Service Portfolio"
            title="Practical digital services for established businesses" 
            description="Alevate works with businesses that need a stronger digital presence, more efficient processes, or both."
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-24 space-y-12 lg:space-y-16">
          {services.map((service, index) => {
            const isDarkHighlight = service.id === 'ai-automation';
            const isEven = index % 2 !== 0;

            return (
              <AnimateIn key={service.id} delay={index * 100}>
                <section 
                  id={service.id}
                  className={cn(
                    "rounded-3xl p-8 md:p-12 lg:p-14 border transition-all duration-300 scroll-mt-28 shadow-xs",
                    isDarkHighlight 
                      ? "bg-dark text-text-on-dark border-border-dark" 
                      : "bg-surface border-border-subtle text-text-primary"
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    <div className={cn("lg:col-span-7", isEven ? "lg:order-2" : "lg:order-1")}>
                      <span className="text-xs font-mono uppercase tracking-widest text-accent-dark dark:text-accent font-semibold block mb-2">
                        0{index + 1} {'//'} Core Service
                      </span>
                      <h2 className={cn("text-2xl sm:text-3xl font-bold mb-5", isDarkHighlight ? "text-text-on-dark" : "text-text-primary")}>
                        {service.title}
                      </h2>
                      <p className={cn(
                        "text-base md:text-lg mb-8 leading-relaxed",
                        isDarkHighlight ? "text-text-muted-dark" : "text-text-secondary"
                      )}>
                        {service.fullDescription}
                      </p>
                      
                      <div className={cn(
                        "mb-8 p-5 rounded-xl border",
                        isDarkHighlight ? "bg-[#1F1F1E] border-border-dark" : "bg-surface-elevated border-border-subtle"
                      )}>
                        <h3 className="font-mono text-xs uppercase tracking-wider font-semibold mb-2 text-accent-dark dark:text-accent">Who is it for?</h3>
                        <p className={cn(
                          "text-sm md:text-base leading-relaxed",
                          isDarkHighlight ? "text-text-muted-dark" : "text-text-secondary"
                        )}>
                          {service.whoIsItFor}
                        </p>
                      </div>

                      <div>
                        <h3 className={cn("font-mono text-xs uppercase tracking-wider font-semibold mb-3", isDarkHighlight ? "text-text-on-dark" : "text-text-primary")}>
                          Typical problems
                        </h3>
                        <ul className="space-y-2.5">
                          {service.typicalProblems.map((problem, i) => (
                            <li key={i} className="flex items-start text-sm md:text-base">
                              <span className="text-accent-dark dark:text-accent mr-2.5 mt-0.5 font-bold">•</span>
                              <span className={isDarkHighlight ? "text-text-muted-dark" : "text-text-secondary"}>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={cn(
                      "lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl",
                      isEven ? "lg:order-1" : "lg:order-2",
                      isDarkHighlight ? "bg-[#1F1F1E] border border-border-dark" : "bg-surface-elevated border border-border-subtle"
                    )}>
                      <div>
                        <div className="mb-7">
                          <h3 className={cn("font-mono text-xs uppercase tracking-wider font-semibold mb-3", isDarkHighlight ? "text-text-on-dark" : "text-text-primary")}>
                            What we build
                          </h3>
                          <ul className="space-y-2">
                            {service.whatWeBuild.map((item, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="text-accent-dark dark:text-accent mr-2 mt-0.5">✓</span>
                                <span className={isDarkHighlight ? "text-text-muted-dark" : "text-text-secondary"}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <h3 className={cn("font-mono text-xs uppercase tracking-wider font-semibold mb-3", isDarkHighlight ? "text-text-on-dark" : "text-text-primary")}>
                            Project outputs
                          </h3>
                          <ul className="space-y-2">
                            {service.projectOutputs.map((output, i) => (
                              <li key={i} className="flex items-start text-sm">
                                <span className="text-accent-dark dark:text-accent mr-2 mt-0.5">✓</span>
                                <span className={isDarkHighlight ? "text-text-muted-dark" : "text-text-secondary"}>{output}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className={cn("pt-4 border-t", isDarkHighlight ? "border-border-dark" : "border-border-subtle")}>
                        <Button variant={isDarkHighlight ? "primary" : "secondary"} href={service.cta.href} className="w-full justify-center">
                          {service.cta.label}
                        </Button>
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
