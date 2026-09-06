'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface IndustrySector {
  id: string;
  name: string;
  shortLabel: string;
  physicalDomain: string;
  digitalEngine: string;
  keyMetric: string;
  metricLabel: string;
  zoneRange: string;
}

const industrySectors: IndustrySector[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Practices',
    shortLabel: '01 · Healthcare & Clinics',
    physicalDomain: 'Multi-Specialty Clinics, Dental & Surgery Practices',
    digitalEngine: 'Frictionless Patient Booking, Doctor Profiles & Triage Routing',
    keyMetric: '< 1.5 Min',
    metricLabel: 'Patient Intake Flow',
    zoneRange: 'Zone 01 // Baseline',
  },
  {
    id: 'b2b',
    name: 'B2B & Professional Consultancies',
    shortLabel: '02 · B2B & Consultancies',
    physicalDomain: 'Corporate Advisory, Legal, Financial & Strategic Firms',
    digitalEngine: 'Authority-First Digital Front Door & Automated Lead Sync',
    keyMetric: '12+ hrs',
    metricLabel: 'Admin Saved/Week',
    zoneRange: 'Zone 02 // Modernization',
  },
  {
    id: 'realestate',
    name: 'Real Estate & Property Developers',
    shortLabel: '03 · Real Estate & Property',
    physicalDomain: 'Luxury Developments, Commercial Towers & Architectural Firms',
    digitalEngine: 'High-Converting Property Showcases & <2m WhatsApp Alerts',
    keyMetric: '< 2 Mins',
    metricLabel: 'Inquiry-to-Alert Time',
    zoneRange: 'Zone 03 // Commercial Scale',
  },
  {
    id: 'enterprise',
    name: 'Scaled Multi-Location Enterprises',
    shortLabel: '04 · Scaled Enterprises',
    physicalDomain: 'Multi-Unit Brands, High-Growth Studios & Modern Operations',
    digitalEngine: 'Sub-Second Next.js Infrastructure & 100% Repository Ownership',
    keyMetric: '0.4s',
    metricLabel: 'Global Edge Speed',
    zoneRange: 'Zone 04 // Pinnacle Engine',
  },
];

export function ArchitecturalSkyline({ className }: { className?: string }) {
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);

  const activeSector = industrySectors.find((s) => s.id === activeSectorId);

  return (
    <div className={cn('w-full relative flex flex-col gap-3', className)}>
      {/* Industry Sector Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pb-1 border-b border-border-subtle/70">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-text-tertiary hidden sm:inline mr-1 text-[11px] uppercase tracking-wider font-semibold">
            Industries Powered:
          </span>
          {industrySectors.map((sector) => {
            const isHovered = activeSectorId === sector.id;
            return (
              <button
                key={sector.id}
                onMouseEnter={() => setActiveSectorId(sector.id)}
                onMouseLeave={() => setActiveSectorId(null)}
                onClick={() =>
                  setActiveSectorId((prev) => (prev === sector.id ? null : sector.id))
                }
                className={cn(
                  'px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-150 flex items-center gap-1.5 border',
                  isHovered
                    ? 'bg-accent/10 border-accent/40 text-accent-dark dark:text-accent font-semibold shadow-xs'
                    : 'bg-surface/50 border-border-subtle text-text-secondary hover:text-text-primary hover:border-border'
                )}
              >
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    isHovered ? 'bg-accent animate-pulse' : 'bg-text-tertiary/60'
                  )}
                />
                <span>{sector.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div className="text-[11px] text-text-tertiary hidden lg:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span className="uppercase tracking-widest">Live Infrastructure Data Flow</span>
        </div>
      </div>

      {/* Main Architectural Skyline SVG Canvas */}
      <div className="w-full overflow-hidden relative select-none rounded-xl bg-surface-elevated/20 border border-border-subtle/50 p-2 sm:p-3">
        <svg
          viewBox="0 0 1200 145"
          className="w-full h-auto text-text-primary"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Subtle gradient for distant silhouette elevation */}
            <linearGradient id="skyline-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
            </linearGradient>

            {/* Ascending trajectory gradient */}
            <linearGradient id="elevation-trajectory" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#1DB954" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="0.95" />
            </linearGradient>

            {/* Active sector highlight fill */}
            <linearGradient id="sector-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* ================= Sector Highlight Overlays ================= */}
          {activeSectorId === 'healthcare' && (
            <rect x="10" y="20" width="260" height="110" rx="8" fill="url(#sector-highlight)" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="3 3" />
          )}
          {activeSectorId === 'b2b' && (
            <rect x="275" y="15" width="285" height="115" rx="8" fill="url(#sector-highlight)" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="3 3" />
          )}
          {activeSectorId === 'realestate' && (
            <rect x="565" y="10" width="310" height="120" rx="8" fill="url(#sector-highlight)" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="3 3" />
          )}
          {activeSectorId === 'enterprise' && (
            <rect x="880" y="5" width="310" height="125" rx="8" fill="url(#sector-highlight)" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="3 3" />
          )}

          {/* --- Background Ascending Silhouettes (Distant Layer) --- */}
          <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.75">
            {/* Stage 1 Distant: Low rooftops (x: 20-240) */}
            <polygon points="30,85 55,65 80,85" fill="url(#skyline-fade)" />
            <rect x="35" y="85" width="40" height="40" fill="url(#skyline-fade)" />
            <rect x="110" y="75" width="45" height="50" fill="url(#skyline-fade)" />
            <rect x="180" y="65" width="50" height="60" fill="url(#skyline-fade)" />

            {/* Stage 2 Distant: Mid-low modern blocks (x: 240-540) */}
            <rect x="270" y="52" width="60" height="73" fill="url(#skyline-fade)" />
            <polygon points="360,58 395,35 430,58" fill="url(#skyline-fade)" />
            <rect x="365" y="58" width="60" height="67" fill="url(#skyline-fade)" />
            <rect x="460" y="42" width="65" height="83" fill="url(#skyline-fade)" />

            {/* Stage 3 Distant: Taller commercial structures (x: 540-840) */}
            <rect x="560" y="32" width="70" height="93" fill="url(#skyline-fade)" />
            <rect x="660" y="24" width="75" height="101" fill="url(#skyline-fade)" />
            <rect x="765" y="18" width="65" height="107" fill="url(#skyline-fade)" />

            {/* Stage 4 Distant: Soaring Pinnacle Towers (x: 840-1200) */}
            <rect x="860" y="14" width="75" height="111" fill="url(#skyline-fade)" />
            <polygon points="965,18 1000,5 1035,18" fill="url(#skyline-fade)" />
            <rect x="970" y="18" width="60" height="107" fill="url(#skyline-fade)" />
            <rect x="1060" y="8" width="80" height="117" fill="url(#skyline-fade)" />
            <line x1="1100" y1="2" x2="1100" y2="8" />
          </g>

          {/* --- Dynamic Elevation Business Infrastructure Trajectory Line --- */}
          <path
            id="infra-trajectory"
            d="M 20 115 C 300 105, 600 70, 1125 15"
            stroke="url(#elevation-trajectory)"
            strokeWidth="1.75"
            strokeDasharray="5 5"
          />

          {/* --- Animated Real-Time Data Flow Pulses (Traveling along trajectory) --- */}
          <circle r="3.5" fill="#1DB954" opacity="0.9">
            <animateMotion
              path="M 20 115 C 300 105, 600 70, 1125 15"
              dur="5.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="2.5" fill="#1DB954" opacity="0.75">
            <animateMotion
              path="M 20 115 C 300 105, 600 70, 1125 15"
              dur="5.5s"
              begin="2.75s"
              repeatCount="indefinite"
            />
          </circle>

          {/* --- Foreground Detailed Architectural Evolution Layer --- */}
          <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 dark:opacity-75">
            
            {/* =====================================================================
                ZONE 1: HEALTHCARE & LOCAL CLINICAL PRACTICES (x: 0 - 270)
               ===================================================================== */}
            <g
              className="cursor-pointer transition-opacity"
              onMouseEnter={() => setActiveSectorId('healthcare')}
              onMouseLeave={() => setActiveSectorId(null)}
            >
              {/* Street Lamp 1 (Classic lantern) */}
              <line x1="20" y1="85" x2="20" y2="125" strokeWidth="1" />
              <path d="M 17 85 C 17 81, 23 81, 23 85 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
              <circle cx="20" cy="85" r="1.5" fill="#1DB954" />

              {/* Clinic Facility A: Pitched Medical Office (y: 84 to 125) */}
              <polygon points="40,84 62,66 84,84" />
              <rect x="44" y="84" width="36" height="41" />
              {/* Medical Cross Symbol on Facade */}
              <rect x="58" y="72" width="8" height="3" fill="#1DB954" stroke="none" />
              <rect x="60.5" y="69.5" width="3" height="8" fill="#1DB954" stroke="none" />
              <rect x="50" y="92" width="8" height="11" strokeWidth="0.75" />
              <rect x="66" y="92" width="8" height="11" strokeWidth="0.75" />
              <rect x="57" y="108" width="10" height="17" fill="#1DB954" fillOpacity="0.2" />

              {/* Bicycle */}
              <circle cx="98" cy="119" r="5" strokeWidth="0.75" />
              <circle cx="112" cy="119" r="5" strokeWidth="0.75" />
              <line x1="98" y1="119" x2="105" y2="115" strokeWidth="0.75" />
              <line x1="105" y1="115" x2="112" y2="119" strokeWidth="0.75" />
              <line x1="105" y1="115" x2="103" y2="110" strokeWidth="0.75" />

              {/* Clinic Facility B: Multi-Room Practice (y: 72 to 125) */}
              <rect x="126" y="72" width="42" height="53" />
              <polygon points="122,72 147,56 172,72" />
              {/* Telemetry Beacon on Clinic B */}
              <circle cx="147" cy="56" r="2.5" fill="#1DB954" />
              <circle cx="147" cy="56" r="2.5" fill="none" stroke="#1DB954" strokeWidth="0.75" opacity="0.8">
                <animate attributeName="r" values="2.5;7;11" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0" dur="3s" repeatCount="indefinite" />
              </circle>

              <rect x="134" y="80" width="10" height="11" strokeWidth="0.75" />
              <rect x="150" y="80" width="10" height="11" strokeWidth="0.75" />
              <rect x="134" y="96" width="10" height="11" strokeWidth="0.75" />
              <rect x="150" y="96" width="10" height="11" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
              <rect x="142" y="111" width="10" height="14" />

              {/* Tree 1 */}
              <line x1="184" y1="97" x2="184" y2="125" strokeWidth="1" />
              <circle cx="184" cy="93" r="8" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />

              {/* Diagnostic Annex C (y: 82 to 125) */}
              <polygon points="198,82 220,66 242,82" />
              <rect x="202" y="82" width="36" height="43" />
              <rect x="210" y="100" width="20" height="25" strokeWidth="0.75" />
              <line x1="210" y1="106" x2="230" y2="106" strokeWidth="0.5" />
              <line x1="210" y1="112" x2="230" y2="112" strokeWidth="0.5" />

              {/* Street Bench */}
              <line x1="250" y1="117" x2="264" y2="117" strokeWidth="1.25" />
              <line x1="252" y1="117" x2="252" y2="125" strokeWidth="1" />
              <line x1="262" y1="117" x2="262" y2="125" strokeWidth="1" />
            </g>

            {/* =====================================================================
                ZONE 2: B2B PROFESSIONAL SERVICES & CONSULTANCIES (x: 270 - 560)
               ===================================================================== */}
            <g
              className="cursor-pointer transition-opacity"
              onMouseEnter={() => setActiveSectorId('b2b')}
              onMouseLeave={() => setActiveSectorId(null)}
            >
              {/* Streetlamp 2 */}
              <line x1="278" y1="77" x2="278" y2="125" strokeWidth="1" />
              <path d="M 275 77 C 275 72, 281 72, 281 77 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
              <circle cx="278" cy="77" r="1.5" fill="#1DB954" />

              {/* Advisory Townhouse Pair (y: 62 to 125) */}
              <polygon points="290,62 312,46 334,62" />
              <rect x="295" y="62" width="34" height="63" />
              <rect x="302" y="72" width="18" height="13" strokeWidth="0.75" />
              <rect x="302" y="90" width="18" height="13" strokeWidth="0.75" />
              <rect x="306" y="108" width="11" height="17" fill="#1DB954" fillOpacity="0.18" />

              <polygon points="334,62 356,46 378,62" />
              <rect x="339" y="62" width="34" height="63" />
              <rect x="346" y="72" width="18" height="13" strokeWidth="0.75" />
              <rect x="346" y="90" width="18" height="13" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.22" />
              <rect x="350" y="108" width="11" height="17" fill="#1DB954" fillOpacity="0.18" />

              {/* Tree 2 */}
              <line x1="392" y1="89" x2="392" y2="125" strokeWidth="1" />
              <polygon points="392,77 384,91 400,91" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
              <polygon points="392,85 382,101 402,101" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />

              {/* Executive Firm Loft (y: 48 to 125) */}
              <rect x="414" y="48" width="48" height="77" />
              <rect x="422" y="58" width="14" height="15" strokeWidth="0.75" />
              <rect x="440" y="58" width="14" height="15" strokeWidth="0.75" />
              <line x1="414" y1="76" x2="462" y2="76" strokeWidth="1" />
              <line x1="416" y1="73" x2="460" y2="73" strokeWidth="0.5" />
              <rect x="422" y="83" width="14" height="16" strokeWidth="0.75" />
              <rect x="440" y="83" width="14" height="16" strokeWidth="0.75" />
              <rect x="430" y="104" width="16" height="21" />

              {/* Clock & Telemetry Spire (y: 35 to 125) */}
              <rect x="478" y="35" width="34" height="90" />
              <polygon points="478,35 495,20 512,35" />
              <circle cx="495,20" r="2.5" fill="#1DB954" />
              <circle cx="495,20" r="2.5" fill="none" stroke="#1DB954" strokeWidth="0.75" opacity="0.8">
                <animate attributeName="r" values="2.5;8;12" dur="3.2s" begin="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0" dur="3.2s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              <rect x="486" y="52" width="18" height="22" rx="9" strokeWidth="0.75" />
              <rect x="486" y="82" width="18" height="22" rx="9" strokeWidth="0.75" />
              <rect x="490" y="110" width="10" height="15" fill="#1DB954" fillOpacity="0.22" />

              {/* Tree 3 */}
              <line x1="530" y1="85" x2="530" y2="125" strokeWidth="1" />
              <circle cx="530" cy="79" r="10" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
            </g>

            {/* =====================================================================
                ZONE 3: REAL ESTATE & PROPERTY DEVELOPERS (x: 560 - 860)
               ===================================================================== */}
            <g
              className="cursor-pointer transition-opacity"
              onMouseEnter={() => setActiveSectorId('realestate')}
              onMouseLeave={() => setActiveSectorId(null)}
            >
              {/* 5-Story Glass Property Showcase (y: 28 to 125) */}
              <rect x="555" y="28" width="58" height="97" />
              {/* Grid Windows */}
              <rect x="564" y="38" width="10" height="12" strokeWidth="0.75" />
              <rect x="579" y="38" width="10" height="12" strokeWidth="0.75" />
              <rect x="594" y="38" width="10" height="12" strokeWidth="0.75" />

              <rect x="564" y="56" width="10" height="12" strokeWidth="0.75" />
              <rect x="579" y="56" width="10" height="12" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
              <rect x="594" y="56" width="10" height="12" strokeWidth="0.75" />

              <rect x="564" y="74" width="10" height="12" strokeWidth="0.75" />
              <rect x="579" y="74" width="10" height="12" strokeWidth="0.75" />
              <rect x="594" y="74" width="10" height="12" strokeWidth="0.75" />

              <rect x="564" y="92" width="10" height="12" strokeWidth="0.75" />
              <rect x="579" y="92" width="10" height="12" strokeWidth="0.75" />
              <rect x="594" y="92" width="10" height="12" strokeWidth="0.75" />
              <rect x="574" y="110" width="20" height="15" />

              {/* Antenna Telemetry Tower */}
              <line x1="600" y1="16" x2="600" y2="28" strokeWidth="1" />
              <circle cx="600" cy="16" r="2.5" fill="#1DB954" />
              <circle cx="600" cy="16" r="2.5" fill="none" stroke="#1DB954" strokeWidth="0.75" opacity="0.8">
                <animate attributeName="r" values="2.5;8;13" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0" dur="2.8s" begin="1.4s" repeatCount="indefinite" />
              </circle>

              {/* Commercial Headquarters (y: 22 to 125) */}
              <rect x="630" y="22" width="65" height="103" />
              {/* Louvers */}
              <line x1="630" y1="36" x2="695" y2="36" strokeWidth="0.75" />
              <line x1="630" y1="50" x2="695" y2="50" strokeWidth="0.75" />
              <line x1="630" y1="64" x2="695" y2="64" strokeWidth="0.75" />
              <line x1="630" y1="78" x2="695" y2="78" strokeWidth="0.75" />
              <line x1="630" y1="92" x2="695" y2="92" strokeWidth="0.75" />
              <line x1="630" y1="106" x2="695" y2="106" strokeWidth="0.75" />
              {/* Mullions */}
              <line x1="652" y1="22" x2="652" y2="125" strokeWidth="0.5" />
              <line x1="673" y1="22" x2="673" y2="125" strokeWidth="0.5" />
              <rect x="648" y="103" width="29" height="22" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />

              {/* Streetlamp & Tree */}
              <line x1="712" y1="69" x2="712" y2="125" strokeWidth="1" />
              <circle cx="712" cy="69" r="1.5" fill="#1DB954" />

              {/* Architectural Cantilever Complex (y: 18 to 125) */}
              <rect x="730" y="34" width="52" height="91" />
              <rect x="722" y="18" width="68" height="20" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <rect x="734" y="22" width="44" height="12" strokeWidth="0.75" />
              <rect x="740" y="46" width="32" height="14" strokeWidth="0.75" />
              <rect x="740" y="66" width="32" height="14" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.22" />
              <rect x="740" y="86" width="32" height="14" strokeWidth="0.75" />
              <rect x="746" y="108" width="20" height="17" />

              {/* High-Tech Innovation Center (y: 14 to 125) */}
              <rect x="828" y="14" width="56" height="111" />
              <line x1="856" y1="14" x2="856" y2="125" strokeWidth="0.75" />
              {/* Exo-skeleton Bracing */}
              <line x1="828" y1="36" x2="884" y2="66" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="828" y1="66" x2="884" y2="36" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="828" y1="66" x2="884" y2="96" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="828" y1="96" x2="884" y2="66" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="856" y1="4" x2="856" y2="14" strokeWidth="1" />
              <circle cx="856" cy="4" r="2.5" fill="#1DB954" />
            </g>

            {/* =====================================================================
                ZONE 4: MODERN SCALED ENTERPRISES (x: 880 - 1200)
               ===================================================================== */}
            <g
              className="cursor-pointer transition-opacity"
              onMouseEnter={() => setActiveSectorId('enterprise')}
              onMouseLeave={() => setActiveSectorId(null)}
            >
              {/* Stepped Corporate Tower (y: 10 to 125) */}
              <rect x="900" y="24" width="64" height="101" />
              <rect x="910" y="10" width="44" height="14" strokeWidth="1" />
              <line x1="932" y1="2" x2="932" y2="10" strokeWidth="1.25" />
              <circle cx="932" cy="2" r="2.5" fill="#1DB954" />
              <rect x="918" y="14" width="8" height="6" strokeWidth="0.5" />
              <rect x="938" y="14" width="8" height="6" strokeWidth="0.5" fill="#1DB954" fillOpacity="0.3" />
              
              <rect x="908" y="34" width="12" height="16" strokeWidth="0.75" />
              <rect x="926" y="34" width="12" height="16" strokeWidth="0.75" />
              <rect x="944" y="34" width="12" height="16" strokeWidth="0.75" />

              <rect x="908" y="56" width="12" height="16" strokeWidth="0.75" />
              <rect x="926" y="56" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
              <rect x="944" y="56" width="12" height="16" strokeWidth="0.75" />

              <rect x="908" y="78" width="12" height="16" strokeWidth="0.75" />
              <rect x="926" y="78" width="12" height="16" strokeWidth="0.75" />
              <rect x="944" y="78" width="12" height="16" strokeWidth="0.75" />
              <rect x="916" y="104" width="32" height="21" strokeWidth="1" />

              {/* Beacon Spire */}
              <line x1="998" y1="63" x2="998" y2="125" strokeWidth="1" />
              <circle cx="998" cy="63" r="1.5" fill="#1DB954" />

              {/* Iconic Pinnacle Spire (y: 6 to 125) */}
              <polygon points="1016,28 1045,6 1074,28" strokeWidth="1.25" />
              <rect x="1016" y="28" width="58" height="97" />
              <line x1="1045" y1="0" x2="1045" y2="6" strokeWidth="1.5" />
              <circle cx="1045" cy="0" r="3" fill="#1DB954" />
              <circle cx="1045" cy="0" r="3" fill="none" stroke="#1DB954" strokeWidth="1" opacity="0.9">
                <animate attributeName="r" values="3;9;15" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.2;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <polygon points="1030,24 1045,12 1060,24" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
              <line x1="1030" y1="36" x2="1030" y2="125" strokeWidth="0.5" />
              <line x1="1045" y1="36" x2="1045" y2="125" strokeWidth="0.75" />
              <line x1="1060" y1="36" x2="1060" y2="125" strokeWidth="0.5" />
              <line x1="1016" y1="48" x2="1074" y2="48" strokeWidth="0.75" />
              <line x1="1016" y1="64" x2="1074" y2="64" strokeWidth="0.75" />
              <line x1="1016" y1="80" x2="1074" y2="80" strokeWidth="0.75" />
              <line x1="1016" y1="96" x2="1074" y2="96" strokeWidth="0.75" />

              {/* Peak Megatower (y: 4 to 125) */}
              <rect x="1090" y="16" width="70" height="109" />
              <polygon points="1086,16 1125,4 1164,16" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />
              <line x1="1125" y1="-2" x2="1125" y2="4" strokeWidth="1.5" />
              <circle cx="1125" cy="-2" r="3.5" fill="#1DB954" />
              <circle cx="1125" cy="-2" r="3.5" fill="none" stroke="#1DB954" strokeWidth="1" opacity="0.9">
                <animate attributeName="r" values="3.5;10;16" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.2;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" />
              </circle>
              <rect x="1100" y="24" width="12" height="16" strokeWidth="0.75" />
              <rect x="1118" y="24" width="14" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.3" />
              <rect x="1138" y="24" width="12" height="16" strokeWidth="0.75" />

              <rect x="1100" y="48" width="12" height="16" strokeWidth="0.75" />
              <rect x="1118" y="48" width="14" height="16" strokeWidth="0.75" />
              <rect x="1138" y="48" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.22" />

              <rect x="1100" y="72" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
              <rect x="1118" y="72" width="14" height="16" strokeWidth="0.75" />
              <rect x="1138" y="72" width="12" height="16" strokeWidth="0.75" />

              <rect x="1100" y="94" width="12" height="16" strokeWidth="0.75" />
              <rect x="1118" y="94" width="14" height="16" strokeWidth="0.75" />
              <rect x="1138" y="94" width="12" height="16" strokeWidth="0.75" />
              <rect x="1110" y="110" width="30" height="15" />

              {/* Edge Pavilion */}
              <polygon points="1170,30 1195,12 1200,16 1200,125 1170,125" strokeWidth="1.25" />
              <line x1="1170" y1="48" x2="1200" y2="48" strokeWidth="0.75" />
              <line x1="1170" y1="68" x2="1200" y2="68" strokeWidth="0.75" fill="#1DB954" />
              <line x1="1170" y1="88" x2="1200" y2="88" strokeWidth="0.75" />
              <circle cx="1195" cy="12" r="2" fill="#1DB954" />
            </g>
          </g>

          {/* --- Ground Datum Base Line & Progression Markers --- */}
          <line x1="0" y1="125" x2="1200" y2="125" stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90" />
          
          {/* Progression Stage Anchor Nodes */}
          <circle cx="62" cy="125" r="3" fill="#1DB954" />
          <circle cx="334" cy="125" r="3" fill="#1DB954" />
          <circle cx="660" cy="125" r="3" fill="#1DB954" />
          <circle cx="1045" cy="125" r="3.5" fill="#1DB954" />
          <circle cx="1125" cy="125" r="4" fill="#1DB954" />

          {/* Sector Demarcation Labels on Base */}
          <text x="70" y="139" fill="currentColor" opacity="0.5" fontSize="9" fontFamily="monospace">01 HEALTHCARE</text>
          <text x="350" y="139" fill="currentColor" opacity="0.5" fontSize="9" fontFamily="monospace">02 B2B SERVICES</text>
          <text x="650" y="139" fill="currentColor" opacity="0.5" fontSize="9" fontFamily="monospace">03 REAL ESTATE</text>
          <text x="960" y="139" fill="currentColor" opacity="0.5" fontSize="9" fontFamily="monospace">04 SCALED ENTERPRISES</text>
        </svg>
      </div>

      {/* Live Sector Context Telemetry Banner */}
      {activeSector ? (
        <div className="p-3 sm:p-4 rounded-xl border border-accent/30 bg-surface shadow-xs transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] text-accent-dark dark:text-accent font-semibold uppercase tracking-wider">
                {activeSector.zoneRange}
              </span>
              <span className="text-text-tertiary">/</span>
              <span className="font-bold text-text-primary text-xs sm:text-sm">
                {activeSector.name}
              </span>
            </div>
            <p className="text-text-secondary text-[11px] sm:text-xs">
              <span className="text-text-tertiary">Physical Domain:</span> {activeSector.physicalDomain}
            </p>
            <p className="text-text-secondary text-[11px] sm:text-xs">
              <span className="text-accent-dark dark:text-accent font-medium">Digital Engine:</span> {activeSector.digitalEngine}
            </p>
          </div>

          <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border-subtle flex sm:flex-col justify-between items-center sm:items-end">
            <span className="text-base sm:text-lg font-mono font-bold text-text-primary">
              {activeSector.keyMetric}
            </span>
            <span className="text-[10px] font-mono text-text-tertiary">
              {activeSector.metricLabel}
            </span>
          </div>
        </div>
      ) : (
        <div className="px-3 py-2 rounded-lg border border-border-subtle/60 bg-surface/40 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
          <span className="flex items-center gap-1.5">
            <span className="text-accent-dark dark:text-accent">↗</span> Hover or tap any sector above to inspect the digital infrastructure Elevato engineers for that industry.
          </span>
          <span className="hidden sm:inline-block uppercase tracking-widest text-[10px]">
            4 Key Sectors
          </span>
        </div>
      )}
    </div>
  );
}

