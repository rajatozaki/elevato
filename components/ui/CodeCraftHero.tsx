'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function CodeCraftHero() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'automation'>('frontend');

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 relative text-left">
      {/* Terminal Window Frame */}
      <div className="rounded-2xl border border-[#2D2D2B] bg-[#181817] shadow-xl overflow-hidden text-[#EDEDEB]">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-[#2D2D2B] bg-[#121211] gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E05252]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A83B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4EAD5B]" />
            </div>
            <span className="text-xs font-mono text-[#8E8E8B] ml-2">
              elevato://engine-v1.0
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#1E1E1D] p-0.5 rounded-lg border border-[#2D2D2B] text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('frontend')}
              className={cn(
                "px-3 py-1 rounded-md font-medium transition-all duration-150",
                activeTab === 'frontend'
                  ? "bg-accent text-[#111111] font-semibold shadow-xs"
                  : "text-[#9E9E9B] hover:text-[#EDEDEB]"
              )}
            >
              01 {'//'} Web Front-End
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('automation')}
              className={cn(
                "px-3 py-1 rounded-md font-medium transition-all duration-150",
                activeTab === 'automation'
                  ? "bg-accent text-[#111111] font-semibold shadow-xs"
                  : "text-[#9E9E9B] hover:text-[#EDEDEB]"
              )}
            >
              02 {'//'} AI Automation
            </button>
          </div>

          {/* Live Status indicator */}
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Ready</span>
          </div>
        </div>

        {/* Code Canvas */}
        <div className="p-5 md:p-7 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto bg-[#181817]">
          {activeTab === 'frontend' ? (
            <div className="space-y-2 text-[#EDEDEB]">
              <div className="text-[#737370]">
                {`// High-performance digital front-end for established business`}
              </div>
              <div>
                <span className="text-[#60A5FA] font-semibold">export const </span>
                <span className="text-[#EDEDEB]">DigitalPresence </span>
                <span className="text-[#8E8E8B]">= </span>
                <span className="text-[#EDEDEB]">{`{`}</span>
              </div>
              <div className="pl-5 border-l border-[#2D2D2B] ml-2 space-y-1">
                <div>
                  <span className="text-[#EDEDEB]">client: </span>
                  <span className="text-accent">&apos;Established Healthcare / Real Estate / Services&apos;</span>,
                </div>
                <div>
                  <span className="text-[#EDEDEB]">architecture: </span>
                  <span className="text-accent">&apos;Next.js App Router (RSC + SSG)&apos;</span>,
                </div>
                <div>
                  <span className="text-[#EDEDEB]">coreWebVitals: </span>
                  <span className="text-[#EDEDEB]">{`{ `}</span>
                  <span className="text-accent font-semibold">lcp: </span>
                  <span className="text-accent">&apos;0.6s&apos;</span>,
                  <span className="text-accent font-semibold"> fid: </span>
                  <span className="text-accent">&apos;12ms&apos;</span>,
                  <span className="text-accent font-semibold"> cls: </span>
                  <span className="text-accent">&apos;0.00&apos;</span>
                  <span className="text-[#EDEDEB]">{` }`}</span>,
                </div>
                <div>
                  <span className="text-[#EDEDEB]">conversionFlow: </span>
                  <span className="text-accent">&apos;Instant Inquiry + Accessible Mobile Booking&apos;</span>,
                </div>
                <div>
                  <span className="text-[#EDEDEB]">status: </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-accent/20 text-accent text-[11px] font-semibold">
                    &apos;PRODUCTION_READY&apos;
                  </span>
                </div>
              </div>
              <div className="text-[#EDEDEB]">{`};`}</div>
            </div>
          ) : (
            <div className="space-y-2 text-[#EDEDEB]">
              <div className="text-[#737370]">
                {`// Practical AI automation replacing manual spreadsheet workflows`}
              </div>
              <div>
                <span className="text-[#60A5FA] font-semibold">async function </span>
                <span className="text-[#EDEDEB]">executeBusinessWorkflow</span>
                <span className="text-[#EDEDEB]">(</span>
                <span className="text-[#F59E0B]">incomingLead</span>
                <span className="text-[#EDEDEB]">) {`{`}</span>
              </div>
              <div className="pl-5 border-l border-[#2D2D2B] ml-2 space-y-1">
                <div>
                  <span className="text-[#737370]">{`// 1. Ingest & sanitize across web forms & campaigns`}</span>
                </div>
                <div>
                  <span className="text-[#60A5FA]">const </span>
                  <span className="text-[#EDEDEB]">validated = </span>
                  <span className="text-accent">await </span>
                  <span className="text-[#EDEDEB]">validateInquiry(incomingLead);</span>
                </div>
                <div>
                  <span className="text-[#737370]">{`// 2. Intelligent routing to correct department lead`}</span>
                </div>
                <div>
                  <span className="text-[#60A5FA]">const </span>
                  <span className="text-[#EDEDEB]">route = </span>
                  <span className="text-accent">await </span>
                  <span className="text-[#EDEDEB]">classifyAndAssign(validated);</span>
                </div>
                <div>
                  <span className="text-[#737370]">{`// 3. Automated CRM sync & contextual customer follow-up`}</span>
                </div>
                <div>
                  <span className="text-accent">await </span>
                  <span className="text-[#EDEDEB]">dispatchSequence({`{ `}</span>
                  <span className="text-[#EDEDEB]">to: route.owner, sla: </span>
                  <span className="text-accent">&apos;5m&apos;</span>
                  <span className="text-[#EDEDEB]">{` });`}</span>
                </div>
              </div>
              <div className="text-[#EDEDEB]">{`}`}</div>
            </div>
          )}
        </div>

        {/* Micro-metrics bottom bar */}
        <div className="px-5 py-3 border-t border-[#2D2D2B] bg-[#121211] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-[#9E9E9B]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              TypeScript Strict
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              App Router
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              Core Web Vitals: 99
            </span>
          </div>

          <div className="text-[11px] font-mono text-[#737370]">
            Elevato Technical Studio
          </div>
        </div>
      </div>
    </div>
  );
}
