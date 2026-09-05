import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 relative border-t border-border-subtle">
      <Container>
        <AnimateIn>
          <SectionHeading 
            label="The Challenge"
            title="Your business has grown. Your digital presence should keep up." 
            align="left" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
            <div className="p-8 rounded-2xl border border-border-subtle bg-surface shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-3">
                01 {'//'} The Offline Disconnect
              </span>
              <p className="text-lg text-text-secondary leading-relaxed">
                Many established businesses deliver excellent work offline but still rely on outdated websites, disconnected enquiry systems, manual follow-ups, spreadsheets, and repetitive internal processes.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border-subtle bg-surface shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-3">
                02 {'//'} The Practical Solution
              </span>
              <p className="text-lg text-text-secondary leading-relaxed">
                Elevato helps modernise those parts of the business one step at a time. First, we build a stronger digital foundation. Then, where it makes sense, we automate the processes around it.
              </p>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
