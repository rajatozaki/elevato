import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

const features = [
  'Clean, modern design',
  'Responsive development',
  'Clear messaging and information architecture',
  'Fast performance',
  'Strong mobile experience',
  'Enquiry-focused structure',
  'Easy future expansion',
];

export default function WebsiteHighlight() {
  return (
    <section className="bg-dark text-text-on-dark py-24 lg:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateIn>
              <SectionHeading title="A stronger digital front door for your business" align="left" className="text-text-on-dark" />
              <p className="text-text-muted-dark text-lg mt-6 mb-8">
                Elevato builds professional, highly performant websites designed specifically for established companies. We focus on clarity, reliability, and generating genuine enquiries.
              </p>
              
              <ul className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-text-on-dark">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" href="/contact">
                Discuss Your Website
              </Button>
            </AnimateIn>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <AnimateIn direction="left" delay={200}>
              <div className="aspect-[4/3] rounded-xl border border-border-dark bg-[#141414] overflow-hidden flex flex-col shadow-2xl">
                <div className="h-10 border-b border-border-dark flex items-center px-4 gap-2 bg-[#0B0B0B]">
                  <div className="w-3 h-3 rounded-full bg-border-dark" />
                  <div className="w-3 h-3 rounded-full bg-border-dark" />
                  <div className="w-3 h-3 rounded-full bg-border-dark" />
                  <div className="ml-4 flex-1 h-5 rounded bg-border-dark/50" />
                </div>
                <div className="flex-1 p-6 relative">
                  <div className="w-1/3 h-6 bg-border-dark rounded mb-6" />
                  <div className="w-3/4 h-12 bg-border-dark/50 rounded mb-4" />
                  <div className="w-1/2 h-12 bg-border-dark/50 rounded mb-8" />
                  <div className="w-32 h-10 bg-accent rounded" />
                  
                  <div className="absolute top-1/2 right-[-10%] w-[60%] h-[80%] rounded-xl border border-border-dark bg-[#1A1A1A] shadow-xl p-4 transform -translate-y-1/4">
                    <div className="w-1/2 h-4 bg-border-dark rounded mb-4" />
                    <div className="w-full h-24 bg-border-dark/30 rounded" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
