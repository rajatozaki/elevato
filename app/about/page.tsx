import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Elevato and our approach to building technology around real business problems.',
};

export default function AboutPage() {
  const { founders } = siteConfig;

  return (
    <div className="py-24 lg:py-32 relative overflow-hidden">
      <BackgroundGrid glow={false} />

      <Container>
        <AnimateIn>
          <SectionHeading 
            label="About Elevato"
            title="Building technology around real business problems" 
            description="We bridge the gap between strong offline operations and modern digital capabilities."
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-20 max-w-3xl">
          <AnimateIn delay={100}>
            <div className="space-y-6 text-lg text-text-secondary dark:text-text-muted-dark leading-relaxed p-8 sm:p-10 rounded-3xl border border-border-subtle dark:border-border-subtle bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-xs">
              <p>
                Elevato started with a simple observation. Many strong businesses have websites and internal systems that have fallen behind the business itself.
              </p>
              <p>
                As companies grow, their processes become more complex, but their digital presence and tools often remain static. The result is a mismatch: excellent real-world services represented by outdated websites, and capable teams slowed down by manual data entry or disconnected tools.
              </p>
              <p>
                We build technology to fix this gap. Whether it is redesigning a website to reflect the actual quality of a business, or implementing automation to handle routine follow-ups, our focus is always on practical utility.
              </p>
            </div>
          </AnimateIn>
        </div>

        <div className="mt-20 lg:mt-28">
          <AnimateIn delay={200}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-dark dark:text-accent font-semibold block mb-2">
              Principles
            </span>
            <h2 className="text-3xl font-bold mb-10 text-text-primary dark:text-text-on-dark">Our approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                { title: 'Keep technology understandable', desc: 'We do not use jargon to obscure what we are doing. You will always know how your systems work.' },
                { title: 'Build around the actual workflow', desc: 'We do not force your team to change how they work just to fit a new tool. We map the software to the business.' },
                { title: 'Communicate clearly', desc: 'You will always know the status of your project, what we need from you, and when things will be delivered.' },
                { title: 'Deliver reliably', desc: 'We test everything thoroughly before it goes live, ensuring it works exactly as expected.' },
                { title: 'Improve through real client work', desc: 'Our best insights come from solving actual problems for our clients, not abstract theory.' }
              ].map((principle, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border-subtle dark:border-border-subtle bg-surface/80 dark:bg-surface/80 backdrop-blur-md flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary dark:text-text-on-dark text-base mb-1">{principle.title}</h3>
                    <p className="text-text-secondary dark:text-text-muted-dark text-sm leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        <div className="mt-20 lg:mt-28">
          <AnimateIn delay={300}>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-dark dark:text-accent font-semibold block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl font-bold mb-10 text-text-primary dark:text-text-on-dark">Founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl">
              {[founders.yash, founders.rajat].map((founder) => (
                <div key={founder.name} className="p-8 border border-border-subtle dark:border-border-subtle rounded-2xl bg-surface/90 dark:bg-surface/90 backdrop-blur-md shadow-xs">
                  <div className="w-18 h-18 bg-starlight dark:bg-surface-elevated border border-border-subtle dark:border-border-subtle rounded-full flex items-center justify-center text-2xl font-bold font-mono text-text-primary dark:text-text-on-dark mb-6">
                    {founder.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-text-primary dark:text-text-on-dark">{founder.name}</h3>
                  <p className="text-accent-dark dark:text-accent font-mono text-xs uppercase tracking-wider font-semibold mb-4">{founder.title}</p>
                  <p className="text-text-secondary dark:text-text-muted-dark leading-relaxed text-sm">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs font-mono text-text-tertiary dark:text-text-muted-dark max-w-4xl">
              * Both founders contribute to client communication, lead generation, and business development.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-24 lg:mt-32 pt-16 border-t border-border-subtle dark:border-border-subtle text-center">
          <AnimateIn delay={400}>
            <h2 className="text-3xl font-bold mb-6 text-text-primary dark:text-text-on-dark">Ready to discuss your project?</h2>
            <Button size="lg" variant="primary" href="/contact">Start a Conversation</Button>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
