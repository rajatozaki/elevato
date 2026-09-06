'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface WorkspacePillar {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  nodes: {
    step: string;
    label: string;
    desc: string;
  }[];
  note: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const pillars: WorkspacePillar[] = [
  {
    id: 'website',
    title: 'Website Architecture',
    subtitle: 'NEXT.JS · TURBOPACK · 0.4s LOAD',
    badge: 'CORE ENGINE',
    nodes: [
      { step: '01', label: 'Discovery Audit', desc: 'Map business bottlenecks & user journey' },
      { step: '02', label: 'Custom App Router', desc: 'SSG static prerendering with zero bloat' },
      { step: '03', label: 'High-Converting UI', desc: 'Designed for mobile lead generation' },
      { step: '04', label: '100% Lighthouse Score', desc: 'Sub-second Core Web Vitals benchmark' },
    ],
    note: 'Zero WordPress plugin fragility. A dedicated TypeScript foundation transferred to your GitHub.',
    metrics: [
      { label: 'Speed Index', value: '0.4s' },
      { label: 'Mobile Performance', value: '100/100' },
      { label: 'Code Ownership', value: '100%' },
    ],
  },
  {
    id: 'automation',
    title: 'Lead Automation Flow',
    subtitle: 'TRIAGE · WHATSAPP · CRM SYNC',
    badge: 'LEAD PIPELINES',
    nodes: [
      { step: '01', label: 'Lead Ingestion', desc: 'Frictionless multi-step inquiry form' },
      { step: '02', label: 'Instant Triage', desc: 'Automated validation & priority sorting' },
      { step: '03', label: 'Direct Notification', desc: 'Real-time alert to WhatsApp / Slack in <2m' },
      { step: '04', label: 'CRM Sync', desc: 'Auto-updated database without manual entry' },
    ],
    note: 'Eliminate lost inquiries. Every prospect is categorized and alerted to your team in under 2 minutes.',
    metrics: [
      { label: 'Lead Response Time', value: '< 2 Mins' },
      { label: 'Routing Accuracy', value: '99.9%' },
      { label: 'Manual Admin Saved', value: '12h/wk' },
    ],
  },
  {
    id: 'delivery',
    title: 'Direct Founder Delivery',
    subtitle: 'YASH & RAJAT · NO JUNIOR LAYERS',
    badge: 'EXECUTION SYSTEM',
    nodes: [
      { step: '01', label: 'Strategy with Yash', desc: 'Discovery, pricing, and solution scoping' },
      { step: '02', label: 'Build with Rajat', desc: 'Production engineering and QA testing' },
      { step: '03', label: 'Async Video Signoffs', desc: 'Weekly video walkthroughs, no silence' },
      { step: '04', label: 'Direct Production Launch', desc: 'Deployed on Vercel with zero lock-in' },
    ],
    note: 'Projects stay close to the people understanding, building, and delivering the work.',
    metrics: [
      { label: 'Direct Founder Access', value: 'Yes' },
      { label: 'Delivery Cadence', value: 'Weekly Async' },
      { label: 'Vendor Lock-in', value: '0%' },
    ],
  },
];

export function SystemFlowWorkspace() {
  const [activeTab, setActiveTab] = useState<string>('website');

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <div className="w-full rounded-2xl border border-border-subtle bg-surface shadow-xs overflow-hidden">
      {/* Workspace System Title Bar */}
      <div className="h-10 bg-surface-elevated/70 border-b border-border-subtle flex items-center justify-between px-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-text-tertiary">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent/80" />
          </span>
          <span className="ml-2 font-semibold text-text-primary tracking-wider uppercase">
            Elevato / Workspace / Core Systems
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent-dark dark:text-accent font-semibold tracking-wider uppercase text-[11px]">
            Ready for Deployment
          </span>
        </div>
      </div>

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
        {/* Left Sidebar: Expertise Tabs */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-surface-elevated/20 flex flex-col justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary font-semibold block mb-4">
              Expertise & Architecture
            </span>

            <div className="space-y-2">
              {pillars.map((pillar) => {
                const isActive = pillar.id === activeTab;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(pillar.id)}
                    className={cn(
                      "w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex flex-col gap-1",
                      isActive
                        ? "bg-surface border-accent/40 shadow-xs ring-1 ring-accent/20"
                        : "bg-transparent border-transparent hover:bg-surface hover:border-border-subtle text-text-secondary"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn("text-xs font-mono font-semibold", isActive ? "text-accent-dark dark:text-accent" : "text-text-tertiary")}>
                        ■ {pillar.badge}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className={cn("text-sm font-bold tracking-tight", isActive ? "text-text-primary" : "text-text-secondary")}>
                      {pillar.title}
                    </span>
                    <span className="text-[11px] font-mono text-text-tertiary">
                      {pillar.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sticky Note Callout */}
          <div className="p-4 rounded-xl border border-accent/20 bg-accent/[0.04] dark:bg-accent/[0.08] text-xs">
            <span className="font-mono text-[10px] text-accent-dark dark:text-accent font-semibold block mb-1 uppercase tracking-wider">
              Note // Core Philosophy
            </span>
            <p className="text-text-secondary leading-relaxed">
              {activePillar.note}
            </p>
          </div>
        </div>

        {/* Right Canvas: Interactive Flowchart & Live Metrics */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-surface flex flex-col justify-between gap-8 relative">
          {/* Subtle Canvas Dot Matrix */}
          <div className="absolute inset-0 bg-[radial-gradient(#888_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-[0.07] dark:opacity-[0.12] pointer-events-none" />

          {/* System Nodes Pipeline */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-text-secondary font-semibold">
                Execution Pipeline // {activePillar.title}
              </span>
              <span className="text-[11px] font-mono text-accent-dark dark:text-accent font-medium">
                Standard: Production Grade
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {activePillar.nodes.map((node, index) => (
                <div
                  key={node.step}
                  className="p-4 rounded-xl border border-border-subtle bg-surface-elevated/40 hover:border-accent/40 transition-colors flex flex-col gap-1.5 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-accent-dark dark:text-accent font-bold">
                      STEP {node.step}
                    </span>
                    <span className="text-[10px] font-mono text-text-tertiary">
                      0{index + 1}/04
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-text-primary">
                    {node.label}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Metrics Footer Strip */}
          <div className="relative z-10 pt-6 border-t border-border-subtle grid grid-cols-3 gap-4 text-center">
            {activePillar.metrics.map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-surface-elevated/30 border border-border-subtle/60">
                <span className="text-lg sm:text-2xl font-extrabold text-text-primary tracking-tight font-mono block">
                  {m.value}
                </span>
                <span className="text-[11px] text-text-secondary font-medium block mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
