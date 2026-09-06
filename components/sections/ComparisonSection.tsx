'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface ComparisonItem {
  id: string;
  category: 'frontend' | 'operations' | 'delivery';
  aspect: string;
  traditional: {
    title: string;
    description: string;
  };
  alevate: {
    title: string;
    description: string;
  };
}

const comparisons: ComparisonItem[] = [
  {
    id: 'performance',
    category: 'frontend',
    aspect: 'Speed & Architecture',
    traditional: {
      title: 'Bloated WordPress / Site Builders',
      description: 'Slow 5–8 second load times, unmaintained plugins, fragile updates, and failing Core Web Vitals that hurt Google ranking.',
    },
    alevate: {
      title: 'Custom Next.js App Router',
      description: 'Sub-second (0.4s) page loads, zero plugin bloat, static site generation (SSG), and 99+ Core Web Vitals on mobile and desktop.',
    },
  },
  {
    id: 'leads',
    category: 'operations',
    aspect: 'Lead Response & Routing',
    traditional: {
      title: 'Buried in a Shared Email Inbox',
      description: 'Leads take 24–48 hours to be reviewed manually. Unassigned enquiries get lost, and staff forget to follow up.',
    },
    alevate: {
      title: 'Automated Instant Triage (<2 Mins)',
      description: 'Forms automatically validate data, notify the right team member on WhatsApp/Slack, and sync instantly into your CRM.',
    },
  },
  {
    id: 'ownership',
    category: 'delivery',
    aspect: 'Code Ownership & Access',
    traditional: {
      title: 'Vendor Lock-in & Markups',
      description: 'Proprietary platforms, withheld admin access, and monthly maintenance fees just to change basic text or images.',
    },
    alevate: {
      title: '100% Client Ownership',
      description: 'Clean TypeScript codebase transferred directly to your GitHub and deployed on your own Vercel account with zero hostage fees.',
    },
  },
  {
    id: 'communication',
    category: 'delivery',
    aspect: 'Project Communication',
    traditional: {
      title: 'Disappearing for Weeks',
      description: 'Vague timelines, radio silence after deposit, and surprise delays delivered at the end of an unmonitored deadline.',
    },
    alevate: {
      title: 'Weekly Async Video Updates',
      description: 'Direct Slack/WhatsApp line, weekly async video walkthroughs of real progress, and milestone-based signoffs before launch.',
    },
  },
  {
    id: 'team-access',
    category: 'delivery',
    aspect: 'Who Actually Builds Your Work',
    traditional: {
      title: 'Passed Down to Junior Staff',
      description: 'Pitched by senior salespeople, then outsourced or handed off to junior interns with minimal technical experience.',
    },
    alevate: {
      title: 'Direct Founder Execution',
      description: 'You work directly with Yash (strategy & automation design) and Rajat (front-end execution & delivery systems).',
    },
  },
];

type CategoryFilter = 'all' | 'frontend' | 'operations' | 'delivery';

export default function ComparisonSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredComparisons = activeFilter === 'all'
    ? comparisons
    : comparisons.filter((c) => c.category === activeFilter);

  return (
    <section className="py-24 lg:py-32 relative border-t border-border-subtle">
      <Container>
        <AnimateIn>
          <SectionHeading 
            label="The Standard"
            title="The difference between a generic website and real leverage"
            description="Most web agencies sell static pages that look fine on day one but add zero operational efficiency. Here is how Alevate is built differently."
            align="center"
          />
        </AnimateIn>

        {/* Category Filters */}
        <AnimateIn delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Dimensions' },
            { id: 'frontend', label: 'Speed & Front-End' },
            { id: 'operations', label: 'Lead Operations' },
            { id: 'delivery', label: 'Delivery & Ownership' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as CategoryFilter)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-150 border",
                activeFilter === tab.id
                  ? "bg-accent text-[#111111] font-semibold border-accent shadow-xs"
                  : "bg-surface border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent/40"
              )}
            >
              {tab.label}
            </button>
          ))}
        </AnimateIn>

        {/* Comparison Cards Grid */}
        <div className="mt-12 space-y-6 max-w-5xl mx-auto">
          {filteredComparisons.map((item, index) => (
            <AnimateIn key={item.id} delay={index * 50}>
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-xs hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent-dark dark:text-accent font-semibold">
                    0{index + 1} {'//'} {item.aspect}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Traditional Agency */}
                  <div className="p-5 rounded-xl border border-border-subtle/80 bg-surface-elevated/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          ✕
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold">
                          Traditional Agency
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-text-primary mb-2">
                        {item.traditional.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.traditional.description}
                      </p>
                    </div>
                  </div>

                  {/* Alevate Standard */}
                  <div className="p-5 rounded-xl border border-accent/30 bg-accent/[0.03] dark:bg-accent/[0.05] flex flex-col justify-between relative overflow-hidden">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-5 h-5 rounded-full bg-accent text-[#111111] flex items-center justify-center text-xs font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-accent-dark dark:text-accent font-semibold">
                          The Alevate Standard
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-text-primary mb-2">
                        {item.alevate.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.alevate.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <AnimateIn delay={300} className="mt-14 max-w-2xl mx-auto text-center p-8 rounded-2xl border border-border-subtle bg-surface shadow-xs">
          <h3 className="text-xl font-bold text-text-primary mb-2">
            Ready to upgrade your digital foundation?
          </h3>
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            Tell us about your business and we will determine whether the right starting point is a new website, a lead funnel, or workflow automation.
          </p>
          <Button variant="primary" size="md" href="/contact">
            Start a Conversation
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
