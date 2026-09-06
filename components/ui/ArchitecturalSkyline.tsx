'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ElevationStage {
  id: string;
  stageNum: string;
  elevation: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyUpgrades: string[];
}

const stages: ElevationStage[] = [
  {
    id: 'foundation',
    stageNum: '01',
    elevation: 'EL +0.0m',
    title: 'Legacy Baseline & Ground Zero Terminal',
    subtitle: 'GROUND INFRASTRUCTURE',
    status: 'SYSTEM_LEGACY // MANUAL',
    description: 'Delivering exceptional craft offline, but bottlenecked by fragmented spreadsheets, legacy site scripts, manual lead dispatch, and disconnected operational tools.',
    metrics: [
      { label: 'Latency', value: '4.8s' },
      { label: 'Lead Flow', value: 'Manual / CSV' },
      { label: 'Uptime', value: '98.2%' },
    ],
    keyUpgrades: ['Manual follow-up latency', 'Disconnected CRM channels', 'Slow legacy CMS bloat'],
  },
  {
    id: 'modernization',
    stageNum: '02',
    elevation: 'EL +140.0m',
    title: 'Custom Cloud Architecture & Edge Facility',
    subtitle: 'EDGE MODERNIZATION',
    status: 'OPTIMIZED // NEXT.JS SSR',
    description: 'Engineered on modern Next.js App Router with global edge deployment, sub-second TTFB, mobile-first conversion UX, and crisp editorial brand authority.',
    metrics: [
      { label: 'Latency', value: '0.4s' },
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'Edge Nodes', value: '300+ Global' },
    ],
    keyUpgrades: ['0.4s Next.js Edge SSR', '100% Core Web Vitals', 'Zero plugin vulnerability'],
  },
  {
    id: 'scale',
    stageNum: '03',
    elevation: 'EL +480.0m',
    title: 'Enterprise Cyber Arcology & Automated Triage',
    subtitle: 'COMMERCIAL SCALE',
    status: 'AUTOMATED // REALTIME AI',
    description: 'High-throughput event webhooks qualify incoming leads, sync relational databases, and dispatch intelligent WhatsApp / Telegram alerts to your team in under 60 seconds.',
    metrics: [
      { label: 'Alert Speed', value: '< 60 Sec' },
      { label: 'Sync Rate', value: 'Realtime' },
      { label: 'Time Saved', value: '14 hrs/wk' },
    ],
    keyUpgrades: ['Instant WhatsApp/Telegram Pings', 'Automated CRM & DB Sync', '14+ hrs admin saved / week'],
  },
  {
    id: 'pinnacle',
    stageNum: '04',
    elevation: 'EL +1050.0m',
    title: 'Zenith Megatower & Autonomous Asset Engine',
    subtitle: 'PINNACLE APEX',
    status: 'ZENITH_PEAK // PROPRIETARY',
    description: 'A sovereign digital acquisition and operations fortress. 100% repository code ownership, direct founder-led engineering, zero vendor lock-in, and autonomous growth pipelines.',
    metrics: [
      { label: 'Code Ownership', value: '100% GitHub' },
      { label: 'Vendor Lock-in', value: '0%' },
      { label: 'Direct Access', value: 'Yash & Rajat' },
    ],
    keyUpgrades: ['100% GitHub Repo Handover', 'Zero recurring agency lock-in', 'Direct founder SLA access'],
  },
];

export function ArchitecturalSkyline({ className }: { className?: string }) {
  const [activeStage, setActiveStage] = useState<string>('pinnacle');
  const activeData = stages.find((s) => s.id === activeStage) || stages[3];

  return (
    <div className={cn("w-full select-none relative flex flex-col gap-3", className)}>
      {/* Top Cyber Telemetry & Stage Control Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-surface/90 border border-border-subtle backdrop-blur-md">
        {/* Stage Selector Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {stages.map((stage) => {
            const isSelected = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={cn(
                  "px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono transition-all duration-150 flex items-center gap-1.5",
                  isSelected
                    ? "bg-surface text-text-primary border border-accent/60 shadow-xs font-bold text-accent-dark dark:text-accent ring-1 ring-accent/30"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50"
                )}
              >
                <span className={cn("w-1.5 h-1.5 rounded-full", isSelected ? "bg-accent animate-pulse" : "bg-text-tertiary/40")} />
                <span>{stage.stageNum}</span>
                <span className="hidden md:inline">{stage.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Realtime Cyber Altitude & Status Telemetry */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-1.5 text-text-tertiary">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="text-[11px] text-text-secondary uppercase">{activeData.status}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-text-tertiary">ALT:</span>
            <span className="font-bold text-accent-dark dark:text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
              {activeData.elevation}
            </span>
          </div>
        </div>
      </div>

      {/* Cybercity Architectural Canvas Viewport */}
      <div className="relative w-full rounded-2xl border border-border-subtle bg-surface/70 p-2 sm:p-4 overflow-hidden group">
        {/* Cyber Matrix Coordinate Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1DB954_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.08] pointer-events-none" />

        <svg
          viewBox="0 0 1400 320"
          className="w-full h-auto text-text-primary relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`
              /* Trajectory Laser Sweep */
              @keyframes cyberLaser {
                0% { stroke-dashoffset: 60; }
                100% { stroke-dashoffset: 0; }
              }
              /* Apex Spire Radiant Beacons */
              @keyframes spireWave {
                0% { r: 3px; opacity: 1; stroke-width: 2; }
                100% { r: 24px; opacity: 0; stroke-width: 0.5; }
              }
              @keyframes spireWaveSlow {
                0% { r: 3px; opacity: 0.9; stroke-width: 1.5; }
                100% { r: 32px; opacity: 0; stroke-width: 0.25; }
              }
              /* Express Glass Elevator Movement */
              @keyframes elevatorRide1 {
                0%, 15% { transform: translateY(0px); }
                45%, 60% { transform: translateY(-120px); }
                85%, 100% { transform: translateY(0px); }
              }
              @keyframes elevatorRide2 {
                0%, 10% { transform: translateY(0px); }
                50%, 65% { transform: translateY(-165px); }
                90%, 100% { transform: translateY(0px); }
              }
              /* Cyber Drone / Sky-car Flight Paths */
              @keyframes droneFlight1 {
                0% { transform: translate(1420px, 60px); opacity: 0; }
                5% { opacity: 1; }
                95% { opacity: 1; }
                100% { transform: translate(-40px, 45px); opacity: 0; }
              }
              @keyframes droneFlight2 {
                0% { transform: translate(-30px, 95px); opacity: 0; }
                5% { opacity: 1; }
                95% { opacity: 1; }
                100% { transform: translate(1430px, 75px); opacity: 0; }
              }
              /* Optical Fiber Conduit Data Pulses */
              @keyframes dataFlowVert {
                0% { stroke-dashoffset: 80; }
                100% { stroke-dashoffset: 0; }
              }
              /* Living Window Grid Matrix Flickers */
              @keyframes winFlicker1 {
                0%, 100% { opacity: 0.25; fill: #1DB954; }
                30% { opacity: 0.95; fill: #1DB954; }
                70% { opacity: 0.4; fill: #1DB954; }
              }
              @keyframes winFlicker2 {
                0%, 100% { opacity: 0.85; fill: #1DB954; }
                50% { opacity: 0.15; fill: #1DB954; }
              }
              @keyframes winFlicker3 {
                0%, 100% { opacity: 0.2; fill: #1DB954; }
                60% { opacity: 0.9; fill: #1DB954; }
              }
              /* Apex Beam Vertical Pulse */
              @keyframes apexBeamPulse {
                0%, 100% { opacity: 0.4; transform: scaleY(0.95); }
                50% { opacity: 0.95; transform: scaleY(1.05); }
              }
              /* Cyber Walker Traversal */
              @keyframes walkerWalk {
                0% { transform: translateX(20px); }
                100% { transform: translateX(1360px); }
              }
              @keyframes walkerLegL {
                0%, 100% { transform: rotate(-24deg); }
                50% { transform: rotate(24deg); }
              }
              @keyframes walkerLegR {
                0%, 100% { transform: rotate(24deg); }
                50% { transform: rotate(-24deg); }
              }

              .anim-laser { animation: cyberLaser 1.8s linear infinite; }
              .anim-spire-1 { animation: spireWave 2.4s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
              .anim-spire-2 { animation: spireWave 2.4s cubic-bezier(0, 0, 0.2, 1) infinite 1.2s; transform-origin: center; }
              .anim-spire-slow { animation: spireWaveSlow 3.2s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s; transform-origin: center; }
              .anim-elevator-1 { animation: elevatorRide1 10s ease-in-out infinite; }
              .anim-elevator-2 { animation: elevatorRide2 14s ease-in-out infinite 2s; }
              .anim-drone-1 { animation: droneFlight1 22s linear infinite; }
              .anim-drone-2 { animation: droneFlight2 28s linear infinite 5s; }
              .anim-data-flow { animation: dataFlowVert 2.5s linear infinite; }
              .anim-win-1 { animation: winFlicker1 4s ease-in-out infinite; }
              .anim-win-2 { animation: winFlicker2 5s ease-in-out infinite 1s; }
              .anim-win-3 { animation: winFlicker3 3.5s ease-in-out infinite 2s; }
              .anim-beam { animation: apexBeamPulse 2.5s ease-in-out infinite; transform-origin: center bottom; }
              .anim-walker-track { animation: walkerWalk 34s linear infinite; }
              .anim-walker-leg-l { animation: walkerLegL 0.5s ease-in-out infinite; transform-origin: 0 0; }
              .anim-walker-leg-r { animation: walkerLegR 0.5s ease-in-out infinite; transform-origin: 0 0; }
            `}</style>

            {/* Gradient Fades for Depth Silhouettes */}
            <linearGradient id="bg-cyber-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
              <stop offset="70%" stopColor="currentColor" stopOpacity="0.06" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
            </linearGradient>

            <linearGradient id="laser-path-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#1DB954" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#1DB954" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="1" />
            </linearGradient>

            <pattern id="solar-grid" width="8" height="5" patternUnits="userSpaceOnUse">
              <rect width="7" height="4" stroke="#1DB954" strokeWidth="0.5" strokeOpacity="0.4" fill="#1DB954" fillOpacity="0.08" />
            </pattern>
          </defs>

          {/* =========================================================================
              LAYER 0: CYBER HUD TELEMETRY, ELEVATION DATUM RULERS & AXIS GRID
             ========================================================================= */}
          <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.6">
            <line x1="20" y1="35" x2="1380" y2="35" strokeDasharray="3 9" strokeOpacity="0.4" />
            <line x1="20" y1="105" x2="1380" y2="105" strokeDasharray="3 9" strokeOpacity="0.3" />
            <line x1="20" y1="180" x2="1380" y2="180" strokeDasharray="3 9" strokeOpacity="0.3" />
            <line x1="20" y1="240" x2="1380" y2="240" strokeDasharray="3 9" strokeOpacity="0.3" />

            {/* Crosshair Registration Markers */}
            <path d="M 160 30 L 160 40 M 155 35 L 165 35" />
            <path d="M 460 30 L 460 40 M 455 35 L 465 35" />
            <path d="M 820 30 L 820 40 M 815 35 L 825 35" />
            <path d="M 1200 30 L 1200 40 M 1195 35 L 1205 35" />

            {/* Stage Altitude Markers */}
            <text x="25" y="244" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.6">EL +000m</text>
            <text x="25" y="184" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.6">EL +140m</text>
            <text x="25" y="109" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.6">EL +480m</text>
            <text x="25" y="39" fontSize="7" fontFamily="monospace" fill="currentColor" opacity="0.6">EL +1050m [ZENITH]</text>
          </g>

          {/* =========================================================================
              LAYER 1: DISTANT BACKGROUND CYBER MEGATOWERS & CITY SILHOUETTES
             ========================================================================= */}
          <g className="opacity-30 dark:opacity-35" stroke="currentColor" strokeWidth="0.75">
            {/* Distant Outpost Blocks */}
            <rect x="50" y="210" width="45" height="60" fill="url(#bg-cyber-fade)" />
            <polygon points="120,205 145,185 170,205" fill="url(#bg-cyber-fade)" />
            <rect x="125" y="205" width="40" height="65" fill="url(#bg-cyber-fade)" />

            {/* Distant Mid-Tier Towers */}
            <rect x="290" y="160" width="55" height="110" fill="url(#bg-cyber-fade)" />
            <polygon points="365,150 400,120 435,150" fill="url(#bg-cyber-fade)" />
            <rect x="370" y="150" width="60" height="120" fill="url(#bg-cyber-fade)" />
            <rect x="470" y="130" width="65" height="140" fill="url(#bg-cyber-fade)" />

            {/* Distant Commercial Arcologies */}
            <rect x="580" y="90" width="75" height="180" fill="url(#bg-cyber-fade)" />
            <rect x="680" y="65" width="80" height="205" fill="url(#bg-cyber-fade)" />
            <line x1="720" y1="40" x2="720" y2="65" strokeWidth="1" />
            <circle cx="720" cy="40" r="2" fill="#1DB954" opacity="0.6" />

            <polygon points="785,75 830,35 875,75" fill="url(#bg-cyber-fade)" />
            <rect x="790" y="75" width="80" height="195" fill="url(#bg-cyber-fade)" />

            {/* Distant Colossal Zenith Megacity Monoliths */}
            <rect x="910" y="45" width="90" height="225" fill="url(#bg-cyber-fade)" />
            <polygon points="1025,35 1070,8 1115,35" fill="url(#bg-cyber-fade)" />
            <rect x="1030" y="35" width="80" height="235" fill="url(#bg-cyber-fade)" />
            <line x1="1070" y1="0" x2="1070" y2="8" strokeWidth="1.5" stroke="#1DB954" />

            <rect x="1150" y="20" width="105" height="250" fill="url(#bg-cyber-fade)" />
            <line x1="1200" y1="2" x2="1200" y2="20" strokeWidth="1.5" stroke="#1DB954" />

            <rect x="1275" y="30" width="95" height="240" fill="url(#bg-cyber-fade)" />
            <polygon points="1275,30 1320,12 1365,30" fill="url(#bg-cyber-fade)" />
          </g>

          {/* =========================================================================
              LAYER 2: HIGH-ALTITUDE SKYWAYS, FLYING CYBER DRONES & TRAJECTORY LASER
             ========================================================================= */}
          {/* Sky-lane Trajectory Laser */}
          <g>
            <path
              d="M 20 260 C 260 250, 580 180, 1150 20"
              stroke="url(#laser-path-grad)"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="anim-laser"
            />
            <path
              d="M 20 260 C 260 250, 580 180, 1150 20"
              stroke="#1DB954"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>

          {/* Animated Sky-Drones Flying in Transit Lanes */}
          <g className="anim-drone-1">
            <rect x="-8" y="-3" width="16" height="6" rx="2" fill="currentColor" />
            <line x1="-12" y1="-3" x2="12" y2="-3" stroke="#1DB954" strokeWidth="1" />
            <circle cx="6" cy="0" r="1.5" fill="#1DB954" />
            <line x1="-6" y1="0" x2="-28" y2="0" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          </g>
          <g className="anim-drone-2">
            <rect x="-6" y="-2.5" width="12" height="5" rx="1.5" fill="currentColor" />
            <line x1="-9" y1="-2.5" x2="9" y2="-2.5" stroke="#1DB954" strokeWidth="0.75" />
            <circle cx="-4" cy="0" r="1.2" fill="#1DB954" />
            <line x1="6" y1="0" x2="24" y2="0" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
          </g>

          {/* =========================================================================
              LAYER 3: FOREGROUND HYPER-DETAILED CYBERCITY SKYSCRAPERS & INFRASTRUCTURE
             ========================================================================= */}
          <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-90 dark:opacity-95">

            {/* =====================================================================
                STAGE 01: THE LEGACY BASELINE & GROUND ZERO TERMINAL (x: 0 - 275)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('foundation')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeStage === 'foundation' ? "opacity-100" : "opacity-65 hover:opacity-90"
              )}
            >
              {/* Ground Utility Pole & Power Conduits */}
              <line x1="26" y1="200" x2="26" y2="270" strokeWidth="1.2" />
              <line x1="18" y1="208" x2="34" y2="208" strokeWidth="1.2" />
              <line x1="20" y1="216" x2="32" y2="216" strokeWidth="1.2" />
              <path d="M 26 208 Q 60 215 90 220" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" fill="none" opacity="0.6" />
              <circle cx="26" cy="200" r="2" fill="#1DB954" className="anim-spire-1" />

              {/* Structure 1A: Industrial Brick Warehouse & Legacy Server Depot */}
              <rect x="42" y="215" width="62" height="55" />
              {/* Roof Pitched Skylight */}
              <polygon points="38,215 73,195 108,215" strokeWidth="1.25" fill="currentColor" fillOpacity="0.03" />
              <line x1="73" y1="195" x2="73" y2="215" strokeWidth="0.75" />
              <line x1="55" y1="205" x2="55" y2="215" strokeWidth="0.75" />
              <line x1="91" y1="205" x2="91" y2="215" strokeWidth="0.75" />
              {/* Corrugated Rolling Shutter Door */}
              <rect x="50" y="235" width="22" height="35" strokeWidth="1" fill="#1DB954" fillOpacity="0.08" />
              <line x1="50" y1="242" x2="72" y2="242" strokeWidth="0.5" />
              <line x1="50" y1="249" x2="72" y2="249" strokeWidth="0.5" />
              <line x1="50" y1="256" x2="72" y2="256" strokeWidth="0.5" />
              <line x1="50" y1="263" x2="72" y2="263" strokeWidth="0.5" />
              {/* Legacy Fluorescent Window Grid */}
              <rect x="78" y="225" width="20" height="14" strokeWidth="0.75" />
              <line x1="88" y1="225" x2="88" y2="239" strokeWidth="0.5" />
              <line x1="78" y1="232" x2="98" y2="232" strokeWidth="0.5" />
              <rect x="78" y="225" width="20" height="14" fill="#1DB954" fillOpacity="0.15" className="anim-win-1" />
              {/* Roof Vent & Pipes */}
              <rect x="88" y="185" width="8" height="10" strokeWidth="0.75" />
              <path d="M 88 185 Q 92 178 96 185" strokeWidth="0.75" />

              {/* Structure 1B: 2-Tier Modular Command Outpost & HVAC Rig */}
              <rect x="120" y="195" width="68" height="75" />
              <rect x="128" y="180" width="52" height="15" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
              {/* HVAC Heat Exchanger with Fan Blades */}
              <rect x="134" y="168" width="22" height="12" strokeWidth="0.75" />
              <circle cx="145" cy="174" r="4" strokeWidth="0.6" />
              <line x1="145" y1="170" x2="145" y2="178" strokeWidth="0.5" />
              <line x1="141" y1="174" x2="149" y2="174" strokeWidth="0.5" />
              {/* Satellite Receiver Dish */}
              <path d="M 168 178 A 8 8 0 0 1 178 168" strokeWidth="1.25" fill="none" />
              <line x1="173" y1="173" x2="179" y2="167" strokeWidth="0.75" />
              <circle cx="180" cy="166" r="1.5" fill="#1DB954" />
              {/* Outpost Windows & Structural Masonry Lines */}
              <rect x="128" y="205" width="14" height="16" strokeWidth="0.75" className="anim-win-2" />
              <rect x="148" y="205" width="14" height="16" strokeWidth="0.75" />
              <rect x="168" y="205" width="14" height="16" strokeWidth="0.75" className="anim-win-3" />
              <line x1="120" y1="230" x2="188" y2="230" strokeWidth="1" />
              <rect x="128" y="238" width="14" height="16" strokeWidth="0.75" className="anim-win-1" />
              <rect x="148" y="238" width="14" height="16" strokeWidth="0.75" />
              <rect x="168" y="238" width="14" height="32" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

              {/* Structure 1C: Cylindrical Relay Silo & Lattice Radio Tower */}
              <rect x="204" y="210" width="32" height="60" rx="3" strokeWidth="1.25" />
              <line x1="204" y1="225" x2="236" y2="225" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="204" y1="245" x2="236" y2="245" strokeWidth="0.5" strokeDasharray="2 2" />
              {/* Lattice Antenna Mast */}
              <line x1="248" y1="170" x2="248" y2="270" strokeWidth="1.25" />
              <line x1="242" y1="270" x2="248" y2="170" strokeWidth="0.75" />
              <line x1="254" y1="270" x2="248" y2="170" strokeWidth="0.75" />
              <line x1="244" y1="240" x2="252" y2="240" strokeWidth="0.75" />
              <line x1="245" y1="210" x2="251" y2="210" strokeWidth="0.75" />
              <line x1="246" y1="185" x2="250" y2="185" strokeWidth="0.75" />
              <circle cx="248" cy="168" r="2.5" fill="#1DB954" className="anim-spire-1" />

              {/* Stage Selection Active Box Indicator */}
              {activeStage === 'foundation' && (
                <rect x="35" y="160" width="225" height="113" stroke="#1DB954" strokeWidth="1" strokeDasharray="4 4" fill="#1DB954" fillOpacity="0.03" rx="4" />
              )}
            </g>


            {/* =====================================================================
                STAGE 02: STRUCTURED DIGITAL MODERNIZATION & EDGE FACILITY (x: 275 - 580)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('modernization')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeStage === 'modernization' ? "opacity-100" : "opacity-65 hover:opacity-90"
              )}
            >
              {/* Structure 2A: 4-Story Modular Glass Tech HQ with Solar Array */}
              <rect x="285" y="145" width="80" height="125" />
              {/* Rooftop Angled Solar Trackers */}
              <polygon points="290,145 315,130 330,145" fill="url(#solar-grid)" strokeWidth="0.75" />
              <polygon points="332,145 357,130 372,145" fill="url(#solar-grid)" strokeWidth="0.75" />
              {/* Continuous Glass Ribbon Facade Grids */}
              <rect x="293" y="155" width="64" height="20" strokeWidth="0.75" fill="currentColor" fillOpacity="0.03" />
              <line x1="309" y1="155" x2="309" y2="175" strokeWidth="0.5" />
              <line x1="325" y1="155" x2="325" y2="175" strokeWidth="0.5" />
              <line x1="341" y1="155" x2="341" y2="175" strokeWidth="0.5" />
              <rect x="293" y="155" width="32" height="20" fill="#1DB954" fillOpacity="0.15" className="anim-win-1" />

              <rect x="293" y="183" width="64" height="20" strokeWidth="0.75" fill="currentColor" fillOpacity="0.03" />
              <line x1="309" y1="183" x2="309" y2="203" strokeWidth="0.5" />
              <line x1="325" y1="183" x2="325" y2="203" strokeWidth="0.5" />
              <line x1="341" y1="183" x2="341" y2="203" strokeWidth="0.5" />
              <rect x="325" y="183" width="32" height="20" fill="#1DB954" fillOpacity="0.2" className="anim-win-2" />

              <rect x="293" y="211" width="64" height="20" strokeWidth="0.75" fill="currentColor" fillOpacity="0.03" />
              <line x1="309" y1="211" x2="309" y2="231" strokeWidth="0.5" />
              <line x1="325" y1="211" x2="325" y2="231" strokeWidth="0.5" />
              <line x1="341" y1="211" x2="341" y2="231" strokeWidth="0.5" />
              <rect x="293" y="211" width="16" height="20" fill="#1DB954" fillOpacity="0.18" className="anim-win-3" />

              {/* Edge Server Entrance Port */}
              <rect x="305" y="243" width="40" height="27" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <line x1="325" y1="243" x2="325" y2="270" strokeWidth="0.75" />

              {/* Structure 2B: Stepped Cyber Office Hub & Microwave Mast */}
              <rect x="382" y="125" width="88" height="145" />
              <rect x="394" y="105" width="64" height="20" strokeWidth="1" fill="#1DB954" fillOpacity="0.05" />
              {/* Microwave Dish & Radar Mast */}
              <line x1="426" y1="78" x2="426" y2="105" strokeWidth="1.5" />
              <circle cx="426" cy="78" r="3" fill="#1DB954" />
              <circle cx="426" cy="78" r="10" stroke="#1DB954" strokeWidth="0.75" className="anim-spire-1" fill="none" />
              <circle cx="426" cy="78" r="18" stroke="#1DB954" strokeWidth="0.5" className="anim-spire-2" fill="none" />
              {/* Structural Cross-Braced Windows */}
              <rect x="392" y="135" width="30" height="35" strokeWidth="0.75" />
              <line x1="392" y1="135" x2="422" y2="170" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="392" y1="170" x2="422" y2="135" strokeWidth="0.5" strokeOpacity="0.5" />
              <rect x="392" y="135" width="30" height="35" fill="#1DB954" fillOpacity="0.12" className="anim-win-2" />

              <rect x="430" y="135" width="30" height="35" strokeWidth="0.75" />
              <line x1="430" y1="135" x2="460" y2="170" strokeWidth="0.5" strokeOpacity="0.5" />
              <line x1="430" y1="170" x2="460" y2="135" strokeWidth="0.5" strokeOpacity="0.5" />

              <rect x="392" y="180" width="30" height="35" strokeWidth="0.75" />
              <rect x="430" y="180" width="30" height="35" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" className="anim-win-1" />

              <rect x="406" y="230" width="40" height="40" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />

              {/* Structure 2C: High-Velocity Fiber Distribution Tower & Conduit Rail */}
              <rect x="488" y="105" width="62" height="165" />
              {/* Vertical Animated Fiber Optic Conduits */}
              <line x1="504" y1="105" x2="504" y2="270" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="5 5" className="anim-data-flow" />
              <line x1="534" y1="105" x2="534" y2="270" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="5 5" className="anim-data-flow" />
              {/* Micro Server Blades Windows */}
              <rect x="510" y="115" width="18" height="12" strokeWidth="0.75" className="anim-win-3" />
              <rect x="510" y="135" width="18" height="12" strokeWidth="0.75" className="anim-win-1" />
              <rect x="510" y="155" width="18" height="12" strokeWidth="0.75" className="anim-win-2" />
              <rect x="510" y="175" width="18" height="12" strokeWidth="0.75" className="anim-win-1" />
              <rect x="510" y="195" width="18" height="12" strokeWidth="0.75" className="anim-win-3" />
              <rect x="502" y="235" width="34" height="35" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

              {/* Stage Selection Active Box Indicator */}
              {activeStage === 'modernization' && (
                <rect x="278" y="70" width="280" height="203" stroke="#1DB954" strokeWidth="1" strokeDasharray="4 4" fill="#1DB954" fillOpacity="0.03" rx="4" />
              )}
            </g>


            {/* =====================================================================
                STAGE 03: ENTERPRISE CYBER ARCOLOGY & AUTOMATED TRIAGE (x: 580 - 885)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('scale')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeStage === 'scale' ? "opacity-100" : "opacity-65 hover:opacity-90"
              )}
            >
              {/* Structure 3A: Twin Diagrid Exoskeleton Towers with Double Skybridge */}
              {/* Tower Left */}
              <rect x="585" y="65" width="60" height="205" />
              {/* Diagrid Cross-Lattice */}
              <line x1="585" y1="65" x2="645" y2="115" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="585" y1="115" x2="645" y2="65" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="585" y1="115" x2="645" y2="165" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="585" y1="165" x2="645" y2="115" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="585" y1="165" x2="645" y2="215" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="585" y1="215" x2="645" y2="165" strokeWidth="0.75" strokeOpacity="0.6" />
              {/* Internal Lit Floor Plates */}
              <rect x="593" y="75" width="44" height="12" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" strokeWidth="0.5" />
              <rect x="593" y="125" width="44" height="12" fill="#1DB954" fillOpacity="0.15" className="anim-win-2" strokeWidth="0.5" />
              <rect x="593" y="175" width="44" height="12" fill="#1DB954" fillOpacity="0.25" className="anim-win-3" strokeWidth="0.5" />

              {/* Tower Right */}
              <rect x="685" y="55" width="60" height="215" />
              <line x1="685" y1="55" x2="745" y2="105" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="685" y1="105" x2="745" y2="55" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="685" y1="105" x2="745" y2="155" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="685" y1="155" x2="745" y2="105" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="685" y1="155" x2="745" y2="205" strokeWidth="0.75" strokeOpacity="0.6" />
              <line x1="685" y1="205" x2="745" y2="155" strokeWidth="0.75" strokeOpacity="0.6" />
              <rect x="693" y="65" width="44" height="12" fill="#1DB954" fillOpacity="0.25" className="anim-win-2" strokeWidth="0.5" />
              <rect x="693" y="115" width="44" height="12" fill="#1DB954" fillOpacity="0.18" className="anim-win-1" strokeWidth="0.5" />
              <rect x="693" y="165" width="44" height="12" fill="#1DB954" fillOpacity="0.2" className="anim-win-3" strokeWidth="0.5" />

              {/* Interconnecting Double-Decker Glass Skybridge */}
              <rect x="645" y="95" width="40" height="24" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />
              <line x1="645" y1="107" x2="685" y2="107" strokeWidth="0.75" />
              <line x1="655" y1="95" x2="655" y2="119" strokeWidth="0.5" />
              <line x1="665" y1="95" x2="665" y2="119" strokeWidth="0.5" />
              <line x1="675" y1="95" x2="675" y2="119" strokeWidth="0.5" />
              {/* Skybridge Suspension Tension Cables */}
              <line x1="645" y1="65" x2="665" y2="95" stroke="#1DB954" strokeWidth="0.75" />
              <line x1="685" y1="55" x2="665" y2="95" stroke="#1DB954" strokeWidth="0.75" />

              {/* External Animated Express Elevator Pod */}
              <line x1="680" y1="55" x2="680" y2="270" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <g transform="translate(675, 235)" className="anim-elevator-1">
                <rect x="0" y="0" width="10" height="16" rx="2" fill="#1DB954" fillOpacity="0.85" stroke="#1DB954" strokeWidth="1" />
                <line x1="2" y1="4" x2="8" y2="4" stroke="#000" strokeWidth="0.75" />
                <line x1="2" y1="8" x2="8" y2="8" stroke="#000" strokeWidth="0.75" />
              </g>

              {/* Structure 3B: High-Volume Autonomous Ops Monolith & Holographic HUD */}
              <rect x="765" y="45" width="95" height="225" />
              {/* Stepped Architectural Crown */}
              <rect x="780" y="28" width="65" height="17" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
              {/* Heavy Duty Gantry Crane / Drone Pad on Roof */}
              <line x1="812" y1="12" x2="812" y2="28" strokeWidth="1.5" />
              <line x1="795" y1="12" x2="835" y2="12" strokeWidth="1.5" />
              <line x1="795" y1="12" x2="812" y2="28" strokeWidth="0.75" />
              <circle cx="835" cy="12" r="2" fill="#1DB954" className="anim-spire-1" />

              {/* Holographic Telemetry Billboard Banner */}
              <rect x="778" y="55" width="69" height="28" rx="2" fill="#1DB954" fillOpacity="0.15" stroke="#1DB954" strokeWidth="1" />
              <text x="784" y="67" fontSize="6.5" fontFamily="monospace" fill="#1DB954" fontWeight="bold" stroke="none">AUTO_TRIAGE // 99.9%</text>
              <text x="784" y="77" fontSize="5.5" fontFamily="monospace" fill="currentColor" opacity="0.8" stroke="none">LATENCY: &lt;60s PING</text>
              <line x1="778" y1="71" x2="847" y2="71" stroke="#1DB954" strokeWidth="0.5" strokeDasharray="2 2" />

              {/* Dense Server Bank Micro-Grid */}
              <g strokeWidth="0.5">
                {[...Array(6)].map((_, r) => (
                  <g key={`s3-grid-${r}`}>
                    <rect x="775" y={95 + r * 22} width="18" height="15" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                    <rect x="797" y={95 + r * 22} width="18" height="15" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                    <rect x="819" y={95 + r * 22} width="18" height="15" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                    <rect x="841" y={95 + r * 22} width="12" height="15" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Stage Selection Active Box Indicator */}
              {activeStage === 'scale' && (
                <rect x="575" y="10" width="295" height="263" stroke="#1DB954" strokeWidth="1" strokeDasharray="4 4" fill="#1DB954" fillOpacity="0.03" rx="4" />
              )}
            </g>


            {/* =====================================================================
                STAGE 04: THE PINNACLE CYBERCITY ZENITH MEGATOWERS (x: 885 - 1380)
               ===================================================================== */}
            <g
              onClick={() => setActiveStage('pinnacle')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeStage === 'pinnacle' ? "opacity-100" : "opacity-65 hover:opacity-90"
              )}
            >
              {/* Structure 4A: Cascading Multi-Tier High-Rise Tower (Height: 240px) */}
              <rect x="895" y="30" width="85" height="240" />
              <rect x="910" y="15" width="55" height="15" strokeWidth="1" fill="#1DB954" fillOpacity="0.08" />
              {/* Rooftop Drone Launchpad / Sky-Harbor Deck */}
              <line x1="885" y1="30" x2="985" y2="30" strokeWidth="1.5" />
              <circle cx="937" cy="15" r="5" stroke="#1DB954" strokeWidth="0.75" fill="none" />
              <text x="935" y="17" fontSize="5" fontFamily="monospace" fill="#1DB954" stroke="none">H</text>
              <circle cx="890" cy="30" r="1.5" fill="#1DB954" className="anim-spire-1" />
              <circle cx="980" cy="30" r="1.5" fill="#1DB954" className="anim-spire-1" />

              {/* High-Altitude Express Elevator Track & Glowing Moving Car */}
              <line x1="970" y1="30" x2="970" y2="270" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              <g transform="translate(965, 220)" className="anim-elevator-2">
                <rect x="0" y="0" width="10" height="20" rx="2" fill="#1DB954" fillOpacity="0.9" stroke="#1DB954" strokeWidth="1" />
                <circle cx="5" cy="5" r="1.5" fill="#000" />
                <line x1="2" y1="10" x2="8" y2="10" stroke="#000" strokeWidth="0.75" />
                <line x1="2" y1="15" x2="8" y2="15" stroke="#000" strokeWidth="0.75" />
              </g>

              {/* Curtain Wall Glazing Grid */}
              <g strokeWidth="0.5">
                {[...Array(9)].map((_, r) => (
                  <g key={`s4-cw-${r}`}>
                    <rect x="905" y={45 + r * 23} width="16" height="16" className={r % 2 === 0 ? "anim-win-1" : "anim-win-3"} />
                    <rect x="925" y={45 + r * 23} width="16" height="16" className={r % 3 === 0 ? "anim-win-2" : "anim-win-1"} />
                    <rect x="945" y={45 + r * 23} width="16" height="16" className={r % 2 === 1 ? "anim-win-3" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Structure 4B: The Monolithic Cyber Apex Pinnacle Spire (Height: 265px! Zenith Peak) */}
              <polygon points="1005,45 1060,10 1115,45" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.15" />
              <rect x="1005" y="45" width="110" height="225" />

              {/* Vertical Zenith Ion Laser Shooting Up to Space */}
              <g className="anim-beam">
                <line x1="1060" y1="0" x2="1060" y2="10" stroke="#1DB954" strokeWidth="3" />
                <line x1="1060" y1="0" x2="1060" y2="10" stroke="#FFFFFF" strokeWidth="1" />
                <line x1="1054" y1="0" x2="1066" y2="0" stroke="#1DB954" strokeWidth="1.5" />
              </g>

              {/* Apex Spire Radiant Energy Wave Rings */}
              <circle cx="1060" cy="10" r="4" fill="#1DB954" />
              <circle cx="1060" cy="10" r="12" stroke="#1DB954" strokeWidth="1" className="anim-spire-1" fill="none" />
              <circle cx="1060" cy="10" r="22" stroke="#1DB954" strokeWidth="0.75" className="anim-spire-2" fill="none" />
              <circle cx="1060" cy="10" r="34" stroke="#1DB954" strokeWidth="0.5" className="anim-spire-slow" fill="none" />

              {/* Cantilevered Wing Sky-Decks */}
              <polygon points="985,90 1005,90 1005,105 985,95" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.2" />
              <polygon points="1115,90 1135,90 1135,95 1115,105" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.2" />
              <circle cx="985" cy="90" r="1.5" fill="#1DB954" className="anim-spire-1" />
              <circle cx="1135" cy="90" r="1.5" fill="#1DB954" className="anim-spire-1" />

              {/* Multi-Section High-Tech Cyber Facade with Illuminated Core */}
              <line x1="1060" y1="45" x2="1060" y2="270" stroke="#1DB954" strokeWidth="2" strokeDasharray="6 6" className="anim-data-flow" />
              
              {/* Diagrid Cyber Shell Pattern */}
              <g strokeWidth="0.75" strokeOpacity="0.7">
                <line x1="1005" y1="45" x2="1115" y2="105" />
                <line x1="1005" y1="105" x2="1115" y2="45" />
                <line x1="1005" y1="105" x2="1115" y2="165" />
                <line x1="1005" y1="165" x2="1115" y2="105" />
                <line x1="1005" y1="165" x2="1115" y2="225" />
                <line x1="1005" y1="225" x2="1115" y2="165" />
              </g>

              {/* Glowing Server Matrix Windows */}
              <g strokeWidth="0.5">
                {[...Array(8)].map((_, r) => (
                  <g key={`s4-apex-${r}`}>
                    <rect x="1015" y={55 + r * 25} width="16" height="16" rx="2" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                    <rect x="1037" y={55 + r * 25} width="16" height="16" rx="2" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                    <rect x="1067" y={55 + r * 25} width="16" height="16" rx="2" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                    <rect x="1089" y={55 + r * 25} width="16" height="16" rx="2" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Structure 4C: Zenith Cloud Engine Twin Arcology (Height: 250px) */}
              <rect x="1145" y="25" width="105" height="245" />
              {/* Stepped Spire & Communications Crown */}
              <polygon points="1140,25 1197,8 1255,25" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.2" />
              <line x1="1197" y1="0" x2="1197" y2="8" strokeWidth="2" stroke="#1DB954" />
              <circle cx="1197" cy="0" r="3" fill="#1DB954" />
              <circle cx="1197" cy="0" r="10" stroke="#1DB954" strokeWidth="0.75" className="anim-spire-1" fill="none" />

              {/* Vertical High-Speed Fiber Conduit Columns */}
              <line x1="1165" y1="25" x2="1165" y2="270" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="4 4" className="anim-data-flow" />
              <line x1="1230" y1="25" x2="1230" y2="270" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="4 4" className="anim-data-flow" />

              {/* Twin Cylinder Windows */}
              <g strokeWidth="0.5">
                {[...Array(9)].map((_, r) => (
                  <g key={`s4-c-grid-${r}`}>
                    <rect x="1173" y={40 + r * 24} width="22" height="16" rx="1" className={r % 2 === 0 ? "anim-win-2" : "anim-win-1"} />
                    <rect x="1201" y={40 + r * 24} width="22" height="16" rx="1" className={r % 3 === 0 ? "anim-win-1" : "anim-win-3"} />
                  </g>
                ))}
              </g>

              {/* Grand Citadel Entrance Atrium */}
              <rect x="1170" y="235" width="55" height="35" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.15" />
              <line x1="1197" y1="235" x2="1197" y2="270" strokeWidth="1" />

              {/* Structure 4D: Perimeter Defensive Node Tower (x: 1275 - 1375) */}
              <rect x="1275" y="45" width="85" height="225" />
              <polygon points="1270,45 1317,20 1365,45" strokeWidth="1.25" fill="currentColor" fillOpacity="0.05" />
              <line x1="1317" y1="10" x2="1317" y2="20" strokeWidth="1.5" stroke="#1DB954" />
              <circle cx="1317" cy="10" r="2.5" fill="#1DB954" className="anim-spire-1" />

              <g strokeWidth="0.5">
                {[...Array(8)].map((_, r) => (
                  <g key={`s4-d-grid-${r}`}>
                    <rect x="1287" y={60 + r * 24} width="18" height="16" className={r % 2 === 1 ? "anim-win-1" : "anim-win-2"} />
                    <rect x="1312" y={60 + r * 24} width="18" height="16" className={r % 3 === 1 ? "anim-win-3" : "anim-win-1"} />
                    <rect x="1337" y={60 + r * 24} width="14" height="16" className={r % 2 === 0 ? "anim-win-2" : "anim-win-3"} />
                  </g>
                ))}
              </g>

              {/* Stage Selection Active Box Indicator */}
              {activeStage === 'pinnacle' && (
                <rect x="880" y="0" width="500" height="273" stroke="#1DB954" strokeWidth="1" strokeDasharray="4 4" fill="#1DB954" fillOpacity="0.03" rx="4" />
              )}
            </g>
          </g>

          {/* =========================================================================
              LAYER 4: HIGH-TECH CYBER TRAVELER TRAVERSING THE ELEVATION DATUM
             ========================================================================= */}
          <g className="anim-walker-track" transform="translate(0, 270)">
            <g>
              {/* Cyber Helmet & HUD Visor */}
              <circle cx="0" cy="-24" r="3.5" fill="#1DB954" />
              <path d="M -4 -25 L 4 -25 L 5 -23 L -4 -23 Z" fill="currentColor" />
              <line x1="-2" y1="-24" x2="4" y2="-24" stroke="#000" strokeWidth="0.75" />
              {/* Tactical Rig & Cyber Backpack with Scanner Beam */}
              <rect x="-4" y="-20" width="8" height="11" rx="2" fill="currentColor" />
              <rect x="-7" y="-19" width="4" height="8" rx="1.5" fill="#1DB954" fillOpacity="0.85" />
              <line x1="0" y1="-18" x2="4" y2="-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            {/* Animated Striding Legs */}
            <g transform="translate(0, -9)">
              <line x1="0" y1="0" x2="-3.5" y2="9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="anim-walker-leg-l" />
              <line x1="0" y1="0" x2="3.5" y2="9" stroke="#1DB954" strokeWidth="1.75" strokeLinecap="round" className="anim-walker-leg-r" />
            </g>
          </g>

          {/* =========================================================================
              LAYER 5: GROUND FOUNDATION DATUM BEAM & STAGE ANCHOR NODES
             ========================================================================= */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90">
            {/* Primary Ground Axis Line */}
            <line x1="0" y1="270" x2="1400" y2="270" strokeWidth="2" />
            <line x1="0" y1="274" x2="1400" y2="274" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />

            {/* Glowing Neon Ground Nodes */}
            <circle cx="73" cy="270" r="3.5" fill="#1DB954" />
            <circle cx="426" cy="270" r="3.5" fill="#1DB954" />
            <circle cx="720" cy="270" r="4" fill="#1DB954" />
            <circle cx="1060" cy="270" r="5" fill="#1DB954" />
            <circle cx="1197" cy="270" r="5" fill="#1DB954" />
          </g>

          {/* =========================================================================
              LAYER 6: HUD ELEVATION LABELS & ARCHITECTURAL SPECS
             ========================================================================= */}
          <g fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.6" stroke="none">
            <text x="45" y="294">01 // BASELINE FOUNDATION [EL +0.0m]</text>
            <text x="360" y="294">02 // CLOUD MODERNIZATION [EL +140.0m]</text>
            <text x="660" y="294">03 // COMMERCIAL ARCOLOGY [EL +480.0m]</text>
            <text x="1050" y="294">04 // ZENITH CYBERCITY APEX [EL +1050.0m]</text>
          </g>
          <g fontSize="7.5" fontFamily="monospace" fill="#1DB954" opacity="0.8" stroke="none">
            <text x="45" y="308">STATUS: LEGACY / MANUAL</text>
            <text x="360" y="308">STATUS: EDGE SSR 0.4s</text>
            <text x="660" y="308">STATUS: AUTO-FLOW SYNC</text>
            <text x="1050" y="308">STATUS: 100% ASSET ENGINE</text>
          </g>
        </svg>
      </div>

      {/* Cyber Narrative Diagnostic Callout Console */}
      <div className="p-4 sm:p-5 rounded-xl border border-accent/30 bg-surface/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-dark dark:text-accent font-semibold mb-1">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{`■ ARCHITECTURE STAGE ${activeData.stageNum} //`}</span>
            <span className="uppercase tracking-wider text-text-primary">{activeData.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-1">
            {activeData.description}
          </p>

          {/* Realtime Metrics Strip */}
          <div className="flex flex-wrap items-center gap-4 mt-3 pt-3 border-t border-border-subtle/60">
            {activeData.metrics.map((m) => (
              <div key={m.label} className="flex items-center gap-1.5 text-xs font-mono">
                <span className="text-text-tertiary uppercase">{m.label}:</span>
                <span className="font-bold text-text-primary text-accent-dark dark:text-accent">{m.value}</span>
              </div>
            ))}
          </div>
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
