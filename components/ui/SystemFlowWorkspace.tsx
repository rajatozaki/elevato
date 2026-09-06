'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceArchitecture {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  summary: string;
  stages: {
    number: string;
    name: string;
    deliverable: string;
    tech: string[];
  }[];
  outcomes: {
    value: string;
    label: string;
  }[];
  clientGuarantee: string;
}

const architectures: ServiceArchitecture[] = [
  {
    id: 'web',
    tabLabel: '01. Web Architecture',
    category: 'Custom Engineering',
    title: 'High-Performance Website Infrastructure',
    summary: 'Custom-built Next.js digital presence designed for sub-second speeds, flawless mobile responsiveness, and high conversion.',
    stages: [
      {
        number: '01',
        name: 'Discovery & UX Blueprint',
        deliverable: 'Structure pages around actual customer decision triggers and inquiry paths.',
        tech: ['Figma Wireframes', 'Information Architecture'],
      },
      {
        number: '02',
        name: 'Next.js App Router Build',
        deliverable: 'Clean TypeScript codebase with static prerendering and zero third-party plugin bloat.',
        tech: ['Next.js 15', 'Tailwind CSS', 'TypeScript'],
      },
      {
        number: '03',
        name: 'Speed & SEO Calibration',
        deliverable: 'Optimized Core Web Vitals, sub-second LCP, structured metadata, and OG sharing cards.',
        tech: ['0.4s LCP', '100% Lighthouse', 'Edge CDN'],
      },
      {
        number: '04',
        name: 'Deployment & Full Handoff',
        deliverable: 'Direct Vercel deployment with 100% repository transfer to your company GitHub.',
        tech: ['Vercel Edge', 'Zero Lock-in', 'Full IP Transfer'],
      },
    ],
    outcomes: [
      { value: '0.4s', label: 'Average Page Load Time' },
      { value: '100/100', label: 'Mobile Performance Target' },
      { value: '100%', label: 'Code & Asset Ownership' },
    ],
    clientGuarantee: 'No WordPress vulnerabilities or slow page-builder bloat. You receive a proprietary, enterprise-speed asset you fully own.',
  },
  {
    id: 'automation',
    tabLabel: '02. Lead Automation',
    category: 'Operational Pipelines',
    title: 'Automated Lead Capture & Triage Pipeline',
    summary: 'Eliminate missed inquiries and slow follow-ups by routing high-intent prospects directly to your phone or team within minutes.',
    stages: [
      {
        number: '01',
        name: 'Frictionless Ingestion',
        deliverable: 'Fast, validated multi-channel inquiry capture directly on your web property.',
        tech: ['Smart Forms', 'Spam Defense', 'Zero Latency'],
      },
      {
        number: '02',
        name: 'Automated Qualification',
        deliverable: 'Webhook-driven instant triage classifying project budget, urgency, and fit.',
        tech: ['Serverless Webhooks', 'Data Normalization'],
      },
      {
        number: '03',
        name: 'Real-Time Team Alerts',
        deliverable: 'Instant push notifications to WhatsApp, Telegram, or Slack for immediate sales action.',
        tech: ['<2 Min Alert', 'Telegram / WhatsApp API'],
      },
      {
        number: '04',
        name: 'CRM & Spreadsheet Sync',
        deliverable: 'Automatic logging into Notion, HubSpot, or Google Sheets with zero manual data entry.',
        tech: ['Auto CRM Sync', 'Zero Manual Copying'],
      },
    ],
    outcomes: [
      { value: '< 2 Mins', label: 'Inquiry-to-Alert Time' },
      { value: '0', label: 'Dropped Inquiries' },
      { value: '12+ hrs', label: 'Admin Saved per Week' },
    ],
    clientGuarantee: 'Every prospect who reaches out is qualified, timestamped, and pinged directly to your active channels before they look elsewhere.',
  },
  {
    id: 'delivery',
    tabLabel: '03. Studio Delivery',
    category: 'Founder Execution',
    title: 'Direct Founder Partnership & Governance',
    summary: 'Work directly with Yash and Rajat. No account managers, no junior handoffs, and complete transparency from kickoff to launch.',
    stages: [
      {
        number: '01',
        name: 'Strategy with Yash',
        deliverable: 'Business discovery, conversion strategy, workflow design, and fixed-scope pricing.',
        tech: ['Direct Consultation', 'Clear Deliverables'],
      },
      {
        number: '02',
        name: 'Engineering with Rajat',
        deliverable: 'Production engineering, QA testing, custom component builds, and speed benchmarks.',
        tech: ['Senior Engineering', 'Rigorous QA'],
      },
      {
        number: '03',
        name: 'Async Video Walkthroughs',
        deliverable: 'Weekly video progress updates with clickable staging environments for swift feedback.',
        tech: ['Loom Demos', 'Live Staging Previews'],
      },
      {
        number: '04',
        name: 'Launch & Systems Training',
        deliverable: 'Production rollout, thorough documentation, and walkthrough on managing your new setup.',
        tech: ['Documentation', 'Hands-on Handoff'],
      },
    ],
    outcomes: [
      { value: '2 Founders', label: 'Direct Accountability' },
      { value: 'Weekly', label: 'Async Video Check-ins' },
      { value: '0%', label: 'Agency Bureaucracy' },
    ],
    clientGuarantee: 'You communicate directly with the individuals architecting and coding your solution. Fast decisions, honest advice, zero fluff.',
  },
];

export function SystemFlowWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('web');
  const [activeStageIndex, setActiveStageIndex] = useState<number | null>(null);

  const activeArch = architectures.find((a) => a.id === activeTab) || architectures[0];

  return (
    <div className="w-full rounded-2xl border border-border-subtle bg-surface shadow-xs overflow-hidden">
      {/* Studio Process Navigation Bar */}
      <div className="border-b border-border-subtle bg-surface-elevated/40 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {architectures.map((arch) => {
            const isActive = arch.id === activeTab;
            return (
              <button
                key={arch.id}
                onClick={() => {
                  setActiveTab(arch.id);
                  setActiveStageIndex(null);
                }}
                className={cn(
                  'px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150',
                  isActive
                    ? 'bg-surface text-text-primary shadow-xs border border-border-subtle font-semibold text-accent-dark dark:text-accent'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/50'
                )}
              >
                {arch.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-text-tertiary">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="uppercase tracking-wider">{activeArch.category}</span>
        </div>
      </div>

      {/* Main Architecture Showcase */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Architecture Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-dark dark:text-accent font-semibold uppercase tracking-wider mb-2">
            <span>● Architecture Blueprint</span>
            <span className="text-text-tertiary">/</span>
            <span className="text-text-secondary">{activeArch.category}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary mb-2">
            {activeArch.title}
          </h3>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            {activeArch.summary}
          </p>
        </div>

        {/* Process Flow Diagram (Connected Pipeline) */}
        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {activeArch.stages.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              return (
                <div
                  key={stage.number}
                  onMouseEnter={() => setActiveStageIndex(idx)}
                  onMouseLeave={() => setActiveStageIndex(null)}
                  className={cn(
                    'relative p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-default group',
                    isSelected
                      ? 'border-accent bg-surface-elevated shadow-xs ring-1 ring-accent/30'
                      : 'border-border-subtle bg-surface-elevated/30 hover:border-border hover:bg-surface-elevated/60'
                  )}
                >
                  {/* Step Number & Connector Marker */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-accent-dark dark:text-accent">
                        STAGE {stage.number}
                      </span>
                      <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                        0{idx + 1}/04
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-text-primary mb-2 group-hover:text-accent-dark dark:group-hover:text-accent transition-colors">
                      {stage.name}
                    </h4>

                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {stage.deliverable}
                    </p>
                  </div>

                  {/* Tech / Standard Micro Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/50">
                    {stage.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border-subtle text-text-tertiary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Flow Arrow for desktop (between items) */}
                  {idx < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-surface border border-border-subtle items-center justify-center text-text-tertiary shadow-xs pointer-events-none">
                      <svg className="w-3 h-3 text-text-tertiary" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                        <path d="M6 12L10 8L6 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Deliverables & Measurable Outcomes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6 border-t border-border-subtle">
          {/* Left: Studio Guarantee / Takeaway */}
          <div className="lg:col-span-6">
            <div className="p-4 rounded-xl border border-accent/20 bg-accent/[0.03] dark:bg-accent/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-dark dark:text-accent font-semibold mb-1">
                <span>✓</span>
                <span className="uppercase tracking-wider">Studio Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {activeArch.clientGuarantee}
              </p>
            </div>
          </div>

          {/* Right: Quantifiable Outcome Metrics */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3 text-center">
            {activeArch.outcomes.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-xl bg-surface-elevated/40 border border-border-subtle flex flex-col justify-center"
              >
                <span className="text-lg sm:text-2xl font-extrabold text-text-primary tracking-tight font-mono">
                  {item.value}
                </span>
                <span className="text-[11px] text-text-secondary font-medium mt-1 leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
