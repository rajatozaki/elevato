import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function ProblemSection() {
  return (
    <section className="bg-starlight py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading title="Your business has grown. Your digital presence should keep up." align="left" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
            <div>
              <p className="text-lg text-text-secondary leading-relaxed">
                Many established businesses deliver excellent work offline but still rely on outdated websites, disconnected enquiry systems, manual follow-ups, spreadsheets, and repetitive internal processes.
              </p>
            </div>
            <div>
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
