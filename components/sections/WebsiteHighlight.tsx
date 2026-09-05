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
    <section className="bg-dark dark:bg-[#050505] text-text-on-dark py-24 lg:py-32 overflow-hidden relative border-t border-border-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimateIn>
              <SectionHeading 
                label="Entry Service"
                title="A stronger digital front door for your business" 
                align="left" 
                className="text-text-on-dark" 
              />
              <p className="text-text-muted-dark text-lg mt-6 mb-8 leading-relaxed">
                Elevato builds professional, highly performant websites designed specifically for established companies. We focus on clarity, reliability, and generating genuine enquiries.
              </p>
              
              <ul className="space-y-3.5 mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-text-on-dark font-medium text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" size="lg" href="/contact">
                Discuss Your Website
              </Button>
            </AnimateIn>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <AnimateIn direction="left" delay={200}>
              <div className="aspect-[4/3] rounded-2xl border border-border-dark bg-[#0F0F0F] overflow-hidden flex flex-col shadow-2xl relative">
                <div className="h-10 border-b border-border-dark flex items-center px-4 gap-2 bg-[#080808]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <div className="ml-3 flex-1 h-5 rounded-md bg-[#161616] text-[10px] font-mono text-text-muted-dark/50 flex items-center px-2.5">
                    https://your-business.com
                  </div>
                </div>
                <div className="flex-1 p-6 relative">
                  <div className="w-1/3 h-5 bg-[#1F1F1F] rounded-md mb-6" />
                  <div className="w-3/4 h-10 bg-[#1A1A1A] rounded-md mb-3" />
                  <div className="w-1/2 h-8 bg-[#1A1A1A] rounded-md mb-8" />
                  <div className="w-36 h-10 bg-accent rounded-lg flex items-center justify-center text-xs font-bold text-dark font-mono">
                    SCHEDULE INQUIRY
                  </div>
                  
                  <div className="absolute bottom-6 right-6 w-[55%] h-[65%] rounded-xl border border-border-dark bg-[#161616]/95 backdrop-blur-md shadow-2xl p-4">
                    <div className="flex items-center justify-between mb-3 border-b border-border-dark pb-2">
                      <span className="text-[11px] font-mono text-accent">● Core Metrics</span>
                      <span className="text-[10px] font-mono text-text-muted-dark">99/100</span>
                    </div>
                    <div className="space-y-2 text-[11px] font-mono text-text-muted-dark">
                      <div className="flex justify-between">
                        <span>Speed Index</span>
                        <span className="text-text-on-dark">0.5s</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accessibility</span>
                        <span className="text-text-on-dark">100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SEO Health</span>
                        <span className="text-text-on-dark">100%</span>
                      </div>
                    </div>
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
