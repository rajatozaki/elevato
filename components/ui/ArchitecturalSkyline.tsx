'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ElevationStage {
  id: string;
  stageNum: string;
  elevation: string;
  title: string;
  subtitle: string;
  description: string;
  keyUpgrades: string[];
}

const stages: ElevationStage[] = [
  {
    id: 'foundation',
    stageNum: '01',
    elevation: 'EL +0.0m',
    title: 'Offline-Strong Roots & Legacy Baseline',
    subtitle: 'TRADITIONAL FOUNDATION',
    description: 'Delivering exceptional craft offline, but constrained by an outdated web presence, manual spreadsheets, and dropped customer inquiries.',
    keyUpgrades: ['Manual follow-up lag', 'Disconnected lead channels', 'Slow WordPress plugin bloat'],
  },
  {
    id: 'modernization',
    stageNum: '02',
    elevation: 'EL +24.5m',
    title: 'Custom Architecture & Digital Foundation',
    subtitle: 'STRUCTURED MODERNIZATION',
    description: 'Bespoke Next.js engineering with sub-second page loads, mobile-first conversion UX, and crisp editorial brand positioning.',
    keyUpgrades: ['0.4s Next.js App Router', '100% Core Web Vitals', 'Zero plugin vulnerabilities'],
  },
  {
    id: 'scale',
    stageNum: '03',
    elevation: 'EL +58.0m',
    title: 'Operational Engines & Automated Triage',
    subtitle: 'COMMERCIAL SCALE',
    description: 'Real-time webhook pipelines that qualify incoming prospects, update your database, and alert your team in under 2 minutes.',
    keyUpgrades: ['<2 Min WhatsApp / Telegram Alerts', 'Automated CRM sync', '12+ hrs admin saved / week'],
  },
  {
    id: 'pinnacle',
    stageNum: '04',
    elevation: 'EL +140.0m',
    title: 'Market Leadership & Proprietary Asset',
    subtitle: 'PINNACLE APEX',
    description: 'A self-sustaining digital acquisition engine with 100% repository code ownership, direct founder support, and zero vendor lock-in.',
    keyUpgrades: ['100% GitHub repo transfer', 'Direct founder access (Yash & Rajat)', 'Zero recurring agency lock-in'],
  },
];

export function ArchitecturalSkyline({ className }: { className?: string }) {
  const [activeStage, setActiveStage] = useState<string>('foundation');
  const activeData = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <div className={cn("w-full select-none relative flex flex-col gap-3", className)}>
      {/* Interactive Storytelling Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 py-2 rounded-xl bg-surface/80 border border-border-subtle backdrop-blur-xs">
        {/* Stage Selector Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {stages.map((stage) => {
            const isSelected = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={cn(
                  "px-2.5 sm:px-3.5 py-1 rounded-lg text-xs font-mono transition-all duration-150 flex items-center gap-1.5",
                  isSelected
                    ? "bg-surface text-text-primary border border-accent/40 shadow-xs font-bold text-accent-dark dark:text-accent"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", isSelected ? "bg-accent" : "bg-text-tertiary/40")} />
                <span>{stage.stageNum}</span>
                <span className="hidden md:inline">{stage.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Current Elevation Datum Readout */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-text-tertiary">ALTITUDE:</span>
          <span className="font-bold text-accent-dark dark:text-accent bg-accent/10 px-2 py-0.5 rounded">
            {activeData.elevation}
          </span>
        </div>
      </div>

      {/* Interactive Architectural Canvas */}
      <div className="relative w-full rounded-2xl border border-border-subtle bg-surface/50 p-2 sm:p-4 overflow-hidden">
        {/* Subtle Blueprint Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#888_0.75px,transparent_0.75px)] [background-size:20px_20px] opacity-[0.06] dark:opacity-[0.1] pointer-events-none" />

        <svg
          viewBox="0 0 1200 160"
          className="w-full h-auto text-text-primary relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`
              /* Elevation Trajectory Laser Animation */
              @keyframes trajectoryFlow {
                0% { stroke-dashoffset: 40; }
                100% { stroke-dashoffset: 0; }
              }
              /* Pinnacle Spire Radar / Beacon Ping */
              @keyframes beaconWave {
                0% { r: 3px; opacity: 1; stroke-width: 1.5; }
                100% { r: 16px; opacity: 0; stroke-width: 0.5; }
              }
              @keyframes beaconGlow {
                0%, 100% { opacity: 0.4; }
                50% { opacity: 1; }
              }
              /* Living Window Grid Breathing Lights */
              @keyframes windowGlow1 {
                0%, 100% { opacity: 0.25; fill: #1DB954; }
                50% { opacity: 0.9; fill: #1DB954; }
              }
              @keyframes windowGlow2 {
                0%, 100% { opacity: 0.8; fill: #1DB954; }
                50% { opacity: 0.2; fill: #1DB954; }
              }
              @keyframes windowGlow3 {
                0%, 100% { opacity: 0.15; fill: #1DB954; }
                50% { opacity: 0.75; fill: #1DB954; }
              }
              /* Smoke Wisps from Traditional Chimney */
              @keyframes chimneyWisp {
                0% { transform: translateY(0px) scale(0.8); opacity: 0.6; }
                50% { transform: translateY(-8px) scale(1.2); opacity: 0.3; }
                100% { transform: translateY(-16px) scale(1.6); opacity: 0; }
              }
              /* Rooftop Communications Antenna Signal Arcs */
              @keyframes antennaSignal {
                0% { opacity: 0; transform: scale(0.6); }
                50% { opacity: 0.8; }
                100% { opacity: 0; transform: scale(1.4); }
              }
              /* Character Walking Stride */
              @keyframes walkerTravel {
                0% { transform: translateX(10px); }
                100% { transform: translateX(1140px); }
              }
              @keyframes walkerLegLeft {
                0%, 100% { transform: rotate(-22deg); }
                50% { transform: rotate(22deg); }
              }
              @keyframes walkerLegRight {
                0%, 100% { transform: rotate(22deg); }
                50% { transform: rotate(-22deg); }
              }
              @keyframes walkerBob {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-1.5px); }
              }

              .anim-trajectory {
                animation: trajectoryFlow 2s linear infinite;
              }
              .anim-beacon {
                animation: beaconWave 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
                transform-origin: center;
              }
              .anim-beacon-delayed {
                animation: beaconWave 2.2s cubic-bezier(0, 0, 0.2, 1) infinite 1.1s;
                transform-origin: center;
              }
              .anim-beacon-glow {
                animation: beaconGlow 1.8s ease-in-out infinite;
              }
              .anim-win-1 {
                animation: windowGlow1 3.2s ease-in-out infinite;
              }
              .anim-win-2 {
                animation: windowGlow2 4s ease-in-out infinite 0.8s;
              }
              .anim-win-3 {
                animation: windowGlow3 3.6s ease-in-out infinite 1.6s;
              }
              .anim-smoke-1 {
                animation: chimneyWisp 3s ease-out infinite;
                transform-origin: center bottom;
              }
              .anim-smoke-2 {
                animation: chimneyWisp 3s ease-out infinite 1.5s;
                transform-origin: center bottom;
              }
              .anim-signal {
                animation: antennaSignal 2.4s ease-out infinite;
                transform-origin: 887px 8px;
              }
              .walker-track {
                animation: walkerTravel 28s linear infinite;
              }
              .walker-body {
                animation: walkerBob 0.6s ease-in-out infinite;
              }
              .walker-leg-l {
                animation: walkerLegLeft 0.6s ease-in-out infinite;
                transform-origin: 0px 0px;
              }
              .walker-leg-r {
                animation: walkerLegRight 0.6s ease-in-out infinite;
                transform-origin: 0px 0px;
              }
            `}</style>

            {/* Distant Silhouette Elevation Gradient */}
            <linearGradient id="skyline-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
            </linearGradient>

            {/* Elevation Growth Trajectory Radiant Gradient */}
            <linearGradient id="elevation-trajectory" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.2" />
              <stop offset="40%" stopColor="#1DB954" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#1DB954" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* --- LAYER 0: Blueprint Architectural Grid & Elevation Datum Lines --- */}
          <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.75">
            <line x1="20" y1="20" x2="1180" y2="20" strokeDasharray="3 7" strokeOpacity="0.4" />
            <line x1="20" y1="58" x2="1180" y2="58" strokeDasharray="3 7" strokeOpacity="0.3" />
            <line x1="20" y1="96" x2="1180" y2="96" strokeDasharray="3 7" strokeOpacity="0.3" />

            <path d="M 140 18 L 140 24 M 137 21 L 143 21" />
            <path d="M 430 18 L 430 24 M 427 21 L 433 21" />
            <path d="M 720 18 L 720 24 M 717 21 L 723 21" />
            <path d="M 1030 18 L 1030 24 M 1027 21 L 1033 21" />
          </g>

          {/* --- LAYER 1: Background Ascending Architectural Silhouettes --- */}
          <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.75">
            <polygon points="30,100 55,80 80,100" fill="url(#skyline-fade)" />
            <rect x="35" y="100" width="40" height="40" fill="url(#skyline-fade)" />
            <rect x="110" y="90" width="45" height="50" fill="url(#skyline-fade)" />
            <polygon points="175,85 200,67 225,85" fill="url(#skyline-fade)" />
            <rect x="180" y="85" width="50" height="55" fill="url(#skyline-fade)" />

            <rect x="270" y="70" width="60" height="70" fill="url(#skyline-fade)" />
            <polygon points="360,73 395,50 430,73" fill="url(#skyline-fade)" />
            <rect x="365" y="73" width="60" height="67" fill="url(#skyline-fade)" />
            <rect x="460" y="57" width="65" height="83" fill="url(#skyline-fade)" />

            <rect x="560" y="45" width="70" height="95" fill="url(#skyline-fade)" />
            <rect x="660" y="35" width="75" height="105" fill="url(#skyline-fade)" />
            <rect x="765" y="29" width="65" height="111" fill="url(#skyline-fade)" />

            <rect x="860" y="23" width="75" height="117" fill="url(#skyline-fade)" />
            <polygon points="965,27 1000,13 1035,27" fill="url(#skyline-fade)" />
            <rect x="970" y="27" width="60" height="113" fill="url(#skyline-fade)" />
            <rect x="1060" y="17" width="80" height="123" fill="url(#skyline-fade)" />
            <line x1="1100" y1="8" x2="1100" y2="17" strokeWidth="1" />
          </g>

          {/* --- LAYER 2: Dynamic Elevation Growth Trajectory Line --- */}
          <g>
            <path
              d="M 20 130 C 280 120, 600 80, 1125 14"
              stroke="url(#elevation-trajectory)"
              strokeWidth="1.75"
              strokeDasharray="5 5"
              className="anim-trajectory"
            />
            <path
              d="M 20 130 C 280 120, 600 80, 1125 14"
              stroke="#1DB954"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>

          {/* --- LAYER 3: Detailed Architectural Buildings --- */}
          <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
            
            {/* =====================================================================
                STAGE 1: TRADITIONAL FOUNDATIONS & CRAFTSMAN BASELINE (x: 0 - 275)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('foundation')}
              className={cn(
                "cursor-pointer transition-opacity duration-200",
                activeStage === 'foundation' ? "opacity-100" : "opacity-60 hover:opacity-90"
              )}
            >
              {/* Street Lamp 1 with Glowing Ambient Halo */}
              <line x1="22" y1="95" x2="22" y2="140" strokeWidth="1" />
              <path d="M 19 95 C 19 90, 25 90, 25 95 Z" fill="#1DB954" fillOpacity="0.3" strokeWidth="0.75" />
              <circle cx="22" cy="95" r="2" fill="#1DB954" className="anim-beacon-glow" />
              <circle cx="22" cy="95" r="5" stroke="#1DB954" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />

              {/* Cottage 1: Craftsman Pitched Cottage with Chimney & Smoke */}
              <polygon points="42,99 66,79 90,99" strokeWidth="1.25" fill="currentColor" fillOpacity="0.02" />
              <rect x="46" y="99" width="40" height="41" />
              {/* Chimney & Smoke Wisps */}
              <rect x="74" y="83" width="6" height="12" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
              <circle cx="77" cy="79" r="1.5" fill="#1DB954" opacity="0.6" className="anim-smoke-1" />
              <circle cx="79" cy="73" r="2.5" fill="#1DB954" opacity="0.4" className="anim-smoke-2" />
              {/* Attic Window */}
              <circle cx="66" cy="90" r="3.5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />
              {/* Windows & Entrance Door with lit warm green interior */}
              <rect x="52" y="105" width="9" height="12" strokeWidth="0.75" />
              <line x1="56.5" y1="105" x2="56.5" y2="117" strokeWidth="0.5" />
              <line x1="52" y1="111" x2="61" y2="111" strokeWidth="0.5" />
              
              <rect x="69" y="105" width="9" height="12" strokeWidth="0.75" className="anim-win-1" />
              <line x1="73.5" y1="105" x2="73.5" y2="117" strokeWidth="0.5" />
              <line x1="69" y1="111" x2="78" y2="111" strokeWidth="0.5" />

              <rect x="59" y="121" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
              <circle cx="69" cy="131" r="0.75" fill="currentColor" />

              {/* Parked Vintage Bicycle */}
              <g transform="translate(98, 127)">
                <circle cx="4" cy="9" r="4.5" strokeWidth="0.75" />
                <circle cx="17" cy="9" r="4.5" strokeWidth="0.75" />
                <line x1="4" y1="9" x2="10" y2="5" strokeWidth="0.75" />
                <line x1="10" y1="5" x2="17" y2="9" strokeWidth="0.75" />
                <line x1="10" y1="5" x2="8" y2="1" strokeWidth="0.75" />
                <line x1="6" y1="1" x2="11" y2="1" strokeWidth="0.75" />
              </g>

              {/* Townhouse B: 2-Story Brick Townhouse with Masonry Lines */}
              <rect x="130" y="87" width="46" height="53" />
              <polygon points="126,87 153,69 180,87" strokeWidth="1.25" fill="currentColor" fillOpacity="0.02" />
              <line x1="130" y1="99" x2="176" y2="99" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.5" />
              <line x1="130" y1="113" x2="176" y2="113" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.5" />
              <rect x="138" y="93" width="11" height="12" strokeWidth="0.75" />
              <rect x="157" y="93" width="11" height="12" strokeWidth="0.75" className="anim-win-2" />
              <rect x="138" y="109" width="11" height="12" strokeWidth="0.75" className="anim-win-3" />
              <rect x="157" y="109" width="11" height="12" strokeWidth="0.75" />
              <rect x="147" y="123" width="12" height="17" strokeWidth="1" />

              {/* Tree 1 */}
              <line x1="190" y1="107" x2="190" y2="140" strokeWidth="1" />
              <circle cx="190" cy="103" r="9" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />
              <path d="M 184 107 C 187 100, 193 100, 196 107" strokeWidth="0.75" />

              {/* Workshop C: Timber Frame Shed & Garage */}
              <polygon points="204,97 228,79 252,97" strokeWidth="1.25" />
              <rect x="208" y="97" width="40" height="43" />
              <rect x="216" y="111" width="24" height="29" strokeWidth="0.75" />
              <line x1="216" y1="117" x2="240" y2="117" strokeWidth="0.5" />
              <line x1="216" y1="123" x2="240" y2="123" strokeWidth="0.5" />
              <line x1="216" y1="129" x2="240" y2="129" strokeWidth="0.5" />
              <line x1="216" y1="135" x2="240" y2="135" strokeWidth="0.5" />

              {/* Street Bench */}
              <line x1="258" y1="131" x2="272" y2="131" strokeWidth="1.25" />
              <line x1="260" y1="131" x2="260" y2="140" strokeWidth="1" />
              <line x1="270" y1="131" x2="270" y2="140" strokeWidth="1" />
            </g>

            {/* =====================================================================
                STAGE 2: STRUCTURED MODERNIZATION & STUDIO EXPANSION (x: 275 - 575)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('modernization')}
              className={cn(
                "cursor-pointer transition-opacity duration-200",
                activeStage === 'modernization' ? "opacity-100" : "opacity-60 hover:opacity-90"
              )}
            >
              {/* Streetlamp 2 */}
              <line x1="284" y1="87" x2="284" y2="140" strokeWidth="1" />
              <path d="M 281 87 C 281 82, 287 82, 287 87 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
              <circle cx="284" cy="87" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

              {/* Modern Townhouse Pair with Ribbon Windows */}
              <polygon points="296,77 320,59 344,77" strokeWidth="1.25" />
              <rect x="301" y="77" width="38" height="63" />
              <rect x="309" y="85" width="22" height="14" strokeWidth="0.75" />
              <rect x="309" y="103" width="22" height="14" strokeWidth="0.75" className="anim-win-2" />
              <rect x="313" y="121" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

              <polygon points="344,77 368,59 392,77" strokeWidth="1.25" />
              <rect x="349" y="77" width="38" height="63" />
              <rect x="357" y="85" width="22" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="357" y="103" width="22" height="14" strokeWidth="0.75" />
              <rect x="361" y="121" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

              {/* Pine Tree 2 */}
              <line x1="404" y1="99" x2="404" y2="140" strokeWidth="1" />
              <polygon points="404,87 395,103 413,103" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
              <polygon points="404,97 393,115 415,115" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />

              {/* Modern Split-Level Studio with Cantilever Balcony & Solar Roof */}
              <rect x="426" y="61" width="54" height="79" />
              <polygon points="432,61 450,52 464,61" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
              <line x1="442" y1="56" x2="442" y2="61" strokeWidth="0.5" />
              <line x1="453" y1="56" x2="453" y2="61" strokeWidth="0.5" />
              <rect x="434" y="69" width="16" height="16" strokeWidth="0.75" className="anim-win-3" />
              <rect x="456" y="69" width="16" height="16" strokeWidth="0.75" />
              <line x1="426" y1="89" x2="480" y2="89" strokeWidth="1.25" />
              <line x1="428" y1="86" x2="478" y2="86" strokeWidth="0.5" />
              <rect x="434" y="95" width="16" height="18" strokeWidth="0.75" />
              <rect x="456" y="95" width="16" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="444" y="117" width="18" height="23" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

              {/* Transitional Clock & Datum Spire Tower */}
              <rect x="494" y="47" width="38" height="93" />
              <polygon points="494,47 513,29 532,47" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <line x1="513" y1="23" x2="513" y2="29" strokeWidth="1" />
              <circle cx="513" cy="23" r="1.5" fill="#1DB954" className="anim-beacon-glow" />
              <circle cx="513" cy="47" r="5.5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />
              <line x1="513" y1="47" x2="513" y2="44" strokeWidth="0.75" />
              <line x1="513" y1="47" x2="516" y2="47" strokeWidth="0.75" />
              <rect x="502" y="63" width="22" height="24" rx="11" strokeWidth="0.75" className="anim-win-2" />
              <rect x="502" y="95" width="22" height="24" rx="11" strokeWidth="0.75" />
              <rect x="507" y="123" width="12" height="17" strokeWidth="1" fill="#1DB954" fillOpacity="0.2" />

              {/* Tree 3 */}
              <line x1="548" y1="97" x2="548" y2="140" strokeWidth="1" />
              <circle cx="548" cy="91" r="11" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
            </g>

            {/* =====================================================================
                STAGE 3: ADVANCED COMMERCIAL STUDIOS & ATRIUMS (x: 575 - 885)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('scale')}
              className={cn(
                "cursor-pointer transition-opacity duration-200",
                activeStage === 'scale' ? "opacity-100" : "opacity-60 hover:opacity-90"
              )}
            >
              {/* Contemporary 5-Story Glass Tech HQ */}
              <rect x="572" y="39" width="64" height="101" />
              <rect x="581" y="47" width="11" height="14" strokeWidth="0.75" />
              <rect x="598" y="47" width="11" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="615" y="47" width="11" height="14" strokeWidth="0.75" />

              <rect x="581" y="67" width="11" height="14" strokeWidth="0.75" className="anim-win-3" />
              <rect x="598" y="67" width="11" height="14" strokeWidth="0.75" />
              <rect x="615" y="67" width="11" height="14" strokeWidth="0.75" className="anim-win-2" />

              <rect x="581" y="87" width="11" height="14" strokeWidth="0.75" />
              <rect x="598" y="87" width="11" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="615" y="87" width="11" height="14" strokeWidth="0.75" />

              <rect x="581" y="107" width="11" height="14" strokeWidth="0.75" className="anim-win-2" />
              <rect x="598" y="107" width="11" height="14" strokeWidth="0.75" />
              <rect x="615" y="107" width="11" height="14" strokeWidth="0.75" />
              <rect x="592" y="125" width="24" height="15" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

              {/* Stepped Architectural HQ Complex with Sun-Louvers */}
              <rect x="650" y="31" width="72" height="109" />
              <line x1="650" y1="45" x2="722" y2="45" strokeWidth="0.75" />
              <line x1="650" y1="59" x2="722" y2="59" strokeWidth="0.75" />
              <line x1="650" y1="73" x2="722" y2="73" strokeWidth="0.75" />
              <line x1="650" y1="87" x2="722" y2="87" strokeWidth="0.75" />
              <line x1="650" y1="101" x2="722" y2="101" strokeWidth="0.75" />
              <line x1="650" y1="115" x2="722" y2="115" strokeWidth="0.75" />
              <line x1="674" y1="31" x2="674" y2="140" strokeWidth="0.5" />
              <line x1="698" y1="31" x2="698" y2="140" strokeWidth="0.5" />
              <rect x="670" y="117" width="32" height="23" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />

              {/* Modern Streetlamp & Tree */}
              <line x1="738" y1="79" x2="738" y2="140" strokeWidth="1" />
              <circle cx="738" cy="79" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

              {/* Modular Creative Cantilever Tower */}
              <rect x="756" y="43" width="58" height="97" />
              <rect x="748" y="27" width="74" height="22" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <rect x="760" y="31" width="50" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="768" y="55" width="34" height="15" strokeWidth="0.75" className="anim-win-3" />
              <rect x="768" y="77" width="34" height="15" strokeWidth="0.75" />
              <rect x="768" y="99" width="34" height="15" strokeWidth="0.75" className="anim-win-2" />
              <rect x="774" y="121" width="22" height="19" strokeWidth="1" />

              {/* Tree 4 */}
              <line x1="836" y1="93" x2="836" y2="140" strokeWidth="1" />
              <circle cx="836" cy="85" r="12" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

              {/* High-Tech Innovation Center with Diagonal Exo-Skeleton Bracing */}
              <rect x="856" y="21" width="62" height="119" />
              <line x1="887" y1="21" x2="887" y2="140" strokeWidth="0.75" />
              <line x1="856" y1="41" x2="918" y2="73" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="856" y1="73" x2="918" y2="41" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="856" y1="73" x2="918" y2="105" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="856" y1="105" x2="918" y2="73" strokeWidth="0.75" strokeOpacity="0.6" />
              {/* Rooftop Communications Antenna Mast & Signal Waves */}
              <line x1="887" y1="8" x2="887" y2="21" strokeWidth="1.25" />
              <circle cx="887" cy="8" r="2.5" fill="#1DB954" />
              <circle cx="887" cy="8" r="8" stroke="#1DB954" strokeWidth="0.75" className="anim-signal" fill="none" />
            </g>

            {/* =====================================================================
                STAGE 4: THE PINNACLE ELEVATION & MEGATOWERS (x: 885 - 1200)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('pinnacle')}
              className={cn(
                "cursor-pointer transition-opacity duration-200",
                activeStage === 'pinnacle' ? "opacity-100" : "opacity-60 hover:opacity-90"
              )}
            >
              {/* Skyscraper 1: Stepped Modernist Corporate Tower */}
              <rect x="930" y="33" width="68" height="107" />
              <rect x="940" y="19" width="48" height="14" strokeWidth="1" fill="#1DB954" fillOpacity="0.08" />
              <line x1="964" y1="9" x2="964" y2="19" strokeWidth="1.25" />
              <circle cx="964" cy="9" r="2.5" fill="#1DB954" />
              <circle cx="964" cy="9" r="6" stroke="#1DB954" className="anim-beacon" fill="none" />
              
              <rect x="940" y="41" width="13" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="958" y="41" width="13" height="18" strokeWidth="0.75" />
              <rect x="976" y="41" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />

              <rect x="940" y="65" width="13" height="18" strokeWidth="0.75" />
              <rect x="958" y="65" width="13" height="18" strokeWidth="0.75" className="anim-win-3" />
              <rect x="976" y="65" width="13" height="18" strokeWidth="0.75" />

              <rect x="940" y="89" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
              <rect x="958" y="89" width="13" height="18" strokeWidth="0.75" />
              <rect x="976" y="89" width="13" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="948" y="115" width="34" height="25" strokeWidth="1" />

              {/* Tree 5 & Street Beacon */}
              <line x1="1012" y1="89" x2="1012" y2="140" strokeWidth="1" />
              <circle cx="1012" cy="83" r="10" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />
              <line x1="1030" y1="73" x2="1030" y2="140" strokeWidth="1" />
              <circle cx="1030" cy="73" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

              {/* Skyscraper 2: Iconic Angled Pinnacle Spire (Zenith Height y: 4) */}
              <polygon points="1048,37 1080,13 1112,37" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <rect x="1048" y="37" width="64" height="103" />
              {/* Pinnacle Needle Spire & Flashing Beacons */}
              <line x1="1080" y1="3" x2="1080" y2="13" strokeWidth="1.5" />
              <circle cx="1080" cy="3" r="3.5" fill="#1DB954" />
              <circle cx="1080" cy="3" r="10" stroke="#1DB954" className="anim-beacon" fill="none" />
              <circle cx="1080" cy="3" r="18" stroke="#1DB954" className="anim-beacon-delayed" fill="none" />

              <polygon points="1064,33 1080,19 1096,33" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" className="anim-win-1" />
              <line x1="1064" y1="45" x2="1064" y2="140" strokeWidth="0.5" />
              <line x1="1080" y1="45" x2="1080" y2="140" strokeWidth="0.75" />
              <line x1="1096" y1="45" x2="1096" y2="140" strokeWidth="0.5" />
              <line x1="1048" y1="57" x2="1112" y2="57" strokeWidth="0.75" />
              <line x1="1048" y1="75" x2="1112" y2="75" strokeWidth="0.75" />
              <line x1="1048" y1="93" x2="1112" y2="93" strokeWidth="0.75" />
              <line x1="1048" y1="111" x2="1112" y2="111" strokeWidth="0.75" />

              {/* Skyscraper 3: The Grand Corporate Apex Megatower */}
              <rect x="1126" y="25" width="68" height="115" />
              <polygon points="1122,25 1160,11 1198,25" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />
              <line x1="1160" y1="3" x2="1160" y2="11" strokeWidth="1.5" />
              <circle cx="1160" cy="3" r="3.5" fill="#1DB954" />
              <circle cx="1160" cy="3" r="8" stroke="#1DB954" className="anim-beacon" fill="none" />

              <rect x="1136" y="33" width="13" height="18" strokeWidth="0.75" />
              <rect x="1154" y="33" width="15" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="1174" y="33" width="13" height="18" strokeWidth="0.75" />

              <rect x="1136" y="57" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
              <rect x="1154" y="57" width="15" height="18" strokeWidth="0.75" />
              <rect x="1174" y="57" width="13" height="18" strokeWidth="0.75" className="anim-win-3" />

              <rect x="1136" y="81" width="13" height="18" strokeWidth="0.75" />
              <rect x="1154" y="81" width="15" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="1174" y="81" width="13" height="18" strokeWidth="0.75" />

              <rect x="1136" y="105" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
              <rect x="1154" y="105" width="15" height="18" strokeWidth="0.75" />
              <rect x="1174" y="105" width="13" height="18" strokeWidth="0.75" />
              <rect x="1146" y="125" width="30" height="15" />
            </g>
          </g>

          {/* --- LAYER 4: Animated Walking Character Traveling Across Elevation Stages --- */}
          <g className="walker-track" transform="translate(0, 140)">
            <g className="walker-body">
              {/* Head / Cap */}
              <circle cx="0" cy="-22" r="3" fill="#1DB954" />
              <path d="M -3 -23 L 3 -23 L 4 -21 L -3 -21 Z" fill="currentColor" />
              {/* Torso & Backpack */}
              <rect x="-3" y="-19" width="6" height="10" rx="1.5" fill="currentColor" />
              <rect x="-6" y="-18" width="3" height="7" rx="1" fill="#1DB954" fillOpacity="0.8" />
              {/* Arms */}
              <line x1="0" y1="-17" x2="3" y2="-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Legs with walking cycle animation */}
            <g transform="translate(0, -9)">
              <line x1="0" y1="0" x2="-2.5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="walker-leg-l" />
              <line x1="0" y1="0" x2="2.5" y2="9" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round" className="walker-leg-r" />
            </g>
          </g>

          {/* --- LAYER 5: Ground Foundation Datum Line & Progression Station Markers --- */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90">
            <line x1="0" y1="140" x2="1200" y2="140" />
            
            {/* Progression Stage Anchor Nodes with Green Glow */}
            <circle cx="66" cy="140" r="3" fill="#1DB954" />
            <circle cx="344" cy="140" r="3" fill="#1DB954" />
            <circle cx="686" cy="140" r="3.5" fill="#1DB954" />
            <circle cx="1080" cy="140" r="4" fill="#1DB954" />
            <circle cx="1160" cy="140" r="4.5" fill="#1DB954" />
          </g>

          {/* --- LAYER 6: Station Architectural Datum Labels --- */}
          <g fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.45" stroke="none">
            <text x="45" y="153">01 // BASELINE FOUNDATION [EL +0.0m]</text>
            <text x="305" y="153">02 // MODERNIZATION [EL +24.5m]</text>
            <text x="635" y="153">03 // COMMERCIAL SCALE [EL +58.0m]</text>
            <text x="1015" y="153">04 // PINNACLE APEX [EL +140.0m]</text>
          </g>
        </svg>
      </div>

      {/* Stage Narrative Callout Banner (Explaining the Elevation Impact) */}
      <div className="p-4 sm:p-5 rounded-xl border border-accent/20 bg-surface/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-dark dark:text-accent font-semibold mb-1">
            <span>{`■ STAGE ${activeData.stageNum} //`}</span>
            <span className="uppercase tracking-wider text-text-primary">{activeData.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {activeData.description}
          </p>
        </div>

        {/* Key Upgrades Badges */}
        <div className="flex flex-wrap md:flex-col gap-1.5 md:items-end shrink-0">
          {activeData.keyUpgrades.map((upgrade) => (
            <span
              key={upgrade}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-accent/5 dark:bg-accent/10 border border-accent/20 text-text-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{upgrade}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export alias
export const BusinessInfrastructureVisual = ArchitecturalSkyline;
