'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateIn } from '@/components/ui/AnimateIn';
import { cn } from '@/lib/utils';

type Currency = 'USD' | 'INR';

interface Preset {
  id: string;
  name: string;
  teamSize: number;
  manualHours: number;
  rateUSD: number;
  rateINR: number;
  description: string;
}

const PRESETS: Preset[] = [
  {
    id: 'agency',
    name: 'Boutique Agency / Team',
    teamSize: 6,
    manualHours: 8,
    rateUSD: 40,
    rateINR: 1000,
    description: 'Small creative, marketing, or consulting team running client ops.',
  },
  {
    id: 'ops',
    name: 'Growth & Sales Ops',
    teamSize: 16,
    manualHours: 12,
    rateUSD: 50,
    rateINR: 1500,
    description: 'Sales development, lead triage, and customer pipeline team.',
  },
  {
    id: 'enterprise',
    name: 'Mid-Market Company',
    teamSize: 45,
    manualHours: 15,
    rateUSD: 65,
    rateINR: 2200,
    description: 'Established business handling high-volume reports, invoices & CRM.',
  },
];

export function RoiCalculatorSection() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [teamSize, setTeamSize] = useState<number>(10);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(10);
  const [hourlyRateUSD, setHourlyRateUSD] = useState<number>(45);
  const [hourlyRateINR, setHourlyRateINR] = useState<number>(1200);
  const [efficiencyRate, setEfficiencyRate] = useState<number>(75); // 75% realistic automation capture
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const hourlyRate = currency === 'USD' ? hourlyRateUSD : hourlyRateINR;

  const handleApplyPreset = (preset: Preset) => {
    setActivePreset(preset.id);
    setTeamSize(preset.teamSize);
    setManualHoursPerWeek(preset.manualHours);
    if (currency === 'USD') {
      setHourlyRateUSD(preset.rateUSD);
    } else {
      setHourlyRateINR(preset.rateINR);
    }
  };

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setActivePreset(null);
  };

  // Calculations
  const stats = useMemo(() => {
    const totalWeeklyManualHours = teamSize * manualHoursPerWeek;
    const weeklyHoursSaved = Math.round(totalWeeklyManualHours * (efficiencyRate / 100));
    const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.333);
    const annualHoursSaved = weeklyHoursSaved * 52;
    const annualCostSaved = annualHoursSaved * hourlyRate;
    const unlockedFTE = (monthlyHoursSaved / 160).toFixed(1);

    return {
      totalWeeklyManualHours,
      weeklyHoursSaved,
      monthlyHoursSaved,
      annualHoursSaved,
      annualCostSaved,
      unlockedFTE,
    };
  }, [teamSize, manualHoursPerWeek, efficiencyRate, hourlyRate]);

  // Formatter functions
  const formatAnnualSavings = (amount: number, curr: Currency) => {
    if (curr === 'USD') {
      return {
        primary: `$${amount.toLocaleString('en-US')}`,
        subtitle: `$${Math.round(amount / 12).toLocaleString('en-US')} / month`,
      };
    } else {
      // INR formatting with Lakhs / Crores
      if (amount >= 10000000) {
        const crores = (amount / 10000000).toFixed(2);
        return {
          primary: `₹${crores} Cr`,
          subtitle: `₹${amount.toLocaleString('en-IN')} (₹${Math.round(amount / 12).toLocaleString('en-IN')} / mo)`,
        };
      } else if (amount >= 100000) {
        const lakhs = (amount / 100000).toFixed(2);
        return {
          primary: `₹${lakhs} Lakhs`,
          subtitle: `₹${amount.toLocaleString('en-IN')} (₹${Math.round(amount / 12).toLocaleString('en-IN')} / mo)`,
        };
      } else {
        return {
          primary: `₹${amount.toLocaleString('en-IN')}`,
          subtitle: `₹${Math.round(amount / 12).toLocaleString('en-IN')} / month`,
        };
      }
    }
  };

  const savingsFormatted = formatAnnualSavings(stats.annualCostSaved, currency);

  // Dynamic Contact Link with pre-filled telemetry
  const contactHref = useMemo(() => {
    const params = new URLSearchParams({
      service: 'AI Automation',
      team: String(teamSize),
      hoursSaved: `${stats.weeklyHoursSaved}h/wk`,
      savings: currency === 'USD' ? `$${stats.annualCostSaved.toLocaleString()}` : `₹${stats.annualCostSaved.toLocaleString('en-IN')}`,
    });
    return `/contact?${params.toString()}`;
  }, [teamSize, stats.weeklyHoursSaved, stats.annualCostSaved, currency]);

  return (
    <section id="roi-calculator" className="py-24 lg:py-32 bg-surface relative overflow-hidden border-t border-border-subtle">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#888_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

      <Container>
        {/* Section Heading with Currency Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <SectionHeading
              label="Interactive ROI & Operations Savings Calculator"
              title="See exactly how much manual busywork costs your business"
              description="Calculate how many team hours, labor costs, and full-time employee capacities you reclaim when routine lead routing, CRM updates, and admin tasks are automated."
              align="left"
            />
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surface-elevated border border-border-subtle self-start lg:self-auto shadow-xs">
            <span className="text-[11px] font-mono text-text-tertiary px-2.5 font-medium">CURRENCY:</span>
            <button
              onClick={() => handleCurrencyChange('USD')}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer',
                currency === 'USD'
                  ? 'bg-accent text-dark shadow-xs'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              USD ($)
            </button>
            <button
              onClick={() => handleCurrencyChange('INR')}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer',
                currency === 'INR'
                  ? 'bg-accent text-dark shadow-xs'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Quick Scenario Preset Pills */}
        <AnimateIn direction="up">
          <div className="mb-10">
            <div className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-3">
              ⚡ Quick Scenarios (Click to load presets):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset)}
                  className={cn(
                    'p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between',
                    activePreset === preset.id
                      ? 'bg-surface-elevated border-accent ring-1 ring-accent/30 shadow-xs'
                      : 'bg-surface border-border-subtle hover:border-accent/40 hover:bg-surface-elevated/50'
                  )}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-text-primary">{preset.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-border-subtle text-accent-dark dark:text-accent font-semibold">
                      {preset.teamSize} pax
                    </span>
                  </div>
                  <p className="text-[11px] text-text-tertiary leading-tight">{preset.description}</p>
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Calculator Main Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders & Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateIn direction="up">
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle shadow-xs space-y-8">
                {/* 1. Team Size Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <label className="text-sm font-semibold text-text-primary flex items-center gap-2">
                        <span>1. Team Members in Operations / Admin / Sales</span>
                      </label>
                      <p className="text-xs text-text-tertiary mt-0.5">Staff spending time on repetitive data entry, follow-ups & reporting</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-elevated border border-border-subtle font-mono text-sm font-bold text-text-primary">
                      <span>{teamSize}</span>
                      <span className="text-xs text-text-tertiary">people</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="1"
                    value={teamSize}
                    onChange={(e) => {
                      setTeamSize(Number(e.target.value));
                      setActivePreset(null);
                    }}
                    className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-text-tertiary mt-1">
                    <span>1 person</span>
                    <span>15 people</span>
                    <span>30 people</span>
                    <span>60+ people</span>
                  </div>
                </div>

                {/* 2. Manual Hours Per Week Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <label className="text-sm font-semibold text-text-primary flex items-center gap-2">
                        <span>2. Repetitive Admin Hours / Person / Week</span>
                      </label>
                      <p className="text-xs text-text-tertiary mt-0.5">Time lost copying info, updating spreadsheets, sending reminders, PDF prep</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-elevated border border-border-subtle font-mono text-sm font-bold text-accent-dark dark:text-accent">
                      <span>{manualHoursPerWeek}</span>
                      <span className="text-xs text-text-tertiary">hrs/wk</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={manualHoursPerWeek}
                    onChange={(e) => {
                      setManualHoursPerWeek(Number(e.target.value));
                      setActivePreset(null);
                    }}
                    className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-text-tertiary mt-1">
                    <span>2 hrs (Light)</span>
                    <span>10 hrs (Average)</span>
                    <span>18 hrs (Heavy)</span>
                    <span>25 hrs (Critical)</span>
                  </div>
                </div>

                {/* 3. Hourly Rate Slider */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <label className="text-sm font-semibold text-text-primary flex items-center gap-2">
                        <span>3. Average Fully-Loaded Hourly Cost</span>
                      </label>
                      <p className="text-xs text-text-tertiary mt-0.5">Salary + taxes + overhead costs per team member</p>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-surface-elevated border border-border-subtle font-mono text-sm font-bold text-text-primary">
                      <span>{currency === 'USD' ? `$${hourlyRateUSD}` : `₹${hourlyRateINR.toLocaleString('en-IN')}`}</span>
                      <span className="text-xs text-text-tertiary">/hr</span>
                    </div>
                  </div>

                  {currency === 'USD' ? (
                    <input
                      type="range"
                      min="15"
                      max="150"
                      step="5"
                      value={hourlyRateUSD}
                      onChange={(e) => {
                        setHourlyRateUSD(Number(e.target.value));
                        setActivePreset(null);
                      }}
                      className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
                    />
                  ) : (
                    <input
                      type="range"
                      min="300"
                      max="5000"
                      step="100"
                      value={hourlyRateINR}
                      onChange={(e) => {
                        setHourlyRateINR(Number(e.target.value));
                        setActivePreset(null);
                      }}
                      className="w-full h-2 bg-surface-elevated rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
                    />
                  )}

                  <div className="flex justify-between text-[10px] font-mono text-text-tertiary mt-1">
                    <span>{currency === 'USD' ? '$15/hr' : '₹300/hr'}</span>
                    <span>{currency === 'USD' ? '$50/hr' : '₹1,500/hr'}</span>
                    <span>{currency === 'USD' ? '$100/hr' : '₹3,000/hr'}</span>
                    <span>{currency === 'USD' ? '$150/hr' : '₹5,000/hr'}</span>
                  </div>
                </div>

                {/* 4. Automation Capture Efficiency */}
                <div className="pt-2 border-t border-border-subtle">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-text-secondary font-semibold">
                      Alevate Automation Capture Rate:
                    </label>
                    <span className="text-xs font-mono font-bold text-accent-dark dark:text-accent">
                      {efficiencyRate}% automated
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { rate: 50, label: '50% (Conservative)' },
                      { rate: 75, label: '75% (Realistic)' },
                      { rate: 90, label: '90% (Maximum)' },
                    ].map((item) => (
                      <button
                        key={item.rate}
                        type="button"
                        onClick={() => setEfficiencyRate(item.rate)}
                        className={cn(
                          'py-2 px-2.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer text-center',
                          efficiencyRate === item.rate
                            ? 'bg-text-primary text-starlight font-bold shadow-xs'
                            : 'bg-surface-elevated text-text-secondary hover:text-text-primary border border-border-subtle'
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Where The Time Goes Breakdown */}
            <AnimateIn direction="up" delay={100}>
              <div className="p-5 rounded-2xl bg-surface-elevated/40 border border-border-subtle space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-text-tertiary">
                  <span>TYPICAL TASK AUTOMATION TARGETS</span>
                  <span>ESTIMATED GAIN</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-border-subtle/50">
                    <span className="text-text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Inbound Lead Routing &amp; Instant Qualification
                    </span>
                    <span className="font-mono font-semibold text-text-primary">~35% of saved time</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-border-subtle/50">
                    <span className="text-text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Automated Customer Email &amp; WhatsApp Follow-ups
                    </span>
                    <span className="font-mono font-semibold text-text-primary">~25% of saved time</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-border-subtle/50">
                    <span className="text-text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Invoice, Proposal &amp; Document Generation
                    </span>
                    <span className="font-mono font-semibold text-text-primary">~20% of saved time</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Cross-Platform Database &amp; CRM Sync (No re-typing)
                    </span>
                    <span className="font-mono font-semibold text-text-primary">~20% of saved time</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right Column: Live Savings Projection Dashboard (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <AnimateIn direction="up" delay={50}>
              <div className="p-6 sm:p-8 rounded-2xl bg-dark text-text-on-dark border border-border-dark shadow-xl relative overflow-hidden">
                {/* Cyber Corner Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/10 text-accent font-bold border border-white/10">
                    ANNUAL RECOVERED VALUE
                  </span>
                  <span className="text-xs font-mono text-text-muted-dark">
                    {teamSize} Staff · {efficiencyRate}% Capture
                  </span>
                </div>

                {/* Main Annual Financial Number */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-text-muted-dark uppercase tracking-wider mb-1">
                    Direct Annual Labor Savings
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-accent flex items-baseline gap-2">
                    <span>{savingsFormatted.primary}</span>
                    <span className="text-sm font-mono text-text-muted-dark font-normal">/ year</span>
                  </div>
                  <p className="text-xs font-mono text-text-muted-dark mt-2">
                    ≈ {savingsFormatted.subtitle}
                  </p>
                </div>

                <div className="h-px bg-white/10 my-6" />

                {/* Core Telemetry Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] font-mono text-text-muted-dark block mb-1">
                      HOURS RECLAIMED
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      {stats.annualHoursSaved.toLocaleString()}
                    </span>
                    <span className="text-[10px] font-mono text-accent block mt-0.5">
                      +{stats.weeklyHoursSaved} hrs/week
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[11px] font-mono text-text-muted-dark block mb-1">
                      FREE CAPACITY UNLOCKED
                    </span>
                    <span className="text-2xl font-bold font-mono text-white">
                      +{stats.unlockedFTE} FTEs
                    </span>
                    <span className="text-[10px] font-mono text-accent block mt-0.5">
                      Without new payroll
                    </span>
                  </div>
                </div>

                {/* Efficiency Visual Comparison */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-text-muted-dark">Weekly Grunt Work Eliminated:</span>
                    <span className="text-accent font-bold">{stats.weeklyHoursSaved} hrs / wk</span>
                  </div>
                  <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden flex">
                    <div
                      className="bg-accent h-full transition-all duration-300 rounded-full"
                      style={{ width: `${efficiencyRate}%` }}
                    />
                    <div
                      className="bg-white/20 h-full transition-all duration-300"
                      style={{ width: `${100 - efficiencyRate}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-text-muted-dark pt-1">
                    <span className="text-accent">● Automated by Alevate ({efficiencyRate}%)</span>
                    <span>○ High-Touch Work ({100 - efficiencyRate}%)</span>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="space-y-3">
                  <Link
                    href={contactHref}
                    className="w-full py-3.5 px-6 rounded-xl bg-accent text-[#080808] font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-accent-dark transition-all duration-200 shadow-md hover:shadow-accent/20 active:scale-[0.99]"
                  >
                    <span>Claim Your Custom Operations Audit</span>
                    <span>→</span>
                  </Link>
                  <p className="text-[11px] font-mono text-center text-text-muted-dark">
                    ⚡ 100% complimentary · 30-min discovery call · Direct founder review
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Micro FAQ / Trust Badge */}
            <div className="p-4 rounded-xl bg-surface border border-border-subtle text-xs text-text-secondary flex items-start gap-3">
              <span className="text-base">💡</span>
              <p className="leading-relaxed">
                <strong>How does this work?</strong> Alevate audits your existing spreadsheets, WhatsApp pipelines, and CRMs. We build custom API &amp; AI webhook workflows that handle 70%+ of administrative busywork automatically.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
