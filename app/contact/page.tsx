import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Elevato for your new website, landing page, or automation project.',
};

export default function ContactPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading 
            title="Tell us what you are working on" 
            description="Whether you need a new website, a stronger landing page, or want to explore where automation fits into your business, send us a short overview."
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-24">
          <AnimateIn delay={100}>
            <ContactForm />
            
            {siteConfig.email && (
              <p className="mt-8 text-center text-text-secondary text-sm">
                You can also reach us at{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-text-primary font-medium hover:text-accent-dark transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            )}
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
