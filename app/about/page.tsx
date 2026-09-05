import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Elevato and our approach to building technology around real business problems.',
};

export default function AboutPage() {
  const { founders } = siteConfig;

  return (
    <div className="py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading 
            title="Building technology around real business problems" 
            description=""
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-24 max-w-3xl">
          <AnimateIn delay={100}>
            <div className="space-y-6 text-lg text-text-secondary">
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

        <div className="mt-24 lg:mt-32">
          <AnimateIn delay={200}>
            <h2 className="text-3xl font-bold mb-10">Our approach</h2>
            <ul className="space-y-6 max-w-3xl">
              {[
                { title: 'Keep technology understandable', desc: 'We do not use jargon to obscure what we are doing. You will always know how your systems work.' },
                { title: 'Build around the actual workflow', desc: 'We do not force your team to change how they work just to fit a new tool. We map the software to the business.' },
                { title: 'Communicate clearly', desc: 'You will always know the status of your project, what we need from you, and when things will be delivered.' },
                { title: 'Deliver reliably', desc: 'We test everything thoroughly before it goes live, ensuring it works exactly as expected.' },
                { title: 'Improve through real client work', desc: 'Our best insights come from solving actual problems for our clients, not abstract theory.' }
              ].map((principle, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-1 mr-4 w-5 h-5 rounded-full bg-accent-glow flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-lg">{principle.title}</h3>
                    <p className="text-text-secondary mt-1">{principle.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        <div className="mt-24 lg:mt-32">
          <AnimateIn delay={300}>
            <h2 className="text-3xl font-bold mb-12">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[founders.yash, founders.rajat].map((founder) => (
                <div key={founder.name} className="p-8 border border-border-subtle rounded-2xl bg-white">
                  <div className="w-20 h-20 bg-border-subtle rounded-full flex items-center justify-center text-2xl font-semibold text-text-secondary mb-6">
                    {founder.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-accent-dark font-medium mb-4">{founder.title}</p>
                  <p className="text-text-secondary leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-text-secondary italic">
              Both founders contribute to client communication, lead generation, and business development.
            </p>
          </AnimateIn>
        </div>

        <div className="mt-24 lg:mt-32 pt-16 border-t border-border-subtle text-center">
          <AnimateIn delay={400}>
            <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
            <Button size="lg" variant="primary" href="/contact">Start a Conversation</Button>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
