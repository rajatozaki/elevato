'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ElevationSector {
  id: string;
  stageNum: string;
  elevation: string;
  codename: string;
  title: string;
  category: string;
  status: string;
  description: string;
  metrics: { label: string; value: string; detail: string }[];
  techStack: string[];
  infrastructure: string[];
}

const sectors: ElevationSector[] = [
  {
    id: 'foundation',
    stageNum: '01',
    elevation: 'EL +0.0m',
    codename: 'GROUND_ZERO_RUNTIME',
    title: 'Legacy Baseline & Ground Operations',
    category: 'Traditional Stack',
    status: 'SYSTEM: LEGACY // MANUAL_DISPATCH',
    description: 'Solid offline craftsmanship hindered by legacy server overhead, manual spreadsheets, disconnected email inboxes, and dropped customer inquiries.',
    metrics: [
      { label: 'Page Load Speed', value: '4.6s', detail: 'Bloated WordPress/Wix' },
      { label: 'Lead Response', value: '4–12 hrs', detail: 'Manual inbox triage' },
      { label: 'Infrastructure', value: 'Single VPS', detail: 'No edge redundancy' },
    ],
    techStack: ['PHP / MySQL', 'Manual CSVs', 'Email Inboxes', 'Shared Hosting'],
    infrastructure: ['Corrugated Server Depot', 'Lattice Comms Mast', 'HVAC Chiller Fan Unit', 'Substation Transformer'],
  },
  {
    id: 'modernization',
    stageNum: '02',
    elevation: 'EL +180.0m',
    codename: 'EDGE_SSR_FACILITY',
    title: 'Next.js Cloud Architecture & Edge Facility',
    category: 'Engineered Web',
    status: 'SYSTEM: OPTIMIZED // NEXT.JS_SSR',
    description: 'Bespoke Next.js App Router engineering with global Vercel edge deployment, sub-second TTFB, 100% Core Web Vitals, and mobile-first conversion UI.',
    metrics: [
      { label: 'Page Load Speed', value: '0.4s', detail: 'Instant edge hydration' },
      { label: 'Lighthouse Score', value: '100 / 100', detail: 'Perfect SEO & Perf' },
      { label: 'Edge Network', value: '300+ Cities', detail: 'Sub-50ms latency' },
    ],
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel Edge'],
    infrastructure: ['Modular Glass Tech HQ', 'Photovoltaic Solar Trackers', 'Pulsing Fiber Trunk', 'Rotating Weather Radar'],
  },
  {
    id: 'scale',
    stageNum: '03',
    elevation: 'EL +540.0m',
    codename: 'COMMERCIAL_ARCOLOGY',
    title: 'Enterprise Cyber Arcology & Automated Triage',
    category: 'Autonomous Ops',
    status: 'SYSTEM: REALTIME // EVENT_DRIVEN',
    description: 'High-throughput serverless webhook pipelines qualifying incoming prospects, updating CRM databases, and triggering real-time WhatsApp/Telegram alerts.',
    metrics: [
      { label: 'Alert Dispatch', value: '< 45 Sec', detail: 'Instant push pings' },
      { label: 'Database Sync', value: 'Realtime', detail: 'Zero manual copy' },
      { label: 'Admin Time Saved', value: '14+ hrs/wk', detail: 'Eliminated data entry' },
    ],
    techStack: ['Supabase PG', 'Serverless Webhooks', 'Telegram API', 'n8n / Make', 'Automated CRM'],
    infrastructure: ['Twin Diagrid Towers', 'Suspension Skybridge', 'Express Glass Elevators', 'Holo HUD Telemetry'],
  },
  {
    id: 'pinnacle',
    stageNum: '04',
    elevation: 'EL +1180.0m',
    codename: 'ZENITH_APEX_CITADEL',
    title: 'Zenith Megatower & Autonomous Asset Engine',
    category: 'Sovereign Asset',
    status: 'SYSTEM: ZENITH // PROPRIETARY_IP',
    description: 'A sovereign digital acquisition fortress. 100% repository code ownership transferred to your GitHub, direct founder access, and zero recurring agency lock-in.',
    metrics: [
      { label: 'Code Ownership', value: '100% GitHub', detail: 'Full proprietary IP' },
      { label: 'Agency Lock-in', value: '0.0%', detail: 'Zero ongoing dependency' },
      { label: 'Founder Direct SLA', value: 'Yash & Rajat', detail: 'Direct senior builders' },
    ],
    techStack: ['Proprietary IP', 'CI/CD Pipelines', 'Cloudflare Security', 'Founder Governance'],
    infrastructure: ['Titan Needle Spire', 'Orbital Ion Laser', 'Drone Sky-Harbor [H]', 'Dual Engine Arcology'],
  },
];

export function ArchitecturalSkyline({ className }: { className?: string }) {
  const [activeSectorId, setActiveSectorId] = useState<string>('pinnacle');
  const [showFlightLanes, setShowFlightLanes] = useState<boolean>(true);
  const [showDataConduits, setShowDataConduits] = useState<boolean>(true);
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[3];

  return (
    <div className={cn("w-full select-none relative flex flex-col gap-3", className)}>
      {/* Top Cyber Telemetry & Control Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-surface/95 border border-border-subtle backdrop-blur-xl shadow-sm">
        {/* Sector Navigation Selector */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {sectors.map((sector) => {
            const isSelected = sector.id === activeSectorId;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 relative",
                  isSelected
                    ? "bg-surface text-text-primary border border-accent/60 shadow-xs font-bold text-accent-dark dark:text-accent ring-2 ring-accent/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/60"
                )}
              >
                <span className={cn("w-2 h-2 rounded-full", isSelected ? "bg-accent animate-pulse" : "bg-text-tertiary/40")} />
                <span className="font-semibold">{sector.stageNum}</span>
                <span className="hidden md:inline font-medium">{sector.codename.replace('_', ' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Cyber Layer Filters & Animation Controls */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={() => setShowFlightLanes(!showFlightLanes)}
            className={cn(
              "px-2.5 py-1 rounded-lg border text-[11px] transition-colors hidden sm:flex items-center gap-1",
              showFlightLanes
                ? "bg-accent/10 border-accent/40 text-accent-dark dark:text-accent font-semibold"
                : "border-border-subtle text-text-tertiary hover:text-text-secondary"
            )}
            title="Toggle Air Transit Flight Lanes"
          >
            <span>✈</span>
            <span>AIR LANES</span>
          </button>

          <button
            onClick={() => setShowDataConduits(!showDataConduits)}
            className={cn(
              "px-2.5 py-1 rounded-lg border text-[11px] transition-colors hidden sm:flex items-center gap-1",
              showDataConduits
                ? "bg-accent/10 border-accent/40 text-accent-dark dark:text-accent font-semibold"
                : "border-border-subtle text-text-tertiary hover:text-text-secondary"
            )}
            title="Toggle Fiber Data Conduits"
          >
            <span>⚡</span>
            <span>DATA FLOW</span>
          </button>

          <button
            onClick={() => setIsAnimationActive(!isAnimationActive)}
            className={cn(
              "px-2.5 py-1 rounded-lg border text-[11px] transition-colors flex items-center gap-1.5 font-bold",
              isAnimationActive
                ? "bg-accent text-dark border-accent"
                : "border-border-subtle text-text-tertiary"
            )}
            title="Play / Pause Scene Animations"
          >
            <span className={cn("w-1.5 h-1.5 rounded-full", isAnimationActive ? "bg-dark animate-ping" : "bg-text-tertiary")} />
            <span>{isAnimationActive ? "LIVE" : "PAUSED"}</span>
          </button>

          {/* Current Altitude Datum Pill */}
          <div className="flex items-center gap-1.5 bg-surface-elevated px-2.5 py-1 rounded-lg border border-border-subtle">
            <span className="text-text-tertiary">ALT:</span>
            <span className="font-bold text-accent-dark dark:text-accent font-mono">
              {activeSector.elevation}
            </span>
          </div>
        </div>
      </div>

      {/* Cybercity Architectural Vector Canvas */}
      <div className="relative w-full rounded-2xl border border-border-subtle bg-surface/80 p-2 sm:p-4 overflow-hidden shadow-inner group">
        {/* Fine Architectural CAD Matrix Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1DB954_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.035] dark:opacity-[0.07] pointer-events-none" />

        <svg
          viewBox="0 0 1440 360"
          className="w-full h-auto text-text-primary relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Real Neon Bloom Glow Filters */}
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="laser-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="laserBlur" />
              <feMerge>
                <feMergeNode in="laserBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <style>{`
              ${isAnimationActive ? `
                /* Trajectory Laser Stream */
                @keyframes laserDash { 0% { stroke-dashoffset: 80; } 100% { stroke-dashoffset: 0; } }
                /* Spire Concentric Radiant Wave */
                @keyframes beaconPulse { 0% { r: 3px; opacity: 1; stroke-width: 2.5px; } 100% { r: 36px; opacity: 0; stroke-width: 0.5px; } }
                @keyframes beaconPulseDelayed { 0% { r: 3px; opacity: 1; stroke-width: 2px; } 100% { r: 28px; opacity: 0; stroke-width: 0.25px; } }
                /* Double Express Glass Elevator Movement */
                @keyframes liftCar1 {
                  0%, 15% { transform: translateY(0px); }
                  45%, 58% { transform: translateY(-160px); }
                  85%, 100% { transform: translateY(0px); }
                }
                @keyframes liftCar2 {
                  0%, 10% { transform: translateY(0px); }
                  50%, 65% { transform: translateY(-210px); }
                  90%, 100% { transform: translateY(0px); }
                }
                /* Transit Sky-Drones Flight Paths */
                @keyframes skyLaneWest {
                  0% { transform: translate(1460px, 60px); opacity: 0; }
                  4% { opacity: 1; }
                  96% { opacity: 1; }
                  100% { transform: translate(-60px, 40px); opacity: 0; }
                }
                @keyframes skyLaneEast {
                  0% { transform: translate(-50px, 110px); opacity: 0; }
                  4% { opacity: 1; }
                  96% { opacity: 1; }
                  100% { transform: translate(1480px, 85px); opacity: 0; }
                }
                @keyframes skyLaneHigh {
                  0% { transform: translate(1460px, 20px); opacity: 0; }
                  5% { opacity: 0.8; }
                  95% { opacity: 0.8; }
                  100% { transform: translate(-40px, 25px); opacity: 0; }
                }
                /* Radar Dish Continuous Spin */
                @keyframes dishRotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                /* HVAC Cooling Fan Blade Rotation */
                @keyframes fanSpin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                /* Optical Fiber Data Conduit Pulses */
                @keyframes fiberDataStream {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                /* Living Window & Server Blade Flickers */
                @keyframes serverGlow1 { 0%, 100% { opacity: 0.2; fill: #1DB954; } 40% { opacity: 0.95; fill: #1DB954; } 80% { opacity: 0.4; fill: #1DB954; } }
                @keyframes serverGlow2 { 0%, 100% { opacity: 0.85; fill: #1DB954; } 50% { opacity: 0.15; fill: #1DB954; } }
                @keyframes serverGlow3 { 0%, 100% { opacity: 0.1; fill: #1DB954; } 60% { opacity: 0.9; fill: #1DB954; } }
                /* Zenith Ion Laser Column Energy Pulse */
                @keyframes ionBeamEnergy {
                  0%, 100% { opacity: 0.4; transform: scaleX(0.85); }
                  50% { opacity: 1; transform: scaleX(1.2); }
                }
                /* Cyberwalker Ground Traversal */
                @keyframes walkerTrack {
                  0% { transform: translateX(15px); }
                  100% { transform: translateX(1400px); }
                }
                @keyframes walkerLimbL { 0%, 100% { transform: rotate(-26deg); } 50% { transform: rotate(26deg); } }
                @keyframes walkerLimbR { 0%, 100% { transform: rotate(26deg); } 50% { transform: rotate(-26deg); } }
                /* Twinkling Starlight Nodes */
                @keyframes starTwinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }
              ` : `
                /* Animations paused */
              `}

              .anim-laser { animation: laserDash 1.6s linear infinite; }
              .anim-beacon-1 { animation: beaconPulse 2.2s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
              .anim-beacon-2 { animation: beaconPulse 2.2s cubic-bezier(0, 0, 0.2, 1) infinite 1.1s; transform-origin: center; }
              .anim-beacon-delayed { animation: beaconPulseDelayed 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s; transform-origin: center; }
              .anim-lift-1 { animation: liftCar1 11s ease-in-out infinite; }
              .anim-lift-2 { animation: liftCar2 15s ease-in-out infinite 2s; }
              .anim-drone-w { animation: skyLaneWest 24s linear infinite; }
              .anim-drone-e { animation: skyLaneEast 30s linear infinite 4s; }
              .anim-drone-h { animation: skyLaneHigh 18s linear infinite 8s; }
              .anim-radar { animation: dishRotate 4s linear infinite; transform-origin: center; }
              .anim-fan { animation: fanSpin 1.2s linear infinite; transform-origin: center; }
              .anim-fiber { animation: fiberDataStream 2.2s linear infinite; }
              .anim-win-1 { animation: serverGlow1 3.8s ease-in-out infinite; }
              .anim-win-2 { animation: serverGlow2 4.6s ease-in-out infinite 0.8s; }
              .anim-win-3 { animation: serverGlow3 3.2s ease-in-out infinite 1.6s; }
              .anim-ion-beam { animation: ionBeamEnergy 2.4s ease-in-out infinite; transform-origin: center bottom; }
              .anim-walker { animation: walkerTrack 36s linear infinite; }
              .anim-walker-l { animation: walkerLimbL 0.5s ease-in-out infinite; transform-origin: 0 0; }
              .anim-walker-r { animation: walkerLimbR 0.5s ease-in-out infinite; transform-origin: 0 0; }
              .anim-star { animation: starTwinkle 3s ease-in-out infinite; }
            `}</style>

            {/* High-Fidelity Depth Gradients */}
            <linearGradient id="bg-silhouette-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
              <stop offset="65%" stopColor="currentColor" stopOpacity="0.08" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
            </linearGradient>

            <linearGradient id="trajectory-beam-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1DB954" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#1DB954" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#1DB954" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1DB954" stopOpacity="1" />
            </linearGradient>

            <pattern id="solar-pv-mesh" width="8" height="6" patternUnits="userSpaceOnUse">
              <rect width="7" height="5" stroke="#1DB954" strokeWidth="0.6" strokeOpacity="0.5" fill="#1DB954" fillOpacity="0.12" />
            </pattern>
          </defs>

          {/* =========================================================================
              LAYER 0: NIGHT STARFIELD & CALIBRATED ELEVATION AXIS GRID
             ========================================================================= */}
          {/* Twinkling Starlight Array */}
          <g fill="#1DB954" opacity="0.6">
            <circle cx="85" cy="45" r="1" className="anim-star" />
            <circle cx="210" cy="25" r="1.2" className="anim-star" style={{ animationDelay: '0.7s' }} />
            <circle cx="360" cy="50" r="0.8" className="anim-star" style={{ animationDelay: '1.4s' }} />
            <circle cx="510" cy="30" r="1.5" className="anim-star" style={{ animationDelay: '2.1s' }} />
            <circle cx="680" cy="40" r="1" className="anim-star" style={{ animationDelay: '0.3s' }} />
            <circle cx="890" cy="20" r="1.3" className="anim-star" style={{ animationDelay: '1.8s' }} />
            <circle cx="1040" cy="45" r="0.9" className="anim-star" style={{ animationDelay: '0.9s' }} />
            <circle cx="1280" cy="18" r="1.4" className="anim-star" style={{ animationDelay: '2.5s' }} />
            <circle cx="1390" cy="55" r="1" className="anim-star" style={{ animationDelay: '1.2s' }} />
          </g>

          {/* Engineering CAD Axis Lines */}
          <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.6">
            <line x1="20" y1="40" x2="1420" y2="40" strokeDasharray="4 10" strokeOpacity="0.4" />
            <line x1="20" y1="120" x2="1420" y2="120" strokeDasharray="4 10" strokeOpacity="0.3" />
            <line x1="20" y1="200" x2="1420" y2="200" strokeDasharray="4 10" strokeOpacity="0.3" />
            <line x1="20" y1="270" x2="1420" y2="270" strokeDasharray="4 10" strokeOpacity="0.3" />

            {/* Registration Crosshairs */}
            <path d="M 170 35 L 170 45 M 165 40 L 175 40" />
            <path d="M 500 35 L 500 45 M 495 40 L 505 40" />
            <path d="M 860 35 L 860 45 M 855 40 L 865 40" />
            <path d="M 1240 35 L 1240 45 M 1235 40 L 1245 40" />

            {/* Elevation Height Labels */}
            <text x="25" y="274" fontSize="7.5" fontFamily="monospace" fill="currentColor" opacity="0.65">EL +000m [DATUM]</text>
            <text x="25" y="204" fontSize="7.5" fontFamily="monospace" fill="currentColor" opacity="0.65">EL +180m [MODERN]</text>
            <text x="25" y="124" fontSize="7.5" fontFamily="monospace" fill="currentColor" opacity="0.65">EL +540m [SCALE]</text>
            <text x="25" y="44" fontSize="7.5" fontFamily="monospace" fill="#1DB954" fontWeight="bold">EL +1180m [ZENITH PEAK]</text>
          </g>

          {/* =========================================================================
              LAYER 1: DISTANT SILHOUETTE MEGATOWERS (ATMOSPHERIC BACKGROUND DEPTH)
             ========================================================================= */}
          <g className="opacity-35 dark:opacity-40" stroke="currentColor" strokeWidth="0.75">
            {/* Sector 1 Backing Outpost */}
            <rect x="55" y="225" width="55" height="75" fill="url(#bg-silhouette-grad)" />
            <polygon points="130,220 160,195 190,220" fill="url(#bg-silhouette-grad)" />
            <rect x="135" y="220" width="50" height="80" fill="url(#bg-silhouette-grad)" />
            <line x1="160" y1="180" x2="160" y2="195" strokeWidth="1" />
            <circle cx="160" cy="180" r="1.5" fill="#1DB954" />

            {/* Sector 2 Backing Cloud Hubs */}
            <rect x="310" y="175" width="65" height="125" fill="url(#bg-silhouette-grad)" />
            <polygon points="390,165 430,135 470,165" fill="url(#bg-silhouette-grad)" />
            <rect x="395" y="165" width="70" height="135" fill="url(#bg-silhouette-grad)" />
            <rect x="500" y="145" width="75" height="155" fill="url(#bg-silhouette-grad)" />

            {/* Sector 3 Backing Arcology Spires */}
            <rect x="620" y="105" width="85" height="195" fill="url(#bg-silhouette-grad)" />
            <polygon points="730,95 775,55 820,95" fill="url(#bg-silhouette-grad)" />
            <rect x="735" y="95" width="80" height="205" fill="url(#bg-silhouette-grad)" />
            <line x1="775" y1="35" x2="775" y2="55" strokeWidth="1.2" stroke="#1DB954" />
            <circle cx="775" cy="35" r="2" fill="#1DB954" opacity="0.8" />
            <rect x="850" y="80" width="90" height="220" fill="url(#bg-silhouette-grad)" />

            {/* Sector 4 Backing Zenith Cyber Megastructures */}
            <polygon points="980,60 1025,25 1070,60" fill="url(#bg-silhouette-grad)" />
            <rect x="985" y="60" width="80" height="240" fill="url(#bg-silhouette-grad)" />
            <rect x="1100" y="30" width="115" height="270" fill="url(#bg-silhouette-grad)" />
            <line x1="1155" y1="8" x2="1155" y2="30" strokeWidth="1.5" stroke="#1DB954" />
            <circle cx="1155" cy="8" r="2.5" fill="#1DB954" />
            
            <rect x="1245" y="45" width="105" height="255" fill="url(#bg-silhouette-grad)" />
            <polygon points="1245,45 1300,20 1355,45" fill="url(#bg-silhouette-grad)" />
            <rect x="1365" y="70" width="60" height="230" fill="url(#bg-silhouette-grad)" />
          </g>

          {/* =========================================================================
              LAYER 2: TRAJECTORY BEAM & TRANSIT SKY-DRONES
             ========================================================================= */}
          {/* Main Business Elevation Trajectory Laser */}
          <g>
            <path
              d="M 25 290 C 280 280, 620 200, 1185 24"
              stroke="url(#trajectory-beam-grad)"
              strokeWidth="2.25"
              strokeDasharray="7 7"
              className="anim-laser"
              filter="url(#neon-glow)"
            />
            <path
              d="M 25 290 C 280 280, 620 200, 1185 24"
              stroke="#1DB954"
              strokeWidth="0.5"
              strokeOpacity="0.5"
            />
          </g>

          {/* Animated Sky-Drones (Air Lanes) */}
          {showFlightLanes && (
            <g>
              {/* Drone 1: Westbound Express Cargo Drone */}
              <g className="anim-drone-w">
                <rect x="-12" y="-4" width="24" height="8" rx="3" fill="currentColor" />
                <line x1="-16" y1="-4" x2="16" y2="-4" stroke="#1DB954" strokeWidth="1.2" />
                <circle cx="8" cy="0" r="2" fill="#1DB954" />
                <line x1="-8" y1="0" x2="-38" y2="0" stroke="#1DB954" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
              </g>

              {/* Drone 2: Eastbound Commuter Sky-pod */}
              <g className="anim-drone-e">
                <rect x="-10" y="-3.5" width="20" height="7" rx="2" fill="currentColor" />
                <line x1="-14" y1="-3.5" x2="14" y2="-3.5" stroke="#1DB954" strokeWidth="1" />
                <circle cx="-6" cy="0" r="1.8" fill="#1DB954" />
                <line x1="8" y1="0" x2="35" y2="0" stroke="#1DB954" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
              </g>

              {/* Drone 3: High-Altitude Atmospheric Patrol Drone */}
              <g className="anim-drone-h">
                <polygon points="-8,-3 8,-3 0,4" fill="currentColor" />
                <circle cx="0" cy="-3" r="1.5" fill="#1DB954" />
                <line x1="-12" y1="-3" x2="-30" y2="-3" stroke="#1DB954" strokeWidth="0.75" opacity="0.5" />
              </g>
            </g>
          )}

          {/* =========================================================================
              LAYER 3: FOREGROUND HYPER-DETAILED CYBERCITY METROPOLIS
             ========================================================================= */}
          <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-95">

            {/* =====================================================================
                SECTOR 01: GROUND RUNTIME & LEGACY INFRASTRUCTURE (x: 20 - 320)
               ===================================================================== */}
            <g
              onClick={() => setActiveSectorId('foundation')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeSectorId === 'foundation' ? "opacity-100" : "opacity-70 hover:opacity-95"
              )}
            >
              {/* Telecommunications Lattice Radio Tower */}
              <line x1="38" y1="185" x2="38" y2="300" strokeWidth="1.5" />
              <line x1="30" y1="300" x2="38" y2="185" strokeWidth="0.8" />
              <line x1="46" y1="300" x2="38" y2="185" strokeWidth="0.8" />
              <line x1="32" y1="270" x2="44" y2="270" strokeWidth="0.8" />
              <line x1="34" y1="240" x2="42" y2="240" strokeWidth="0.8" />
              <line x1="36" y1="210" x2="40" y2="210" strokeWidth="0.8" />
              {/* Flashing Tower Tip Beacon */}
              <circle cx="38" cy="183" r="2.5" fill="#1DB954" />
              <circle cx="38" cy="183" r="8" stroke="#1DB954" strokeWidth="0.75" className="anim-beacon-1" fill="none" />
              {/* Overhead High-Voltage Power Lines connecting to Substation */}
              <path d="M 38 210 Q 75 225 110 230" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 3" fill="none" opacity="0.6" />

              {/* Building 1A: Corrugated Metal Server Depot & Logistics Bay */}
              <rect x="58" y="235" width="76" height="65" />
              {/* Structural Pitched Truss Roof */}
              <polygon points="54,235 96,210 138,235" strokeWidth="1.25" fill="currentColor" fillOpacity="0.04" />
              <line x1="96" y1="210" x2="96" y2="235" strokeWidth="0.75" />
              <line x1="75" y1="222" x2="75" y2="235" strokeWidth="0.75" />
              <line x1="117" y1="222" x2="117" y2="235" strokeWidth="0.75" />
              {/* Corrugated Shutter Loading Bay */}
              <rect x="68" y="255" width="28" height="45" strokeWidth="1.2" fill="#1DB954" fillOpacity="0.08" />
              <line x1="68" y1="264" x2="96" y2="264" strokeWidth="0.5" />
              <line x1="68" y1="273" x2="96" y2="273" strokeWidth="0.5" />
              <line x1="68" y1="282" x2="96" y2="282" strokeWidth="0.5" />
              <line x1="68" y1="291" x2="96" y2="291" strokeWidth="0.5" />
              {/* Fluorescent Server Room Windows */}
              <rect x="104" y="247" width="22" height="18" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" />
              <line x1="115" y1="247" x2="115" y2="265" strokeWidth="0.5" />
              <line x1="104" y1="256" x2="126" y2="256" strokeWidth="0.5" />
              {/* Rooftop Exhaust Flue */}
              <rect x="114" y="198" width="10" height="12" strokeWidth="0.75" />
              <path d="M 114 198 Q 119 190 124 198" strokeWidth="0.75" />

              {/* Building 1B: 2-Story Concrete Command Outpost & HVAC Platform */}
              <rect x="148" y="215" width="82" height="85" />
              <rect x="156" y="198" width="66" height="17" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
              {/* Dual-Fan Industrial HVAC Unit */}
              <g transform="translate(164, 183)">
                <rect x="0" y="0" width="26" height="15" strokeWidth="0.8" fill="currentColor" fillOpacity="0.08" />
                <circle cx="7" cy="7.5" r="5" strokeWidth="0.6" />
                <g transform="translate(7, 7.5)" className="anim-fan">
                  <line x1="0" y1="-4" x2="0" y2="4" strokeWidth="0.6" />
                  <line x1="-4" y1="0" x2="4" y2="0" strokeWidth="0.6" />
                </g>
                <circle cx="19" cy="7.5" r="5" strokeWidth="0.6" />
                <g transform="translate(19, 7.5)" className="anim-fan">
                  <line x1="0" y1="-4" x2="0" y2="4" strokeWidth="0.6" />
                  <line x1="-4" y1="0" x2="4" y2="0" strokeWidth="0.6" />
                </g>
              </g>
              {/* Satellite Parabolic Transceiver Dish */}
              <path d="M 205 198 A 10 10 0 0 1 218 186" strokeWidth="1.5" fill="none" />
              <line x1="211" y1="192" x2="218" y2="185" strokeWidth="1" />
              <circle cx="219" cy="184" r="2" fill="#1DB954" />
              {/* Windows Matrix */}
              <rect x="158" y="227" width="16" height="18" strokeWidth="0.75" className="anim-win-2" />
              <rect x="181" y="227" width="16" height="18" strokeWidth="0.75" />
              <rect x="204" y="227" width="16" height="18" strokeWidth="0.75" className="anim-win-3" />
              <line x1="148" y1="255" x2="230" y2="255" strokeWidth="1.2" />
              <rect x="158" y="265" width="16" height="18" strokeWidth="0.75" className="anim-win-1" />
              <rect x="181" y="265" width="16" height="18" strokeWidth="0.75" />
              <rect x="204" y="265" width="16" height="35" strokeWidth="1.2" fill="#1DB954" fillOpacity="0.12" />

              {/* Building 1C: Cylindrical Data Silo & Transformer Substation */}
              <rect x="245" y="225" width="38" height="75" rx="4" strokeWidth="1.5" />
              <line x1="245" y1="245" x2="283" y2="245" strokeWidth="0.6" strokeDasharray="3 2" />
              <line x1="245" y1="268" x2="283" y2="268" strokeWidth="0.6" strokeDasharray="3 2" />
              {/* Ground Substation Transformer with Hazard Striping */}
              <rect x="290" y="265" width="24" height="35" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />
              <line x1="290" y1="275" x2="314" y2="275" strokeWidth="0.5" />
              <line x1="294" y1="265" x2="294" y2="260" strokeWidth="1" />
              <line x1="310" y1="265" x2="310" y2="260" strokeWidth="1" />
              <circle cx="294" cy="260" r="1.5" fill="#1DB954" />
              <circle cx="310" cy="260" r="1.5" fill="#1DB954" />

              {/* Sector Active Bracket Indicator */}
              {activeSectorId === 'foundation' && (
                <rect x="30" y="170" width="290" height="135" stroke="#1DB954" strokeWidth="1.2" strokeDasharray="5 5" fill="#1DB954" fillOpacity="0.03" rx="6" />
              )}
            </g>


            {/* =====================================================================
                SECTOR 02: CLOUD MODERNIZATION & EDGE FACILITY (x: 330 - 670)
               ===================================================================== */}
            <g
              onClick={() => setActiveSectorId('modernization')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeSectorId === 'modernization' ? "opacity-100" : "opacity-70 hover:opacity-95"
              )}
            >
              {/* Building 2A: 5-Story Modular Glass Tech HQ with Solar Arrays */}
              <rect x="340" y="165" width="95" height="135" />
              {/* Photovoltaic Solar Tracking Wing */}
              <polygon points="345,165 375,145 395,165" fill="url(#solar-pv-mesh)" strokeWidth="0.8" />
              <polygon points="398,165 428,145 448,165" fill="url(#solar-pv-mesh)" strokeWidth="0.8" />
              {/* Continuous Ribbon Windows with Server Blade Glow */}
              <rect x="350" y="177" width="75" height="22" strokeWidth="0.75" fill="currentColor" fillOpacity="0.04" />
              <line x1="368" y1="177" x2="368" y2="199" strokeWidth="0.5" />
              <line x1="387" y1="177" x2="387" y2="199" strokeWidth="0.5" />
              <line x1="406" y1="177" x2="406" y2="199" strokeWidth="0.5" />
              <rect x="350" y="177" width="37" height="22" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" />

              <rect x="350" y="208" width="75" height="22" strokeWidth="0.75" fill="currentColor" fillOpacity="0.04" />
              <line x1="368" y1="208" x2="368" y2="230" strokeWidth="0.5" />
              <line x1="387" y1="208" x2="387" y2="230" strokeWidth="0.5" />
              <line x1="406" y1="208" x2="406" y2="230" strokeWidth="0.5" />
              <rect x="387" y="208" width="38" height="22" fill="#1DB954" fillOpacity="0.25" className="anim-win-2" />

              <rect x="350" y="239" width="75" height="22" strokeWidth="0.75" fill="currentColor" fillOpacity="0.04" />
              <line x1="368" y1="239" x2="368" y2="261" strokeWidth="0.5" />
              <line x1="387" y1="239" x2="387" y2="261" strokeWidth="0.5" />
              <line x1="406" y1="239" x2="406" y2="261" strokeWidth="0.5" />
              <rect x="350" y="239" width="18" height="22" fill="#1DB954" fillOpacity="0.2" className="anim-win-3" />

              <rect x="365" y="270" width="45" height="30" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
              <line x1="387" y1="270" x2="387" y2="300" strokeWidth="0.75" />

              {/* Building 2B: Stepped Cyber Office Hub & Microwave Radar Mast */}
              <rect x="450" y="140" width="105" height="160" />
              <rect x="465" y="118" width="75" height="22" strokeWidth="1" fill="#1DB954" fillOpacity="0.06" />
              {/* Microwave Dish & Radar Transceiver */}
              <line x1="502" y1="88" x2="502" y2="118" strokeWidth="1.5" />
              <circle cx="502" cy="88" r="3.5" fill="#1DB954" />
              <circle cx="502" cy="88" r="12" stroke="#1DB954" strokeWidth="0.75" className="anim-beacon-1" fill="none" />
              <circle cx="502" cy="88" r="22" stroke="#1DB954" strokeWidth="0.5" className="anim-beacon-2" fill="none" />
              {/* Rotating Scanning Radar Dish */}
              <g transform="translate(525, 110)">
                <line x1="0" y1="0" x2="0" y2="8" strokeWidth="1" />
                <g className="anim-radar">
                  <path d="M -6 -4 A 8 8 0 0 1 6 -4" strokeWidth="1.2" fill="none" />
                  <line x1="0" y1="-4" x2="0" y2="0" strokeWidth="0.75" />
                </g>
              </g>

              {/* Structural Diagrid Exoskeleton Windows */}
              <rect x="462" y="152" width="36" height="40" strokeWidth="0.75" />
              <line x1="462" y1="152" x2="498" y2="192" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="462" y1="192" x2="498" y2="152" strokeWidth="0.5" strokeOpacity="0.6" />
              <rect x="462" y="152" width="36" height="40" fill="#1DB954" fillOpacity="0.15" className="anim-win-2" />

              <rect x="506" y="152" width="36" height="40" strokeWidth="0.75" />
              <line x1="506" y1="152" x2="542" y2="192" strokeWidth="0.5" strokeOpacity="0.6" />
              <line x1="506" y1="192" x2="542" y2="152" strokeWidth="0.5" strokeOpacity="0.6" />

              <rect x="462" y="202" width="36" height="40" strokeWidth="0.75" />
              <rect x="506" y="202" width="36" height="40" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.18" className="anim-win-1" />
              <rect x="480" y="255" width="45" height="45" strokeWidth="1.2" fill="currentColor" fillOpacity="0.05" />

              {/* Building 2C: High-Velocity Fiber Distribution Tower with Live Pulsing Data */}
              <rect x="570" y="118" width="75" height="182" />
              {/* Vertical Pulsing Optical Fiber Conduits */}
              {showDataConduits && (
                <g>
                  <line x1="588" y1="118" x2="588" y2="300" stroke="#1DB954" strokeWidth="1.75" strokeDasharray="6 6" className="anim-fiber" filter="url(#neon-glow)" />
                  <line x1="628" y1="118" x2="628" y2="300" stroke="#1DB954" strokeWidth="1.75" strokeDasharray="6 6" className="anim-fiber" filter="url(#neon-glow)" />
                </g>
              )}
              {/* Micro Server Blades Windows */}
              <rect x="596" y="130" width="22" height="14" strokeWidth="0.75" className="anim-win-3" />
              <rect x="596" y="152" width="22" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="596" y="174" width="22" height="14" strokeWidth="0.75" className="anim-win-2" />
              <rect x="596" y="196" width="22" height="14" strokeWidth="0.75" className="anim-win-1" />
              <rect x="596" y="218" width="22" height="14" strokeWidth="0.75" className="anim-win-3" />
              <rect x="586" y="258" width="42" height="42" strokeWidth="1.2" fill="#1DB954" fillOpacity="0.12" />

              {/* Sector Active Bracket Indicator */}
              {activeSectorId === 'modernization' && (
                <rect x="330" y="75" width="325" height="230" stroke="#1DB954" strokeWidth="1.2" strokeDasharray="5 5" fill="#1DB954" fillOpacity="0.03" rx="6" />
              )}
            </g>


            {/* =====================================================================
                SECTOR 03: COMMERCIAL SCALE & ENTERPRISE ARCOLOGY (x: 680 - 1040)
               ===================================================================== */}
            <g
              onClick={() => setActiveSectorId('scale')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeSectorId === 'scale' ? "opacity-100" : "opacity-70 hover:opacity-95"
              )}
            >
              {/* Structure 3A: Twin Diagrid Megatowers with Suspension Skybridge */}
              {/* Tower Left */}
              <rect x="690" y="75" width="70" height="225" />
              {/* Structural Diagrid Shell */}
              <line x1="690" y1="75" x2="760" y2="135" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="690" y1="135" x2="760" y2="75" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="690" y1="135" x2="760" y2="195" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="690" y1="195" x2="760" y2="135" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="690" y1="195" x2="760" y2="255" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="690" y1="255" x2="760" y2="195" strokeWidth="0.8" strokeOpacity="0.6" />
              {/* Internal Lit Office Plates */}
              <rect x="700" y="85" width="50" height="14" fill="#1DB954" fillOpacity="0.25" className="anim-win-1" strokeWidth="0.5" />
              <rect x="700" y="145" width="50" height="14" fill="#1DB954" fillOpacity="0.18" className="anim-win-2" strokeWidth="0.5" />
              <rect x="700" y="205" width="50" height="14" fill="#1DB954" fillOpacity="0.3" className="anim-win-3" strokeWidth="0.5" />

              {/* Tower Right */}
              <rect x="805" y="60" width="70" height="240" />
              <line x1="805" y1="60" x2="875" y2="120" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="805" y1="120" x2="875" y2="60" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="805" y1="120" x2="875" y2="180" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="805" y1="180" x2="875" y2="120" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="805" y1="180" x2="875" y2="240" strokeWidth="0.8" strokeOpacity="0.6" />
              <line x1="805" y1="240" x2="875" y2="180" strokeWidth="0.8" strokeOpacity="0.6" />
              <rect x="815" y="72" width="50" height="14" fill="#1DB954" fillOpacity="0.25" className="anim-win-2" strokeWidth="0.5" />
              <rect x="815" y="132" width="50" height="14" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" strokeWidth="0.5" />
              <rect x="815" y="192" width="50" height="14" fill="#1DB954" fillOpacity="0.25" className="anim-win-3" strokeWidth="0.5" />

              {/* Interconnecting Double-Decker Glass Skybridge with Structural Stays */}
              <rect x="760" y="110" width="45" height="28" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.14" />
              <line x1="760" y1="124" x2="805" y2="124" strokeWidth="0.8" />
              <line x1="772" y1="110" x2="772" y2="138" strokeWidth="0.5" />
              <line x1="784" y1="110" x2="784" y2="138" strokeWidth="0.5" />
              <line x1="796" y1="110" x2="796" y2="138" strokeWidth="0.5" />
              {/* Skybridge Suspension Cables */}
              <line x1="760" y1="75" x2="782" y2="110" stroke="#1DB954" strokeWidth="0.8" />
              <line x1="805" y1="60" x2="782" y2="110" stroke="#1DB954" strokeWidth="0.8" />

              {/* Express Glass Elevator Track & Moving Glowing Elevator Pods */}
              <line x1="798" y1="60" x2="798" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <g transform="translate(792, 260)" className="anim-lift-1">
                <rect x="0" y="0" width="12" height="18" rx="2" fill="#1DB954" fillOpacity="0.9" stroke="#1DB954" strokeWidth="1" filter="url(#neon-glow)" />
                <line x1="2" y1="5" x2="10" y2="5" stroke="#000" strokeWidth="0.8" />
                <line x1="2" y1="10" x2="10" y2="10" stroke="#000" strokeWidth="0.8" />
              </g>

              {/* Structure 3B: High-Capacity Automated Ops Monolith & Holographic HUD */}
              <rect x="895" y="50" width="115" height="250" />
              {/* Stepped Architectural Crown */}
              <rect x="912" y="32" width="80" height="18" strokeWidth="1.2" fill="currentColor" fillOpacity="0.07" />
              {/* Heavy Duty Rooftop Crane / Drone Maintenance Gantry */}
              <line x1="952" y1="14" x2="952" y2="32" strokeWidth="1.5" />
              <line x1="930" y1="14" x2="980" y2="14" strokeWidth="1.5" />
              <line x1="930" y1="14" x2="952" y2="32" strokeWidth="0.75" />
              <circle cx="980" cy="14" r="2.5" fill="#1DB954" className="anim-beacon-1" />

              {/* Large Holographic HUD Telemetry Billboard */}
              <rect x="910" y="60" width="85" height="34" rx="3" fill="#1DB954" fillOpacity="0.16" stroke="#1DB954" strokeWidth="1.2" filter="url(#neon-glow)" />
              <text x="917" y="74" fontSize="7.5" fontFamily="monospace" fill="#1DB954" fontWeight="bold" stroke="none">AUTO_TRIAGE // 99.9%</text>
              <text x="917" y="86" fontSize="6.5" fontFamily="monospace" fill="currentColor" opacity="0.85" stroke="none">LATENCY: &lt;45s DISPATCH</text>
              <line x1="910" y1="78" x2="995" y2="78" stroke="#1DB954" strokeWidth="0.6" strokeDasharray="2 2" />

              {/* Dense Server Bank Matrix */}
              <g strokeWidth="0.5">
                {[...Array(7)].map((_, r) => (
                  <g key={`s3-dense-grid-${r}`}>
                    <rect x="908" y={106 + r * 25} width="22" height="18" rx="1" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                    <rect x="935" y={106 + r * 25} width="22" height="18" rx="1" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                    <rect x="962" y={106 + r * 25} width="22" height="18" rx="1" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                    <rect x="989" y={106 + r * 25} width="14" height="18" rx="1" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Sector Active Bracket Indicator */}
              {activeSectorId === 'scale' && (
                <rect x="680" y="8" width="340" height="295" stroke="#1DB954" strokeWidth="1.2" strokeDasharray="5 5" fill="#1DB954" fillOpacity="0.03" rx="6" />
              )}
            </g>


            {/* =====================================================================
                SECTOR 04: ZENITH APEX CITADEL & MEGATOWERS (x: 1050 - 1430)
               ===================================================================== */}
            <g
              onClick={() => setActiveSectorId('pinnacle')}
              className={cn(
                "cursor-pointer transition-all duration-200",
                activeSectorId === 'pinnacle' ? "opacity-100" : "opacity-70 hover:opacity-95"
              )}
            >
              {/* Structure 4A: Cascading Multi-Tier Skyscraper (Height: 270px) */}
              <rect x="1035" y="35" width="95" height="265" />
              <rect x="1055" y="16" width="60" height="19" strokeWidth="1.2" fill="#1DB954" fillOpacity="0.08" />
              {/* Cantilevered Sky-Harbor Drone Launchpad [H] */}
              <line x1="1025" y1="35" x2="1140" y2="35" strokeWidth="2" stroke="#1DB954" />
              <circle cx="1085" cy="16" r="6" stroke="#1DB954" strokeWidth="0.8" fill="none" />
              <text x="1082.5" y="18.5" fontSize="6.5" fontFamily="monospace" fill="#1DB954" fontWeight="bold" stroke="none">H</text>
              <circle cx="1030" cy="35" r="2" fill="#1DB954" className="anim-beacon-1" />
              <circle cx="1135" cy="35" r="2" fill="#1DB954" className="anim-beacon-1" />

              {/* Express Vertical Hyperloop Elevator Track */}
              <line x1="1120" y1="35" x2="1120" y2="300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7" />
              <g transform="translate(1114, 250)" className="anim-lift-2">
                <rect x="0" y="0" width="12" height="22" rx="2.5" fill="#1DB954" fillOpacity="0.95" stroke="#1DB954" strokeWidth="1.2" filter="url(#neon-glow)" />
                <circle cx="6" cy="6" r="1.8" fill="#000" />
                <line x1="2" y1="12" x2="10" y2="12" stroke="#000" strokeWidth="0.8" />
                <line x1="2" y1="17" x2="10" y2="17" stroke="#000" strokeWidth="0.8" />
              </g>

              {/* Curtain Wall Matrix */}
              <g strokeWidth="0.5">
                {[...Array(10)].map((_, r) => (
                  <g key={`s4-cw-grid-${r}`}>
                    <rect x="1045" y={50 + r * 24} width="18" height="17" className={r % 2 === 0 ? "anim-win-1" : "anim-win-3"} />
                    <rect x="1069" y={50 + r * 24} width="18" height="17" className={r % 3 === 0 ? "anim-win-2" : "anim-win-1"} />
                    <rect x="1093" y={50 + r * 24} width="18" height="17" className={r % 2 === 1 ? "anim-win-3" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Structure 4B: The Monolithic Cyber Apex Pinnacle Spire (Zenith Peak Altitude) */}
              <polygon points="1145,50 1205,12 1265,50" strokeWidth="1.75" fill="#1DB954" fillOpacity="0.18" />
              <rect x="1145" y="50" width="120" height="250" />

              {/* Orbital Zenith Ion Laser Shooting Upward into Space */}
              <g className="anim-ion-beam">
                <line x1="1205" y1="0" x2="1205" y2="12" stroke="#1DB954" strokeWidth="3.5" filter="url(#laser-glow)" />
                <line x1="1205" y1="0" x2="1205" y2="12" stroke="#FFFFFF" strokeWidth="1.2" />
                <line x1="1198" y1="0" x2="1212" y2="0" stroke="#1DB954" strokeWidth="2" />
              </g>

              {/* Spire Radiant Energy Pulse Rings */}
              <circle cx="1205" cy="12" r="4.5" fill="#1DB954" />
              <circle cx="1205" cy="12" r="14" stroke="#1DB954" strokeWidth="1.2" className="anim-beacon-1" fill="none" />
              <circle cx="1205" cy="12" r="26" stroke="#1DB954" strokeWidth="0.8" className="anim-beacon-2" fill="none" />
              <circle cx="1205" cy="12" r="40" stroke="#1DB954" strokeWidth="0.5" className="anim-beacon-delayed" fill="none" />

              {/* Cantilevered Observation Wings */}
              <polygon points="1120,105 1145,105 1145,120 1120,110" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.25" />
              <polygon points="1265,105 1290,105 1290,110 1265,120" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.25" />
              <circle cx="1120" cy="105" r="2" fill="#1DB954" className="anim-beacon-1" />
              <circle cx="1290" cy="105" r="2" fill="#1DB954" className="anim-beacon-1" />

              {/* Vertical Glowing Core Data Trunk */}
              {showDataConduits && (
                <line x1="1205" y1="50" x2="1205" y2="300" stroke="#1DB954" strokeWidth="2.5" strokeDasharray="7 7" className="anim-fiber" filter="url(#neon-glow)" />
              )}

              {/* Diagrid Shell Geometry */}
              <g strokeWidth="0.8" strokeOpacity="0.75">
                <line x1="1145" y1="50" x2="1265" y2="115" />
                <line x1="1145" y1="115" x2="1265" y2="50" />
                <line x1="1145" y1="115" x2="1265" y2="180" />
                <line x1="1145" y1="180" x2="1265" y2="115" />
                <line x1="1145" y1="180" x2="1265" y2="245" />
                <line x1="1145" y1="245" x2="1265" y2="180" />
              </g>

              {/* Server Matrix Glowing Windows */}
              <g strokeWidth="0.5">
                {[...Array(9)].map((_, r) => (
                  <g key={`s4-apex-grid-${r}`}>
                    <rect x="1155" y={62 + r * 26} width="18" height="18" rx="2" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                    <rect x="1179" y={62 + r * 26} width="18" height="18" rx="2" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                    <rect x="1213" y={62 + r * 26} width="18" height="18" rx="2" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                    <rect x="1237" y={62 + r * 26} width="18" height="18" rx="2" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                  </g>
                ))}
              </g>

              {/* Structure 4C: Zenith Cloud Engine Twin Arcology (Height: 275px) */}
              <rect x="1285" y="28" width="115" height="272" />
              {/* Stepped Spire & Communications Crown */}
              <polygon points="1280,28 1342,10 1405,28" strokeWidth="1.75" fill="#1DB954" fillOpacity="0.22" />
              <line x1="1342" y1="0" x2="1342" y2="10" strokeWidth="2.5" stroke="#1DB954" />
              <circle cx="1342" cy="0" r="3.5" fill="#1DB954" />
              <circle cx="1342" cy="0" r="12" stroke="#1DB954" strokeWidth="0.8" className="anim-beacon-1" fill="none" />

              {/* Twin Cylinder Windows */}
              <g strokeWidth="0.5">
                {[...Array(10)].map((_, r) => (
                  <g key={`s4-twin-grid-${r}`}>
                    <rect x="1312" y={45 + r * 25} width="26" height="18" rx="1.5" className={r % 2 === 0 ? "anim-win-2" : "anim-win-1"} />
                    <rect x="1346" y={45 + r * 25} width="26" height="18" rx="1.5" className={r % 3 === 0 ? "anim-win-1" : "anim-win-3"} />
                  </g>
                ))}
              </g>

              {/* Grand Citadel Entrance Atrium */}
              <rect x="1315" y="260" width="60" height="40" strokeWidth="1.5" fill="#1DB954" fillOpacity="0.18" />
              <line x1="1345" y1="260" x2="1345" y2="300" strokeWidth="1.2" />

              {/* Sector Active Bracket Indicator */}
              {activeSectorId === 'pinnacle' && (
                <rect x="1015" y="0" width="415" height="305" stroke="#1DB954" strokeWidth="1.2" strokeDasharray="5 5" fill="#1DB954" fillOpacity="0.03" rx="6" />
              )}
            </g>
          </g>

          {/* =========================================================================
              LAYER 4: CYBER TRAVELER TRAVERSING THE ELEVATION DATUM
             ========================================================================= */}
          <g className="anim-walker" transform="translate(0, 300)">
            <g>
              {/* Glowing Headlamp & Cyber Helmet */}
              <circle cx="0" cy="-26" r="4" fill="#1DB954" filter="url(#neon-glow)" />
              <path d="M -5 -27 L 5 -27 L 6 -24 L -5 -24 Z" fill="currentColor" />
              <line x1="-3" cy="-26" x2="5" y2="-26" stroke="#000" strokeWidth="0.8" />
              {/* Forward Scanner Flashlight Beam */}
              <polygon points="5,-26 28,-18 28,-34" fill="#1DB954" fillOpacity="0.18" />
              {/* Tactical Exoskeleton Body & Power Pack */}
              <rect x="-5" y="-22" width="10" height="12" rx="2" fill="currentColor" />
              <rect x="-8" y="-21" width="4" height="9" rx="1.5" fill="#1DB954" fillOpacity="0.9" />
              <line x1="0" y1="-19" x2="5" y2="-13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </g>
            {/* Animated Striding Cyber Legs */}
            <g transform="translate(0, -10)">
              <line x1="0" y1="0" x2="-4" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="anim-walker-l" />
              <line x1="0" y1="0" x2="4" y2="10" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" className="anim-walker-r" />
            </g>
          </g>

          {/* =========================================================================
              LAYER 5: GROUND FOUNDATION DATUM BEAM & STAGE ANCHOR NODES
             ========================================================================= */}
          <g stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90">
            {/* Primary Ground Axis Line */}
            <line x1="0" y1="300" x2="1440" y2="300" strokeWidth="2.5" />
            <line x1="0" y1="305" x2="1440" y2="305" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.6" />

            {/* Radiant Ground Stage Anchor Pins */}
            <circle cx="96" cy="300" r="4" fill="#1DB954" />
            <circle cx="495" cy="300" r="4" fill="#1DB954" />
            <circle cx="840" cy="300" r="4.5" fill="#1DB954" />
            <circle cx="1205" cy="300" r="5.5" fill="#1DB954" filter="url(#neon-glow)" />
            <circle cx="1345" cy="300" r="5" fill="#1DB954" />
          </g>

          {/* =========================================================================
              LAYER 6: HUD ELEVATION LABELS & ARCHITECTURAL SPECS
             ========================================================================= */}
          <g fontSize="9.5" fontFamily="monospace" fill="currentColor" opacity="0.7" stroke="none">
            <text x="50" y="326">01 // GROUND ZERO [EL +0.0m]</text>
            <text x="420" y="326">02 // CLOUD EDGE FACILITY [EL +180.0m]</text>
            <text x="750" y="326">03 // COMMERCIAL ARCOLOGY [EL +540.0m]</text>
            <text x="1110" y="326">04 // ZENITH APEX CITADEL [EL +1180.0m]</text>
          </g>
          <g fontSize="8" fontFamily="monospace" fill="#1DB954" fontWeight="bold" opacity="0.9" stroke="none">
            <text x="50" y="342">STATUS: LEGACY / MANUAL TRIAGE</text>
            <text x="420" y="342">STATUS: NEXT.JS SSR 0.4s SPEED</text>
            <text x="750" y="342">STATUS: REALTIME AI EVENT PIPELINE</text>
            <text x="1110" y="342">STATUS: 100% PROPRIETARY ASSET</text>
          </g>
        </svg>
      </div>

      {/* Cyber Diagnostic Telemetry & System Blueprint Console */}
      <div className="p-5 sm:p-6 rounded-2xl border border-accent/30 bg-surface/95 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          {/* Header Tag */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-accent-dark dark:text-accent font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{`■ ARCHITECTURE SECTOR ${activeSector.stageNum} //`}</span>
            <span className="uppercase tracking-wider text-text-primary font-bold">{activeSector.title}</span>
            <span className="text-text-tertiary">/</span>
            <span className="text-[11px] text-text-secondary">{activeSector.category}</span>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            {activeSector.description}
          </p>

          {/* Infrastructure Sub-Systems Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3.5">
            <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">Sub-Systems:</span>
            {activeSector.infrastructure.map((infra) => (
              <span
                key={infra}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-elevated border border-border-subtle text-text-secondary"
              >
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{infra}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quantifiable Realtime Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0 lg:w-[420px]">
          {activeSector.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider">
                {m.label}
              </span>
              <span className="text-xl font-bold font-mono text-text-primary text-accent-dark dark:text-accent mt-1">
                {m.value}
              </span>
              <span className="text-[10px] text-text-secondary mt-0.5 leading-tight">
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export alias
export const BusinessInfrastructureVisual = ArchitecturalSkyline;
