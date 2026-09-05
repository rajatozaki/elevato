'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CodeCraftHero() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'automation'>('frontend');

  return (
    <div className="w-full max-w-4xl mx-auto mt-14 relative group">
      {/* Ambient glow behind card */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

      {/* Main Terminal / Code Craft Window */}
      <div className="rounded-xl border border-border-subtle dark:border-border-dark bg-white/85 dark:bg-[#0E0E0E]/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-border-subtle dark:border-border-dark bg-starlight/60 dark:bg-[#141414]/80 gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="text-xs font-mono text-text-secondary dark:text-text-muted-dark ml-2">
              elevato://engine-v1.0
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-white dark:bg-[#1A1A1A] p-0.5 rounded-lg border border-border-subtle dark:border-border-dark text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('frontend')}
              className={cn(
                "px-3 py-1 rounded-md font-medium transition-all duration-150",
                activeTab === 'frontend'
                  ? "bg-dark text-starlight dark:bg-accent dark:text-dark shadow-sm"
                  : "text-text-secondary dark:text-text-muted-dark hover:text-text-primary dark:hover:text-text-on-dark"
              )}
            >
              01 // Web Front-End
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('automation')}
              className={cn(
                "px-3 py-1 rounded-md font-medium transition-all duration-150",
                activeTab === 'automation'
                  ? "bg-dark text-starlight dark:bg-accent dark:text-dark shadow-sm"
                  : "text-text-secondary dark:text-text-muted-dark hover:text-text-primary dark:hover:text-text-on-dark"
              )}
            >
              02 // AI Automation
            </button>
          </div>

          {/* Live Status indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-accent-dark dark:text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Ready</span>
          </div>
        </div>

        {/* Code / Workflow Canvas */}
        <div className="p-5 md:p-7 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-left">
          {activeTab === 'frontend' ? (
            <div className="space-y-2 text-text-secondary dark:text-text-muted-dark">
              <div className="text-text-tertiary dark:text-text-muted-dark/50">
                {`// High-performance digital front-end for established business`}
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">export const </span>
                <span className="text-text-primary dark:text-text-on-dark">DigitalPresence </span>
                <span className="text-text-tertiary dark:text-text-muted-dark">= </span>
                <span className="text-text-primary dark:text-text-on-dark">{`{`}</span>
              </div>
              <div className="pl-5 border-l border-border-subtle dark:border-border-dark ml-2 space-y-1">
                <div>
                  <span className="text-text-primary dark:text-text-on-dark">client: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;Established Healthcare / Real Estate / Services&apos;</span>,
                </div>
                <div>
                  <span className="text-text-primary dark:text-text-on-dark">architecture: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;Next.js App Router (RSC + SSG)&apos;</span>,
                </div>
                <div>
                  <span className="text-text-primary dark:text-text-on-dark">coreWebVitals: </span>
                  <span className="text-text-primary dark:text-text-on-dark">{`{ `}</span>
                  <span className="text-accent-dark dark:text-accent font-semibold">lcp: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;0.6s&apos;</span>,
                  <span className="text-accent-dark dark:text-accent font-semibold"> fid: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;12ms&apos;</span>,
                  <span className="text-accent-dark dark:text-accent font-semibold"> cls: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;0.00&apos;</span>
                  <span className="text-text-primary dark:text-text-on-dark">{` }`}</span>,
                </div>
                <div>
                  <span className="text-text-primary dark:text-text-on-dark">conversionFlow: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;Instant Inquiry + Accessible Mobile Booking&apos;</span>,
                </div>
                <div>
                  <span className="text-text-primary dark:text-text-on-dark">status: </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-accent/15 text-accent-dark dark:text-accent text-[11px] font-semibold">
                    &apos;PRODUCTION_READY&apos;
                  </span>
                </div>
              </div>
              <div className="text-text-primary dark:text-text-on-dark">{`};`}</div>
            </div>
          ) : (
            <div className="space-y-2 text-text-secondary dark:text-text-muted-dark">
              <div className="text-text-tertiary dark:text-text-muted-dark/50">
                {`// Practical AI automation replacing manual spreadsheet workflows`}
              </div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">async function </span>
                <span className="text-text-primary dark:text-text-on-dark">executeBusinessWorkflow</span>
                <span className="text-text-primary dark:text-text-on-dark">(</span>
                <span className="text-amber-600 dark:text-amber-400">incomingLead</span>
                <span className="text-text-primary dark:text-text-on-dark">) {`{`}</span>
              </div>
              <div className="pl-5 border-l border-border-subtle dark:border-border-dark ml-2 space-y-1">
                <div>
                  <span className="text-text-tertiary dark:text-text-muted-dark/60">{`// 1. Ingest & sanitize across web forms & campaigns`}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400">const </span>
                  <span className="text-text-primary dark:text-text-on-dark">validated = </span>
                  <span className="text-accent-dark dark:text-accent">await </span>
                  <span className="text-text-primary dark:text-text-on-dark">validateInquiry(incomingLead);</span>
                </div>
                <div>
                  <span className="text-text-tertiary dark:text-text-muted-dark/60">{`// 2. Intelligent routing to correct department lead`}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400">const </span>
                  <span className="text-text-primary dark:text-text-on-dark">route = </span>
                  <span className="text-accent-dark dark:text-accent">await </span>
                  <span className="text-text-primary dark:text-text-on-dark">classifyAndAssign(validated);</span>
                </div>
                <div>
                  <span className="text-text-tertiary dark:text-text-muted-dark/60">{`// 3. Automated CRM sync & contextual customer follow-up`}</span>
                </div>
                <div>
                  <span className="text-accent-dark dark:text-accent">await </span>
                  <span className="text-text-primary dark:text-text-on-dark">dispatchSequence({`{ `}</span>
                  <span className="text-text-primary dark:text-text-on-dark">to: route.owner, sla: </span>
                  <span className="text-emerald-600 dark:text-accent">&apos;5m&apos;</span>
                  <span className="text-text-primary dark:text-text-on-dark">{` });`}</span>
                </div>
              </div>
              <div className="text-text-primary dark:text-text-on-dark">{`}`}</div>
            </div>
          )}
        </div>

        {/* Micro-metrics bottom bar */}
        <div className="px-5 py-3 border-t border-border-subtle dark:border-border-dark bg-starlight/40 dark:bg-[#111111]/60 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-text-secondary dark:text-text-muted-dark">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              TypeScript Strict
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              App Router
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Core Web Vitals: 99
            </span>
          </div>

          <div className="text-[11px] font-mono text-text-tertiary dark:text-text-muted-dark">
            Elevato Technical Studio
          </div>
        </div>
      </div>
    </div>
  );
}
