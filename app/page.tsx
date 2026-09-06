import Hero from '@/components/sections/Hero';
import ProblemSection from '@/components/sections/ProblemSection';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ComparisonSection from '@/components/sections/ComparisonSection';
import { ToolsTechnologySection } from '@/components/sections/ToolsTechnologySection';
import WebsiteHighlight from '@/components/sections/WebsiteHighlight';
import AISection from '@/components/sections/AISection';
import WorkPreview from '@/components/sections/WorkPreview';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutPreview from '@/components/sections/AboutPreview';
import FinalCTA from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesPreview />
      <ComparisonSection />
      <ToolsTechnologySection />
      <WebsiteHighlight />
      <AISection />
      <WorkPreview />
      <ProcessSection />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}

