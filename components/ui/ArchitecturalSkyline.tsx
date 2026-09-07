'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const stages = [
  { id: 1, name: '01 // BASELINE', desc: 'Local & Offline Systems', xMin: 20, xMax: 255 },
  { id: 2, name: '02 // MOMENTUM', desc: 'Commercial & Lead Ingestion', xMin: 265, xMax: 505 },
  { id: 3, name: '03 // DIGITAL', desc: 'Structured Cloud Architecture', xMin: 515, xMax: 795 },
  { id: 4, name: '04 // AUTOMATED', desc: 'Integrated Workflow Network', xMin: 805, xMax: 1090 },
  { id: 5, name: '05 // ENTERPRISE', desc: 'Pinnacle Systems & Scale', xMin: 1100, xMax: 1425 },
];

export function ArchitecturalSkyline({ className }: { className?: string }) {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <div className={cn("w-full select-none relative rounded-2xl border border-border-subtle bg-surface/80 p-2 sm:p-3 overflow-hidden shadow-inner group/skyline", className)}>
      {/* Fine Technical Grid Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#1DB954_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />

      {/* Floating Stage Telemetry Badge */}
      <div className="absolute top-2.5 right-3 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface/90 border border-border-subtle/80 backdrop-blur-md shadow-xs pointer-events-none transition-all duration-200">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-mono font-semibold text-text-primary uppercase tracking-wider">
          {hoveredStage ? stages[hoveredStage - 1].name : '00 // PROGRESSION MOTIF'}
        </span>
        <span className="text-[10px] font-mono text-text-tertiary">
          {hoveredStage ? `— ${stages[hoveredStage - 1].desc}` : '— Shallow 2.5D Isometric Progression'}
        </span>
      </div>

      <svg
        viewBox="0 0 1440 170"
        className="w-full h-auto text-text-primary relative z-10 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Real Neon Bloom Glow Filters */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="laser-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="laserBlur" />
            <feMerge>
              <feMergeNode in="laserBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="nodeBlur" />
            <feMerge>
              <feMergeNode in="nodeBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            /* Automation Network Trajectory Pulse */
            @keyframes networkStream {
              0% { stroke-dashoffset: 80; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes networkStreamRev {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: 80; }
            }
            /* Data Particle Flow */
            @keyframes particleFlow {
              0% { stroke-dashoffset: 200; opacity: 0; }
              20% { opacity: 1; }
              80% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            /* Node Concentric Radiant Beacons */
            @keyframes nodePulseWave {
              0% { r: 2px; opacity: 1; stroke-width: 1.5px; }
              100% { r: 16px; opacity: 0; stroke-width: 0.3px; }
            }
            @keyframes apexWave {
              0% { r: 2px; opacity: 1; stroke-width: 2px; }
              100% { r: 26px; opacity: 0; stroke-width: 0.4px; }
            }
            /* Express Elevator Movement */
            @keyframes elevatorCycle {
              0%, 15% { transform: translateY(0px); }
              45%, 58% { transform: translateY(-88px); }
              85%, 100% { transform: translateY(0px); }
            }
            /* Radar Dish Rotation */
            @keyframes dishSpin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            /* HVAC Cooling Fan Rotation */
            @keyframes fanRotation {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            /* Server Windows Random Glow Cycles */
            @keyframes serverGlow1 { 0%, 100% { opacity: 0.2; fill: #1DB954; } 45% { opacity: 0.95; fill: #1DB954; } 80% { opacity: 0.35; fill: #1DB954; } }
            @keyframes serverGlow2 { 0%, 100% { opacity: 0.85; fill: #1DB954; } 50% { opacity: 0.15; fill: #1DB954; } }
            @keyframes serverGlow3 { 0%, 100% { opacity: 0.1; fill: #1DB954; } 60% { opacity: 0.9; fill: #1DB954; } }
            /* Ion Column Beam Pulse */
            @keyframes ionBeamPulse {
              0%, 100% { opacity: 0.45; transform: scaleX(0.85); }
              50% { opacity: 1; transform: scaleX(1.15); }
            }
            /* Starlight Nodes */
            @keyframes starFlicker { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.85; } }

            .anim-net { animation: networkStream 2.5s linear infinite; }
            .anim-net-branch { animation: networkStream 1.8s linear infinite; }
            .anim-particle { animation: particleFlow 4s ease-in-out infinite; }
            .anim-node-pulse { animation: nodePulseWave 2.4s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
            .anim-node-pulse-delayed { animation: nodePulseWave 2.4s cubic-bezier(0, 0, 0.2, 1) infinite 1.2s; transform-origin: center; }
            .anim-apex-pulse { animation: apexWave 2.8s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
            .anim-elevator { animation: elevatorCycle 12s ease-in-out infinite; }
            .anim-radar { animation: dishSpin 4s linear infinite; transform-origin: center; }
            .anim-fan { animation: fanRotation 1.4s linear infinite; transform-origin: center; }
            .anim-win-1 { animation: serverGlow1 3.6s ease-in-out infinite; }
            .anim-win-2 { animation: serverGlow2 4.4s ease-in-out infinite 0.7s; }
            .anim-win-3 { animation: serverGlow3 3.1s ease-in-out infinite 1.5s; }
            .anim-ion { animation: ionBeamPulse 2.5s ease-in-out infinite; transform-origin: center bottom; }
            .anim-star { animation: starFlicker 3s ease-in-out infinite; }

            .building-group {
              transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease;
            }
            .building-group:hover, .building-group.active {
              transform: translateY(-3.5px);
            }

            @media (prefers-reduced-motion: reduce) {
              .anim-net, .anim-net-branch, .anim-particle, .anim-node-pulse,
              .anim-node-pulse-delayed, .anim-apex-pulse, .anim-elevator,
              .anim-radar, .anim-fan, .anim-win-1, .anim-win-2, .anim-win-3,
              .anim-ion, .anim-star, .building-group {
                animation: none !important;
                transition: none !important;
              }
            }
          `}</style>

          {/* Depth Shading Gradients */}
          <linearGradient id="roof-facet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="side-facet-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.12" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="glass-facet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.04" />
          </linearGradient>

          <linearGradient id="ground-shadow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="trajectory-beam-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.25" />
            <stop offset="35%" stopColor="#1DB954" stopOpacity="0.65" />
            <stop offset="70%" stopColor="#1DB954" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* =========================================================================
            LAYER 0: TECHNICAL STARFIELD & MEASUREMENT CALIBRATION GRID
           ========================================================================= */}
        <g fill="#1DB954" opacity="0.5">
          <circle cx="90" cy="28" r="0.7" className="anim-star" />
          <circle cx="230" cy="18" r="0.9" className="anim-star" style={{ animationDelay: '0.6s' }} />
          <circle cx="390" cy="32" r="0.8" className="anim-star" style={{ animationDelay: '1.2s' }} />
          <circle cx="560" cy="16" r="1" className="anim-star" style={{ animationDelay: '1.8s' }} />
          <circle cx="730" cy="26" r="0.8" className="anim-star" style={{ animationDelay: '0.4s' }} />
          <circle cx="920" cy="14" r="1.1" className="anim-star" style={{ animationDelay: '1.5s' }} />
          <circle cx="1080" cy="22" r="0.8" className="anim-star" style={{ animationDelay: '0.8s' }} />
          <circle cx="1290" cy="12" r="1.2" className="anim-star" style={{ animationDelay: '2.2s' }} />
          <circle cx="1400" cy="28" r="0.8" className="anim-star" style={{ animationDelay: '1.1s' }} />
        </g>

        {/* Faint Horizontal Elevation Reference Axes */}
        <g className="opacity-15 dark:opacity-20" stroke="currentColor" strokeWidth="0.5">
          <line x1="20" y1="28" x2="1420" y2="28" strokeDasharray="3 8" />
          <line x1="20" y1="72" x2="1420" y2="72" strokeDasharray="3 8" />
          <line x1="20" y1="116" x2="1420" y2="116" strokeDasharray="3 8" />

          {/* Coordinate Crosshairs */}
          <path d="M 140 23 L 140 33 M 135 28 L 145 28" />
          <path d="M 460 23 L 460 33 M 455 28 L 465 28" />
          <path d="M 800 23 L 800 33 M 795 28 L 805 28" />
          <path d="M 1200 23 L 1200 33 M 1195 28 L 1205 28" />
        </g>

        {/* =========================================================================
            LAYER 1: DISTANT SILHOUETTE CITADEL (ATMOSPHERIC PARALLAX DEPTH)
           ========================================================================= */}
        <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.5" fill="currentColor" fillOpacity="0.02">
          {/* Stage 1 Distant Outpost */}
          <rect x="50" y="128" width="50" height="34" />
          <polygon points="120,126 148,112 176,126" />
          <rect x="125" y="126" width="46" height="36" />

          {/* Stage 2 Distant Cloud Studio */}
          <rect x="295" y="98" width="60" height="64" />
          <polygon points="375,92 410,76 445,92" />
          <rect x="380" y="92" width="60" height="70" />
          <rect x="475" y="82" width="65" height="80" />

          {/* Stage 3 Distant Modern Spine */}
          <rect x="590" y="60" width="75" height="102" />
          <polygon points="695,54 735,34 775,54" />
          <rect x="700" y="54" width="70" height="108" />

          {/* Stage 4 Distant Megatower */}
          <rect x="830" y="42" width="80" height="120" />
          <polygon points="940,32 980,16 1020,32" />
          <rect x="945" y="32" width="70" height="130" />

          {/* Stage 5 Distant Zenith Spire */}
          <polygon points="1070,24 1120,8 1170,24" />
          <rect x="1075" y="24" width="90" height="138" />
          <rect x="1225" y="20" width="85" height="142" />
          <rect x="1340" y="34" width="65" height="128" />
        </g>

        {/* =========================================================================
            LAYER 2: 2.5D SHALLOW ISOMETRIC BUILDING PROGRESSION (5 STAGES)
           ========================================================================= */}
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">

          {/* -----------------------------------------------------------------------
              STAGE 01: LOCAL / OFFLINE BASELINE (x: 25 - 245)
             ----------------------------------------------------------------------- */}
          <g 
            className={cn("building-group cursor-pointer", hoveredStage === 1 && "active")}
            onMouseEnter={() => setHoveredStage(1)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Ground Ambient Shadow */}
            <polygon points="35,162 145,162 158,166 22,166" fill="url(#ground-shadow-grad)" stroke="none" />

            {/* Structure 1A: Antenna Mast */}
            <g strokeWidth="0.8">
              <line x1="42" y1="96" x2="42" y2="162" strokeWidth="1.2" />
              <line x1="34" y1="162" x2="42" y2="96" />
              <line x1="50" y1="162" x2="42" y2="96" />
              <line x1="37" y1="140" x2="47" y2="140" />
              <line x1="39" y1="120" x2="45" y2="120" />
              {/* Antenna Node */}
              <circle cx="42" cy="96" r="2.5" fill="#1DB954" />
              <circle cx="42" cy="96" r="8" stroke="#1DB954" strokeWidth="0.6" className="anim-node-pulse" fill="none" />
            </g>

            {/* Structure 1B: Small Workshop (Front + 2.5D Shallow Isometric Side/Roof) */}
            {/* 2.5D Side Facet */}
            <polygon points="128,124 142,116 142,154 128,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="96,110 110,102 142,116 128,124" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Gable Roof & Wall */}
            <polygon points="64,124 96,110 128,124" fill="url(#roof-facet-grad)" />
            <rect x="64" y="124" width="64" height="38" fill="url(#roof-facet-grad)" />
            {/* Roll-up Service Door */}
            <rect x="74" y="136" width="28" height="26" strokeWidth="0.8" />
            <line x1="74" y1="142" x2="102" y2="142" strokeWidth="0.5" />
            <line x1="74" y1="148" x2="102" y2="148" strokeWidth="0.5" />
            <line x1="74" y1="154" x2="102" y2="154" strokeWidth="0.5" />
            {/* Gray Baseline Window */}
            <rect x="108" y="134" width="12" height="12" strokeWidth="0.7" fill="currentColor" fillOpacity="0.04" />

            {/* Structure 1C: Two-Story Shop / Baseline Office */}
            {/* 2.5D Side Facet */}
            <polygon points="208,108 222,98 222,152 208,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="152,108 166,98 222,98 208,108" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall */}
            <rect x="152" y="108" width="56" height="54" fill="url(#roof-facet-grad)" />
            {/* Rooftop Mini Equipment */}
            <rect x="162" y="98" width="14" height="10" strokeWidth="0.7" />
            <line x1="184" y1="96" x2="192" y2="108" strokeWidth="0.8" />
            <circle cx="184" cy="96" r="1.5" fill="#1DB954" />
            {/* Windows Matrix */}
            <g strokeWidth="0.5">
              <rect x="160" y="116" width="18" height="14" rx="1" className="anim-win-1" />
              <rect x="184" y="116" width="18" height="14" rx="1" fill="currentColor" fillOpacity="0.05" />
              <rect x="160" y="138" width="18" height="16" rx="1" fill="currentColor" fillOpacity="0.05" />
              <rect x="184" y="138" width="18" height="16" rx="1" fill="currentColor" fillOpacity="0.05" />
            </g>

            {/* Utility Kiosk */}
            <rect x="228" y="142" width="16" height="20" rx="1" strokeWidth="0.8" />
            <circle cx="236" cy="148" r="1.2" fill="#1DB954" />
          </g>

          {/* -----------------------------------------------------------------------
              STAGE 02: GROWING COMMERCIAL STUDIO (x: 260 - 505)
             ----------------------------------------------------------------------- */}
          <g 
            className={cn("building-group cursor-pointer", hoveredStage === 2 && "active")}
            onMouseEnter={() => setHoveredStage(2)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Ground Ambient Shadow */}
            <polygon points="270,162 490,162 506,166 256,166" fill="url(#ground-shadow-grad)" stroke="none" />

            {/* Structure 2A: Sawtooth Modern Workshop Studio */}
            {/* 2.5D Side Facet */}
            <polygon points="364,102 380,90 380,150 364,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* Sawtooth Roof 2.5D Slopes */}
            <polygon points="296,82 312,70 380,90 364,102" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall with Sawtooth Roofline */}
            <polygon points="268,102 296,82 296,102 330,82 330,102 364,102 364,162 268,162" fill="url(#roof-facet-grad)" />
            {/* Sawtooth Glass Skylights */}
            <polygon points="269,101 295,83 295,101" fill="url(#glass-facet-grad)" strokeWidth="0.7" />
            <polygon points="303,101 329,83 329,101" fill="url(#glass-facet-grad)" strokeWidth="0.7" />
            {/* Ribbon Studio Windows */}
            <rect x="276" y="112" width="78" height="14" rx="1" strokeWidth="0.7" />
            <rect x="276" y="132" width="78" height="14" rx="1" strokeWidth="0.7" />
            <rect x="280" y="114" width="22" height="10" rx="0.5" className="anim-win-2" strokeWidth="0.4" />
            <rect x="306" y="114" width="22" height="10" rx="0.5" fill="currentColor" fillOpacity="0.05" strokeWidth="0.4" />
            <rect x="332" y="114" width="18" height="10" rx="0.5" className="anim-win-3" strokeWidth="0.4" />

            {/* Structure 2B: Stepped Commercial Building with Rooftop Dish */}
            {/* 2.5D Side Facets (Lower & Upper Tiers) */}
            <polygon points="480,78 496,66 496,150 480,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            <polygon points="458,56 474,44 474,66 458,78" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depths */}
            <polygon points="388,78 404,66 496,66 480,78" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            <polygon points="408,56 424,44 474,44 458,56" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Walls */}
            <rect x="388" y="78" width="92" height="84" fill="url(#roof-facet-grad)" />
            <rect x="408" y="56" width="50" height="22" fill="url(#roof-facet-grad)" />
            {/* Rooftop Satellite Dish (Spinning) */}
            <g transform="translate(433, 44)">
              <line x1="0" y1="0" x2="0" y2="-10" strokeWidth="1.2" />
              <g className="anim-radar" transform="translate(0, -10)">
                <ellipse cx="0" cy="0" rx="10" ry="4" strokeWidth="0.9" fill="currentColor" fillOpacity="0.1" />
                <line x1="0" y1="0" x2="4" y2="-6" stroke="#1DB954" strokeWidth="1.2" />
                <circle cx="4" cy="-6" r="1.5" fill="#1DB954" />
              </g>
            </g>
            {/* Structural Cross Braces & Windows */}
            <rect x="398" y="88" width="34" height="28" strokeWidth="0.6" fill="currentColor" fillOpacity="0.03" />
            <line x1="398" y1="88" x2="432" y2="116" strokeWidth="0.5" strokeOpacity="0.6" />
            <line x1="398" y1="116" x2="432" y2="88" strokeWidth="0.5" strokeOpacity="0.6" />
            <rect x="440" y="88" width="32" height="28" strokeWidth="0.6" fill="currentColor" fillOpacity="0.03" />
            <line x1="440" y1="88" x2="472" y2="116" strokeWidth="0.5" strokeOpacity="0.6" />
            <line x1="440" y1="116" x2="472" y2="88" strokeWidth="0.5" strokeOpacity="0.6" />
            {/* Active Server Window */}
            <rect x="404" y="94" width="22" height="16" rx="1" className="anim-win-1" strokeWidth="0.4" />
          </g>

          {/* -----------------------------------------------------------------------
              STAGE 03: MODERN DIGITAL BUSINESS & SKYBRIDGE (x: 515 - 795)
             ----------------------------------------------------------------------- */}
          <g 
            className={cn("building-group cursor-pointer", hoveredStage === 3 && "active")}
            onMouseEnter={() => setHoveredStage(3)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Ground Ambient Shadow */}
            <polygon points="525,162 780,162 798,166 510,166" fill="url(#ground-shadow-grad)" stroke="none" />

            {/* Structure 3A: Diagrid Glass Tower */}
            {/* 2.5D Side Facet */}
            <polygon points="608,52 626,38 626,148 608,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="528,52 546,38 626,38 608,52" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall */}
            <rect x="528" y="52" width="80" height="110" fill="url(#roof-facet-grad)" />
            {/* Steel Diagrid Cross-Bracing Structure */}
            <g strokeWidth="0.6" strokeOpacity="0.8">
              <line x1="528" y1="52" x2="608" y2="92" />
              <line x1="528" y1="92" x2="608" y2="52" />
              <line x1="528" y1="92" x2="608" y2="132" />
              <line x1="528" y1="132" x2="608" y2="92" />
              <line x1="528" y1="132" x2="608" y2="162" />
              <line x1="528" y1="162" x2="608" y2="132" />
            </g>

            {/* Glass Skybridge Connecting Tower 3A and 3B */}
            <g>
              <polygon points="608,70 668,70 668,90 608,90" fill="url(#glass-facet-grad)" strokeWidth="0.8" />
              <line x1="608" y1="80" x2="668" y2="80" stroke="#1DB954" strokeWidth="1.2" strokeDasharray="3 3" className="anim-net-branch" />
            </g>

            {/* Structure 3B: Modern Mid-Rise with Observation Spires */}
            {/* 2.5D Side Facet */}
            <polygon points="748,42 766,28 766,148 748,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="668,42 686,28 766,28 748,42" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall */}
            <rect x="668" y="42" width="80" height="120" fill="url(#roof-facet-grad)" />
            {/* Antenna Mast with Pulsing Signal */}
            <line x1="708" y1="18" x2="708" y2="42" strokeWidth="1.4" />
            <circle cx="708" cy="18" r="2.5" fill="#1DB954" filter="url(#node-glow)" />
            <circle cx="708" cy="18" r="10" stroke="#1DB954" strokeWidth="0.6" className="anim-node-pulse" fill="none" />
            {/* Structured Server Windows */}
            <g strokeWidth="0.4">
              {[...Array(6)].map((_, r) => (
                <g key={`s3-win-${r}`}>
                  <rect x="678" y={54 + r * 17} width="16" height="11" rx="1" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                  <rect x="700" y={54 + r * 17} width="16" height="11" rx="1" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                  <rect x="722" y={54 + r * 17} width="16" height="11" rx="1" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                </g>
              ))}
            </g>
          </g>

          {/* -----------------------------------------------------------------------
              STAGE 04: AUTOMATED ORGANISATION & EXPRESS ELEVATOR (x: 805 - 1090)
             ----------------------------------------------------------------------- */}
          <g 
            className={cn("building-group cursor-pointer", hoveredStage === 4 && "active")}
            onMouseEnter={() => setHoveredStage(4)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Ground Ambient Shadow */}
            <polygon points="815,162 1075,162 1095,166 800,166" fill="url(#ground-shadow-grad)" stroke="none" />

            {/* Structure 4A: Automated Tower with Express Glass Elevator Pod */}
            {/* 2.5D Side Facet */}
            <polygon points="930,26 950,12 950,148 930,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="818,26 838,12 950,12 930,26" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall */}
            <rect x="818" y="26" width="112" height="136" fill="url(#roof-facet-grad)" />
            {/* Rooftop Telemetry Sensor & HVAC Cooling Fan */}
            <rect x="836" y="14" width="34" height="12" strokeWidth="0.8" />
            <g transform="translate(853, 20)">
              <circle cx="0" cy="0" r="5" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
              <line x1="-4" y1="0" x2="4" y2="0" stroke="#1DB954" strokeWidth="0.9" className="anim-fan" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="#1DB954" strokeWidth="0.9" className="anim-fan" />
            </g>
            {/* Express Glass Elevator Track & Moving Pod */}
            <g strokeWidth="0.6">
              <rect x="828" y="32" width="14" height="124" strokeDasharray="2 3" opacity="0.7" fill="url(#glass-facet-grad)" />
              <g className="anim-elevator" transform="translate(829, 136)">
                <rect x="0" y="0" width="12" height="16" rx="2" fill="#1DB954" fillOpacity="0.85" filter="url(#node-glow)" stroke="#FFFFFF" strokeWidth="0.8" />
                <line x1="2" y1="8" x2="10" y2="8" stroke="#111111" strokeWidth="0.8" />
              </g>
            </g>
            {/* High-Density Server Rack Windows */}
            <g strokeWidth="0.4">
              {[...Array(7)].map((_, r) => (
                <g key={`s4-rack-${r}`}>
                  <rect x="852" y={36 + r * 17} width="18" height="11" rx="1" className={r % 2 === 0 ? "anim-win-2" : "anim-win-1"} />
                  <rect x="876" y={36 + r * 17} width="18" height="11" rx="1" className={r % 3 === 0 ? "anim-win-1" : "anim-win-3"} />
                  <rect x="900" y={36 + r * 17} width="18" height="11" rx="1" className={r % 2 === 1 ? "anim-win-3" : "anim-win-2"} />
                </g>
              ))}
            </g>

            {/* Structure 4B: Automated Triage Data Center Wing */}
            {/* 2.5D Side Facet */}
            <polygon points="1058,20 1078,6 1078,148 1058,162" fill="url(#side-facet-grad)" strokeWidth="0.9" />
            {/* 2.5D Roof Depth */}
            <polygon points="960,20 980,6 1078,6 1058,20" fill="url(#roof-facet-grad)" strokeWidth="0.9" />
            {/* Front Wall */}
            <rect x="960" y="20" width="98" height="142" fill="url(#roof-facet-grad)" />
            {/* Automation Cross-Braces */}
            <g strokeWidth="0.6" strokeOpacity="0.75">
              <line x1="960" y1="20" x2="1058" y2="68" />
              <line x1="960" y1="68" x2="1058" y2="20" />
              <line x1="960" y1="68" x2="1058" y2="116" />
              <line x1="960" y1="116" x2="1058" y2="68" />
            </g>
            {/* Automated Triage HUD Badge */}
            <g transform="translate(974, 30)">
              <rect x="0" y="0" width="70" height="18" rx="2" fill="#1DB954" fillOpacity="0.18" stroke="#1DB954" strokeWidth="0.8" />
              <text x="5" y="12" fill="#1DB954" fontSize="8" fontFamily="monospace" fontWeight="bold">
                AUTO_TRIAGE // 99%
              </text>
            </g>
          </g>

          {/* -----------------------------------------------------------------------
              STAGE 05: ZENITH ENTERPRISE ARCOLOGY (x: 1100 - 1425)
             ----------------------------------------------------------------------- */}
          <g 
            className={cn("building-group cursor-pointer", hoveredStage === 5 && "active")}
            onMouseEnter={() => setHoveredStage(5)}
            onMouseLeave={() => setHoveredStage(null)}
          >
            {/* Ground Ambient Shadow */}
            <polygon points="1110,162 1415,162 1435,166 1095,166" fill="url(#ground-shadow-grad)" stroke="none" />

            {/* Structure 5A: Enterprise Headquarters Citadel */}
            {/* 2.5D Side Facet */}
            <polygon points="1265,26 1288,10 1288,146 1265,162" fill="url(#side-facet-grad)" strokeWidth="1" />
            {/* 2.5D Crown Depth */}
            <polygon points="1195,6 1218,-10 1288,10 1265,26" fill="url(#roof-facet-grad)" strokeWidth="1" />
            {/* Front Wall with Pinnacle Tapered Crown */}
            <polygon points="1125,26 1195,6 1265,26 1265,162 1125,162" fill="url(#roof-facet-grad)" />
            {/* Zenith Ion Beam & Apex Spire */}
            <g transform="translate(1195, 6)">
              {/* Vertical Laser Column */}
              <line x1="0" y1="0" x2="0" y2="-20" stroke="#1DB954" strokeWidth="2.5" className="anim-ion" filter="url(#laser-glow)" />
              <circle cx="0" cy="-20" r="3" fill="#1DB954" />
              <circle cx="0" cy="-20" r="14" stroke="#1DB954" strokeWidth="0.7" className="anim-apex-pulse" fill="none" />
              <circle cx="0" cy="-20" r="22" stroke="#1DB954" strokeWidth="0.4" className="anim-node-pulse-delayed" fill="none" />
            </g>
            {/* Cantilevered Observation Wings */}
            <polygon points="1100,52 1125,52 1125,62 1100,56" strokeWidth="1.1" fill="url(#glass-facet-grad)" />
            <polygon points="1265,52 1290,52 1290,56 1265,62" strokeWidth="1.1" fill="url(#glass-facet-grad)" />
            <circle cx="1100" cy="52" r="1.5" fill="#1DB954" className="anim-node-pulse" />
            <circle cx="1290" cy="52" r="1.5" fill="#1DB954" className="anim-node-pulse" />
            {/* Central Vertical Glowing Data Trunk */}
            <line x1="1195" y1="26" x2="1195" y2="162" stroke="#1DB954" strokeWidth="2" strokeDasharray="4 4" className="anim-net" filter="url(#neon-glow)" />
            {/* Enterprise Diagrid Shell Geometry */}
            <g strokeWidth="0.6" strokeOpacity="0.75">
              <line x1="1125" y1="26" x2="1265" y2="66" />
              <line x1="1125" y1="66" x2="1265" y2="26" />
              <line x1="1125" y1="66" x2="1265" y2="106" />
              <line x1="1125" y1="106" x2="1265" y2="66" />
              <line x1="1125" y1="106" x2="1265" y2="146" />
              <line x1="1125" y1="146" x2="1265" y2="106" />
            </g>
            {/* Enterprise Glowing Matrix Windows */}
            <g strokeWidth="0.4">
              {[...Array(7)].map((_, r) => (
                <g key={`s5-win-${r}`}>
                  <rect x="1135" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                  <rect x="1159" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                  <rect x="1203" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                  <rect x="1227" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                </g>
              ))}
            </g>

            {/* Structure 5B: Twin Cloud Engine Arcology */}
            {/* 2.5D Side Facet */}
            <polygon points="1395,14 1418,0 1418,148 1395,162" fill="url(#side-facet-grad)" strokeWidth="1" />
            {/* 2.5D Crown Depth */}
            <polygon points="1336,4 1359,-10 1418,0 1395,14" fill="url(#roof-facet-grad)" strokeWidth="1" />
            {/* Front Wall with Crown */}
            <polygon points="1295,14 1336,4 1395,14 1395,162 1295,162" fill="url(#roof-facet-grad)" />
            <line x1="1336" y1="-8" x2="1336" y2="4" strokeWidth="2" stroke="#1DB954" />
            <circle cx="1336" cy="-8" r="2.5" fill="#1DB954" />
            <circle cx="1336" cy="-8" r="10" stroke="#1DB954" strokeWidth="0.6" className="anim-node-pulse" fill="none" />
            {/* Twin Server Matrix Windows */}
            <g strokeWidth="0.4">
              {[...Array(8)].map((_, r) => (
                <g key={`s5-twin-${r}`}>
                  <rect x="1308" y={24 + r * 16} width="24" height="11" rx="1" className={r % 2 === 0 ? "anim-win-2" : "anim-win-1"} />
                  <rect x="1342" y={24 + r * 16} width="24" height="11" rx="1" className={r % 3 === 0 ? "anim-win-1" : "anim-win-3"} />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* =========================================================================
            LAYER 3: AUTOMATION NETWORK & DATA FLOW LAYER
           ========================================================================= */}
        <g>
          {/* Main Ascending Trajectory Spline */}
          <path
            d="M 42 152 C 220 146, 440 114, 708 68 C 880 32, 1060 22, 1195 8"
            stroke="url(#trajectory-beam-grad)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            className="anim-net"
            filter="url(#laser-glow)"
          />
          <path
            d="M 42 152 C 220 146, 440 114, 708 68 C 880 32, 1060 22, 1195 8"
            stroke="#1DB954"
            strokeWidth="0.5"
            strokeOpacity="0.6"
          />

          {/* Network Data Feed Drop-lines to Stage Infrastructure */}
          {/* Stage 1 Node feed */}
          <path d="M 42 152 L 42 96" stroke="#1DB954" strokeWidth="0.8" strokeDasharray="3 3" className="anim-net-pulse-fast" />
          {/* Stage 2 Radar feed */}
          <path d="M 495 106 L 495 44" stroke="#1DB954" strokeWidth="0.8" strokeDasharray="3 3" className="anim-net" />
          {/* Stage 3 Skybridge node feed */}
          <path d="M 770 60 L 770 71" stroke="#1DB954" strokeWidth="0.8" strokeDasharray="3 3" className="anim-net-pulse-fast" />
          {/* Stage 4 Telemetry HUD feed */}
          <path d="M 945 32 L 945 12" stroke="#1DB954" strokeWidth="0.8" strokeDasharray="3 3" className="anim-net" />
          {/* Stage 5 Apex Spire feed */}
          <path d="M 1195 24 L 1195 -10" stroke="#1DB954" strokeWidth="1" strokeDasharray="4 4" className="anim-net" filter="url(#laser-glow)" />

          {/* Floating Data Pulses along network */}
          <circle cx="210" cy="144" r="2" fill="#1DB954" className="anim-node-pulse" />
          <circle cx="495" cy="106" r="2.5" fill="#1DB954" className="anim-node-pulse-delayed" />
          <circle cx="770" cy="60" r="3" fill="#1DB954" className="anim-node-pulse" />
          <circle cx="995" cy="28" r="3" fill="#1DB954" className="anim-node-pulse-delayed" />
          <circle cx="1195" cy="8" r="3.5" fill="#1DB954" filter="url(#laser-glow)" />
        </g>

        {/* =========================================================================
            LAYER 4: CYBER TRAVELER TRAVERSING THE ELEVATION DATUM
           ========================================================================= */}
        <g className="anim-walker" transform="translate(0, 162)">
          <g>
            <circle cx="0" cy="-18" r="2.8" fill="#1DB954" filter="url(#neon-glow)" />
            <path d="M -3.5 -19 L 3.5 -19 L 4 -17 L -3.5 -17 Z" fill="currentColor" />
            <polygon points="4,-18 20,-12 20,-24" fill="#1DB954" fillOpacity="0.18" />
            <rect x="-3.5" y="-15" width="7" height="8" rx="1.5" fill="currentColor" />
            <rect x="-6" y="-14" width="3" height="6" rx="1" fill="#1DB954" fillOpacity="0.9" />
            <line x1="0" y1="-13" x2="3.5" y2="-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </g>
          <g transform="translate(0, -7)">
            <line x1="0" y1="0" x2="-3" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="anim-walker-l" />
            <line x1="0" y1="0" x2="3" y2="7" stroke="#1DB954" strokeWidth="1.4" strokeLinecap="round" className="anim-walker-r" />
          </g>
        </g>

        {/* =========================================================================
            LAYER 5: GROUND FOUNDATION DATUM BEAM & STAGE ANCHOR NODES
           ========================================================================= */}
        <g stroke="currentColor" strokeWidth="1.2" className="text-border-subtle opacity-90">
          <line x1="0" y1="162" x2="1440" y2="162" strokeWidth="1.8" />
          <line x1="0" y1="165" x2="1440" y2="165" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />

          <circle cx="96" cy="162" r="3" fill="#1DB954" />
          <circle cx="495" cy="162" r="3" fill="#1DB954" />
          <circle cx="840" cy="162" r="3.5" fill="#1DB954" />
          <circle cx="1205" cy="162" r="4.5" fill="#1DB954" filter="url(#neon-glow)" />
          <circle cx="1345" cy="162" r="4" fill="#1DB954" />
        </g>
      </svg>
    </div>
  );
}

// Export alias
export const BusinessInfrastructureVisual = ArchitecturalSkyline;
