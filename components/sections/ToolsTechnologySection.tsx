'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';

interface ToolItem {
  name: string;
  category: 'ai' | 'dev' | 'deploy' | 'backend' | 'automation' | 'design';
  categoryLabel: string;
  role: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

const toolsData: ToolItem[] = [
  // --- AI & Intelligence ---
  {
    name: 'Claude',
    category: 'ai',
    categoryLabel: 'AI & Intelligence',
    role: 'Anthropic 3.7 Sonnet',
    description: 'Complex business reasoning, intelligent document parsing, and dynamic content synthesis.',
    badge: 'REASONING',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3l1.4-1.4A9.5 9.5 0 1 0 4.5 12z" fill="#D97706" />
        <circle cx="12" cy="12" r="3.5" fill="#D97706" />
        <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    category: 'ai',
    categoryLabel: 'AI & Intelligence',
    role: 'GPT-4o & Embeddings',
    description: 'Conversational lead triage, semantic search vectors, and automated client intake workflows.',
    badge: 'TRIAGE',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 10.42a5.53 5.53 0 0 0-.48-4.6 5.6 5.6 0 0 0-3.9-2.58 5.66 5.66 0 0 0-4.83.92 5.56 5.56 0 0 0-4.14-.38 5.63 5.63 0 0 0-3.4 2.8 5.6 5.6 0 0 0-.74 4.8 5.54 5.54 0 0 0-2.39 3.5 5.65 5.65 0 0 0 .54 4.86 5.62 5.62 0 0 0 3.9 2.58 5.6 5.6 0 0 0 4.83-.92 5.56 5.56 0 0 0 4.14.38 5.63 5.63 0 0 0 3.4-2.8 5.6 5.6 0 0 0 .74-4.8 5.54 5.54 0 0 0 2.39-3.5 5.65 5.65 0 0 0-.54-4.86zM13.2 20.3a4.15 4.15 0 0 1-2.43-.2 4.24 4.24 0 0 1-1.32-.82l2.67-1.54a.7.7 0 0 0 .35-.61v-3.76l2.12 1.22v3.08a4.17 4.17 0 0 1-1.39 2.63zm-7.66-3.28a4.17 4.17 0 0 1-.5-2.39 4.26 4.26 0 0 1 .84-2.29l2.66 1.54a.71.71 0 0 0 .7 0l3.26-1.88v2.44L9.83 16.2a4.18 4.18 0 0 1-4.29.82zm-1.07-8.1a4.18 4.18 0 0 1 1.93-1.43 4.25 4.25 0 0 1 2.16.11l-2.67 1.54a.7.7 0 0 0-.35.61v3.76L3.38 12.2a4.17 4.17 0 0 1 1.09-3.28zm8.73-1.34L9.94 9.46 7.82 8.24V5.16a4.17 4.17 0 0 1 1.39-2.63 4.15 4.15 0 0 1 2.43.2 4.24 4.24 0 0 1 1.32.82zm6.6 4.54a4.17 4.17 0 0 1 .5 2.39 4.26 4.26 0 0 1-.84 2.29l-2.66-1.54a.71.71 0 0 0-.7 0L12.94 17v-2.44l2.67-1.54a4.18 4.18 0 0 1 4.29-.82zm-3.52-1.74l-3.26 1.88V9.82L15.6 8.6a4.18 4.18 0 0 1 1.09 3.28 4.18 4.18 0 0 1-1.93 1.43 4.25 4.25 0 0 1-2.16-.11z" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    category: 'ai',
    categoryLabel: 'AI & Intelligence',
    role: 'Google 2.5 Pro',
    description: 'Multimodal asset inspection, large-context document analysis, and data extraction.',
    badge: 'MULTIMODAL',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z" fill="url(#gemini-grad)" />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1DB954" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },

  // --- Web & Development ---
  {
    name: 'Next.js',
    category: 'dev',
    categoryLabel: 'Web & Development',
    role: 'App Router & Turbopack',
    description: 'Sub-second static prerendering (SSG), server actions, and zero plugin vulnerability.',
    badge: 'CORE ENGINE',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.66 17.29L9.88 7.37H7.8v9.26h1.54v-6.9l6.56 8.52a9.96 9.96 0 0 0 1.76-.96zm-1.54-3.32h1.54V7.37h-1.54v6.6z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'dev',
    categoryLabel: 'Web & Development',
    role: 'Strict Typing Engine',
    description: 'Bulletproof type safety ensuring complete system reliability across every client build.',
    badge: 'TYPE SAFETY',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M14.7 17.5c.6.4 1.4.7 2.3.7 1.3 0 2.1-.7 2.1-1.7 0-1-.6-1.5-2-2.1-1.8-.7-3-1.7-3-3.4 0-1.9 1.5-3.3 3.8-3.3 1 0 1.8.2 2.4.6l-.6 1.6c-.5-.3-1.1-.5-1.8-.5-1.2 0-1.9.6-1.9 1.5 0 .9.6 1.4 2.1 2 1.9.8 2.9 1.8 2.9 3.5 0 2.1-1.6 3.5-4.1 3.5-1.2 0-2.2-.3-2.9-.8l.7-1.6zM6.5 9.7h5.4V8H4.6v1.7H7v9.4h2.2v-9.4H6.5z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'dev',
    categoryLabel: 'Web & Development',
    role: 'React 19 Server Components',
    description: 'Composable, modern UI primitives engineered for extreme client-side responsiveness.',
    badge: 'UI FRAMEWORK',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#00D8FF" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'dev',
    categoryLabel: 'Web & Development',
    role: 'Design System Tokens',
    description: 'Zero-runtime style orchestration for instant paint times and dark mode parity.',
    badge: 'STYLING',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.3.6.4 1 1 1.5 1.7 1 1.1 2 2.2 4.5 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .3-.6-.4-1-1-1.5-1.7C15.5 7.1 14.5 6 12 6zm-7 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.3.6.4 1 1 1.5 1.7 1 1.1 2 2.2 4.5 2.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .3-.6-.4-1-1-1.5-1.7C8.5 13.1 7.5 12 5 12z" />
      </svg>
    ),
  },

  // --- Deployment & Edge Infrastructure ---
  {
    name: 'Vercel',
    category: 'deploy',
    categoryLabel: 'Deployment & Edge',
    role: 'Global Edge Delivery',
    description: 'Instant edge routing, automated branch previews, and 99.99% uptime guarantees.',
    badge: 'EDGE HOSTING',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    category: 'deploy',
    categoryLabel: 'Deployment & Edge',
    role: 'DNS & Security Shield',
    description: 'DDoS mitigation, SSL/TLS zero-trust tunneling, and sub-10ms global DNS resolution.',
    badge: 'SECURITY & CDN',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F38020">
        <path d="M18.2 12.8c-.2-2-1.8-3.6-3.8-3.8-.7 0-1.4.2-2 .5-.8-1.7-2.6-2.9-4.6-2.9-2.7 0-5 2.1-5.2 4.8C1.1 11.9 0 13.2 0 14.8c0 1.9 1.5 3.4 3.4 3.4h14.9c1.9 0 3.4-1.5 3.4-3.4 0-1.5-1-2.8-2.5-3.2-.2 0-.6.4-1 .4l-.1.8z" />
      </svg>
    ),
  },

  // --- Databases & Backend ---
  {
    name: 'Supabase',
    category: 'backend',
    categoryLabel: 'Databases & Backend',
    role: 'Postgres & Realtime Auth',
    description: 'Relational data persistence, row-level security, instant webhooks, and zero maintenance.',
    badge: 'DATABASE',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#3ECF8E">
        <path d="M12.9 23.3c-.6.8-1.9.4-1.9-.6v-8.8H2.8c-.8 0-1.3-.9-.8-1.5L11.1.7c.6-.8 1.9-.4 1.9.6v8.8h8.2c.8 0 1.3.9.8 1.5l-9.1 11.7z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'backend',
    categoryLabel: 'Databases & Backend',
    role: 'Relational Enterprise Core',
    description: 'ACID-compliant relational foundation structuring your customer and operational data.',
    badge: 'SQL CORE',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'backend',
    categoryLabel: 'Databases & Backend',
    role: 'Realtime Document Store',
    description: 'Low-latency mobile database and instant push notification services.',
    badge: 'CLOUD STORE',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FFCA28">
        <path d="M3.89 15.67L6.2 1.34a.67.67 0 0 1 1.28-.15l3.22 6.03 2.1-4.04a.67.67 0 0 1 1.22.08l7.29 12.41-8.6 4.88a1.34 1.34 0 0 1-1.3 0L3.89 15.67z" />
      </svg>
    ),
  },

  // --- Automation & Integrations ---
  {
    name: 'n8n',
    category: 'automation',
    categoryLabel: 'Automation & Integrations',
    role: 'Private Workflow Engine',
    description: 'Self-hosted, highly secure workflow automation that connects internal databases and webhooks.',
    badge: 'SELF-HOSTED',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#EA4B71">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5v-3.8l3.3 1.9-1 1.7-2.3.2zm-2-9v3.8L7.7 9.4l1-1.7 2.3-.2zm-4.7 4.2l3.3-1.9 3.3 1.9-3.3 1.9-3.3-1.9zm11.4 1.6l-3.3 1.9-3.3-1.9 3.3-1.9 3.3 1.9z" />
      </svg>
    ),
  },
  {
    name: 'Make',
    category: 'automation',
    categoryLabel: 'Automation & Integrations',
    role: 'Multi-App Visual Router',
    description: 'Visual logic branches routing customer data across WhatsApp, CRMs, and email alerts.',
    badge: 'INTEGRATION',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#6D28D9">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.5 3.8-7.5 3.7-7.5-3.7L12 4.8zM4 9.1l7 3.5v7.1l-7-3.5V9.1zm9 10.6v-7.1l7-3.5v7.1l-7 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Zapier',
    category: 'automation',
    categoryLabel: 'Automation & Integrations',
    role: 'Instant App Connector',
    description: 'Turnkey data pipelines bridging 5,000+ business applications with zero custom code overhead.',
    badge: 'AUTOMATION',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF4A00">
        <path d="M13.5 2h-3v7.5H3v3h7.5V20h3v-7.5H21v-3h-7.5V2z" />
      </svg>
    ),
  },

  // --- Design & Systems ---
  {
    name: 'Figma',
    category: 'design',
    categoryLabel: 'Design & Collaboration',
    role: 'Interface Architecture',
    description: 'Interactive wireframes, responsive component prototypes, and information hierarchy design.',
    badge: 'DESIGN SYSTEM',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'design',
    categoryLabel: 'Design & Collaboration',
    role: 'Full Repository Transfer',
    description: '100% clean TypeScript source code transferred directly to your organization’s repository.',
    badge: 'IP OWNERSHIP',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const categoryFilters = [
  { id: 'all', label: 'All Platforms', count: toolsData.length },
  { id: 'ai', label: 'AI & Intelligence', count: 3 },
  { id: 'dev', label: 'Web Development', count: 4 },
  { id: 'deploy', label: 'Edge & Hosting', count: 2 },
  { id: 'backend', label: 'Databases', count: 3 },
  { id: 'automation', label: 'Automation', count: 3 },
  { id: 'design', label: 'Design & Code', count: 2 },
];

export function ToolsTechnologySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTools =
    activeCategory === 'all'
      ? toolsData
      : toolsData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden border-y border-border-subtle">
      {/* Background Decorative Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#888_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.08] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <SectionHeading
              label="Tools & Technology"
              title="The platforms and technologies we build with, every day."
              description="Not a novelty — a daily engineering discipline. These are the tools we reach for to turn rough business requirements into resilient, high-speed digital engines."
              align="left"
            />
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-text-tertiary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-primary font-semibold">100% Code Ownership</span>
            <span>·</span>
            <span>Zero Lock-in</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <AnimateIn direction="up">
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border-subtle">
            {categoryFilters.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer',
                    isSelected
                      ? 'bg-text-primary text-starlight shadow-xs font-semibold'
                      : 'bg-surface-elevated/40 text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-border-subtle'
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                      isSelected ? 'bg-accent text-dark' : 'bg-surface text-text-tertiary border border-border-subtle'
                    )}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </AnimateIn>

        {/* Clean Interactive Grid of Platform Cards (Inspired by pleurat.com clean aesthetic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTools.map((tool, index) => (
            <AnimateIn key={tool.name} direction="up" delay={index * 40}>
              <div className="group relative p-6 rounded-2xl bg-surface border border-border-subtle hover:border-accent/40 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between h-full">
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-surface-elevated/60 border border-border-subtle group-hover:scale-105 transition-transform duration-200">
                      {tool.icon}
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-surface-elevated border border-border-subtle text-text-tertiary uppercase tracking-wider font-semibold">
                      {tool.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div className="mb-2">
                    <h3 className="text-lg font-bold tracking-tight text-text-primary group-hover:text-accent-dark dark:group-hover:text-accent transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-xs font-mono text-text-tertiary">
                      {tool.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-text-secondary leading-relaxed mt-2 mb-4">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Category Indicator */}
                <div className="pt-3 border-t border-border-subtle/50 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
                  <span>{tool.categoryLabel}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom Studio Standards Strip */}
        <AnimateIn direction="up" delay={200} className="mt-12">
          <div className="p-6 rounded-2xl bg-surface-elevated/30 border border-border-subtle grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <span className="text-xs font-mono text-accent-dark dark:text-accent font-bold block uppercase tracking-wider mb-1">
                ✓ Full Code Transfer
              </span>
              <p className="text-xs text-text-secondary">
                Direct repository handoff to your company GitHub organization.
              </p>
            </div>
            <div className="p-3">
              <span className="text-xs font-mono text-accent-dark dark:text-accent font-bold block uppercase tracking-wider mb-1">
                ✓ Zero Vendor Lock-in
              </span>
              <p className="text-xs text-text-secondary">
                Standard TypeScript and SQL architectures that any senior engineer can maintain.
              </p>
            </div>
            <div className="p-3">
              <span className="text-xs font-mono text-accent-dark dark:text-accent font-bold block uppercase tracking-wider mb-1">
                ✓ Sub-Second Speeds
              </span>
              <p className="text-xs text-text-secondary">
                Optimized Next.js App Router for 100/100 Core Web Vitals on mobile.
              </p>
            </div>
            <div className="p-3">
              <span className="text-xs font-mono text-accent-dark dark:text-accent font-bold block uppercase tracking-wider mb-1">
                ✓ Private & Secure
              </span>
              <p className="text-xs text-text-secondary">
                Self-hosted webhooks and row-level database security policies.
              </p>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}