'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function ArchitecturalSkyline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full select-none relative rounded-2xl border border-border-subtle bg-surface/70 p-2 sm:p-3 overflow-hidden shadow-inner", className)}>
      {/* Fine Architectural Matrix Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1DB954_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.035] dark:opacity-[0.07] pointer-events-none" />

      <svg
        viewBox="0 0 1440 170"
        className="w-full h-auto text-text-primary relative z-10"
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
            <feGaussianBlur stdDeviation="3" result="laserBlur" />
            <feMerge>
              <feMergeNode in="laserBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            /* Trajectory Laser Stream */
            @keyframes laserDash { 0% { stroke-dashoffset: 70; } 100% { stroke-dashoffset: 0; } }
            /* Spire Concentric Radiant Wave */
            @keyframes beaconPulse { 0% { r: 2px; opacity: 1; stroke-width: 2px; } 100% { r: 24px; opacity: 0; stroke-width: 0.5px; } }
            @keyframes beaconPulseDelayed { 0% { r: 2px; opacity: 1; stroke-width: 1.5px; } 100% { r: 20px; opacity: 0; stroke-width: 0.25px; } }
            /* Double Express Glass Elevator Movement */
            @keyframes liftCar1 {
              0%, 15% { transform: translateY(0px); }
              45%, 58% { transform: translateY(-90px); }
              85%, 100% { transform: translateY(0px); }
            }
            @keyframes liftCar2 {
              0%, 10% { transform: translateY(0px); }
              50%, 65% { transform: translateY(-118px); }
              90%, 100% { transform: translateY(0px); }
            }
            /* Transit Sky-Drones Flight Paths */
            @keyframes skyLaneWest {
              0% { transform: translate(1460px, 35px); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(-60px, 25px); opacity: 0; }
            }
            @keyframes skyLaneEast {
              0% { transform: translate(-50px, 60px); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(1480px, 48px); opacity: 0; }
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
              0% { stroke-dashoffset: 80; }
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
            @keyframes walkerLimbL { 0%, 100% { transform: rotate(-24deg); } 50% { transform: rotate(24deg); } }
            @keyframes walkerLimbR { 0%, 100% { transform: rotate(24deg); } 50% { transform: rotate(-24deg); } }
            /* Twinkling Starlight Nodes */
            @keyframes starTwinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.9; } }

            .anim-laser { animation: laserDash 1.6s linear infinite; }
            .anim-beacon-1 { animation: beaconPulse 2.2s cubic-bezier(0, 0, 0.2, 1) infinite; transform-origin: center; }
            .anim-beacon-2 { animation: beaconPulse 2.2s cubic-bezier(0, 0, 0.2, 1) infinite 1.1s; transform-origin: center; }
            .anim-beacon-delayed { animation: beaconPulseDelayed 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s; transform-origin: center; }
            .anim-lift-1 { animation: liftCar1 11s ease-in-out infinite; }
            .anim-lift-2 { animation: liftCar2 15s ease-in-out infinite 2s; }
            .anim-drone-w { animation: skyLaneWest 24s linear infinite; }
            .anim-drone-e { animation: skyLaneEast 30s linear infinite 4s; }
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
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="65%" stopColor="currentColor" stopOpacity="0.06" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="trajectory-beam-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.2" />
            <stop offset="35%" stopColor="#1DB954" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#1DB954" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="1" />
          </linearGradient>

          <pattern id="solar-pv-mesh" width="6" height="4" patternUnits="userSpaceOnUse">
            <rect width="5" height="3" stroke="#1DB954" strokeWidth="0.5" strokeOpacity="0.5" fill="#1DB954" fillOpacity="0.12" />
          </pattern>
        </defs>

        {/* =========================================================================
            LAYER 0: NIGHT STARFIELD & CALIBRATED ELEVATION AXIS GRID
           ========================================================================= */}
        <g fill="#1DB954" opacity="0.6">
          <circle cx="85" cy="25" r="0.8" className="anim-star" />
          <circle cx="210" cy="15" r="1" className="anim-star" style={{ animationDelay: '0.7s' }} />
          <circle cx="360" cy="28" r="0.7" className="anim-star" style={{ animationDelay: '1.4s' }} />
          <circle cx="510" cy="18" r="1.2" className="anim-star" style={{ animationDelay: '2.1s' }} />
          <circle cx="680" cy="22" r="0.9" className="anim-star" style={{ animationDelay: '0.3s' }} />
          <circle cx="890" cy="12" r="1.1" className="anim-star" style={{ animationDelay: '1.8s' }} />
          <circle cx="1040" cy="26" r="0.8" className="anim-star" style={{ animationDelay: '0.9s' }} />
          <circle cx="1280" cy="10" r="1.2" className="anim-star" style={{ animationDelay: '2.5s' }} />
          <circle cx="1390" cy="30" r="0.9" className="anim-star" style={{ animationDelay: '1.2s' }} />
        </g>

        {/* Engineering Axis Lines */}
        <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.5">
          <line x1="20" y1="25" x2="1420" y2="25" strokeDasharray="3 8" strokeOpacity="0.4" />
          <line x1="20" y1="70" x2="1420" y2="70" strokeDasharray="3 8" strokeOpacity="0.3" />
          <line x1="20" y1="115" x2="1420" y2="115" strokeDasharray="3 8" strokeOpacity="0.3" />

          {/* Registration Crosshairs */}
          <path d="M 170 20 L 170 30 M 165 25 L 175 25" />
          <path d="M 500 20 L 500 30 M 495 25 L 505 25" />
          <path d="M 860 20 L 860 30 M 855 25 L 865 25" />
          <path d="M 1240 20 L 1240 30 M 1235 25 L 1245 25" />
        </g>

        {/* =========================================================================
            LAYER 1: DISTANT SILHOUETTE MEGATOWERS (ATMOSPHERIC BACKGROUND DEPTH)
           ========================================================================= */}
        <g className="opacity-30 dark:opacity-35" stroke="currentColor" strokeWidth="0.6">
          {/* Foundation Backing Outpost */}
          <rect x="55" y="125" width="55" height="37" fill="url(#bg-silhouette-grad)" />
          <polygon points="130,122 160,108 190,122" fill="url(#bg-silhouette-grad)" />
          <rect x="135" y="122" width="50" height="40" fill="url(#bg-silhouette-grad)" />
          <line x1="160" y1="98" x2="160" y2="108" strokeWidth="0.8" />
          <circle cx="160" cy="98" r="1.2" fill="#1DB954" />

          {/* Modernization Backing Cloud Hubs */}
          <rect x="310" y="95" width="65" height="67" fill="url(#bg-silhouette-grad)" />
          <polygon points="390,90 430,72 470,90" fill="url(#bg-silhouette-grad)" />
          <rect x="395" y="90" width="70" height="72" fill="url(#bg-silhouette-grad)" />
          <rect x="500" y="80" width="75" height="82" fill="url(#bg-silhouette-grad)" />

          {/* Scale Backing Arcology Spires */}
          <rect x="620" y="58" width="85" height="104" fill="url(#bg-silhouette-grad)" />
          <polygon points="730,52 775,30 820,52" fill="url(#bg-silhouette-grad)" />
          <rect x="735" y="52" width="80" height="110" fill="url(#bg-silhouette-grad)" />
          <line x1="775" y1="18" x2="775" y2="30" strokeWidth="1" stroke="#1DB954" />
          <circle cx="775" cy="18" r="1.5" fill="#1DB954" opacity="0.8" />
          <rect x="850" y="44" width="90" height="118" fill="url(#bg-silhouette-grad)" />

          {/* Pinnacle Backing Zenith Cyber Megastructures */}
          <polygon points="980,32 1025,14 1070,32" fill="url(#bg-silhouette-grad)" />
          <rect x="985" y="32" width="80" height="130" fill="url(#bg-silhouette-grad)" />
          <rect x="1100" y="16" width="115" height="146" fill="url(#bg-silhouette-grad)" />
          <line x1="1155" y1="4" x2="1155" y2="16" strokeWidth="1.2" stroke="#1DB954" />
          <circle cx="1155" cy="4" r="2" fill="#1DB954" />
          
          <rect x="1245" y="24" width="105" height="138" fill="url(#bg-silhouette-grad)" />
          <polygon points="1245,24 1300,10 1355,24" fill="url(#bg-silhouette-grad)" />
          <rect x="1365" y="38" width="60" height="124" fill="url(#bg-silhouette-grad)" />
        </g>

        {/* =========================================================================
            LAYER 2: TRAJECTORY BEAM & TRANSIT SKY-DRONES
           ========================================================================= */}
        {/* Main Business Elevation Trajectory Laser */}
        <g>
          <path
            d="M 25 156 C 280 150, 620 108, 1185 12"
            stroke="url(#trajectory-beam-grad)"
            strokeWidth="1.75"
            strokeDasharray="5 5"
            className="anim-laser"
            filter="url(#neon-glow)"
          />
          <path
            d="M 25 156 C 280 150, 620 108, 1185 12"
            stroke="#1DB954"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
        </g>

        {/* Animated Sky-Drones */}
        <g>
          <g className="anim-drone-w">
            <rect x="-8" y="-2.5" width="16" height="5" rx="2" fill="currentColor" />
            <line x1="-10" y1="-2.5" x2="10" y2="-2.5" stroke="#1DB954" strokeWidth="1" />
            <circle cx="5" cy="0" r="1.2" fill="#1DB954" />
            <line x1="-5" y1="0" x2="-25" y2="0" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.7" />
          </g>

          <g className="anim-drone-e">
            <rect x="-7" y="-2" width="14" height="4.5" rx="1.5" fill="currentColor" />
            <line x1="-9" y1="-2" x2="9" y2="-2.5" stroke="#1DB954" strokeWidth="0.8" />
            <circle cx="-4" cy="0" r="1.2" fill="#1DB954" />
            <line x1="5" y1="0" x2="22" y2="0" stroke="#1DB954" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
          </g>
        </g>

        {/* =========================================================================
            LAYER 3: FOREGROUND HYPER-DETAILED CYBERCITY METROPOLIS
           ========================================================================= */}
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="opacity-95">

          {/* =====================================================================
              ZONE 01: GROUND FOUNDATIONS & LOGISTICS
             ===================================================================== */}
          <g>
            {/* Telecommunications Lattice Radio Tower */}
            <line x1="38" y1="102" x2="38" y2="162" strokeWidth="1.2" />
            <line x1="32" y1="162" x2="38" y2="102" strokeWidth="0.6" />
            <line x1="44" y1="162" x2="38" y2="102" strokeWidth="0.6" />
            <line x1="34" y1="145" x2="42" y2="145" strokeWidth="0.6" />
            <line x1="35" y1="128" x2="41" y2="128" strokeWidth="0.6" />
            <circle cx="38" cy="100" r="1.8" fill="#1DB954" />
            <circle cx="38" cy="100" r="6" stroke="#1DB954" strokeWidth="0.6" className="anim-beacon-1" fill="none" />
            <path d="M 38 115 Q 75 124 110 126" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.6" />

            {/* Building 1A: Corrugated Metal Server Depot */}
            <rect x="58" y="128" width="76" height="34" />
            <polygon points="54,128 96,114 138,128" strokeWidth="1.1" fill="currentColor" fillOpacity="0.04" />
            <line x1="96" y1="114" x2="96" y2="128" strokeWidth="0.6" />
            <line x1="75" y1="121" x2="75" y2="128" strokeWidth="0.6" />
            <line x1="117" y1="121" x2="117" y2="128" strokeWidth="0.6" />
            <rect x="68" y="138" width="28" height="24" strokeWidth="1" fill="#1DB954" fillOpacity="0.08" />
            <line x1="68" y1="143" x2="96" y2="143" strokeWidth="0.4" />
            <line x1="68" y1="148" x2="96" y2="148" strokeWidth="0.4" />
            <line x1="68" y1="153" x2="96" y2="153" strokeWidth="0.4" />
            <line x1="68" y1="158" x2="96" y2="158" strokeWidth="0.4" />
            <rect x="104" y="134" width="22" height="11" strokeWidth="0.6" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" />
            <line x1="115" y1="134" x2="115" y2="145" strokeWidth="0.4" />
            <line x1="104" y1="139" x2="126" y2="139" strokeWidth="0.4" />

            {/* Building 1B: 2-Story Outpost & HVAC */}
            <rect x="148" y="116" width="82" height="46" />
            <rect x="156" y="106" width="66" height="10" strokeWidth="0.8" fill="currentColor" fillOpacity="0.06" />
            {/* Dual-Fan HVAC Unit */}
            <g transform="translate(164, 97)">
              <rect x="0" y="0" width="24" height="9" strokeWidth="0.6" fill="currentColor" fillOpacity="0.08" />
              <circle cx="6" cy="4.5" r="3.2" strokeWidth="0.5" />
              <g transform="translate(6, 4.5)" className="anim-fan">
                <line x1="0" y1="-2.5" x2="0" y2="2.5" strokeWidth="0.5" />
                <line x1="-2.5" y1="0" x2="2.5" y2="0" strokeWidth="0.5" />
              </g>
              <circle cx="18" cy="4.5" r="3.2" strokeWidth="0.5" />
              <g transform="translate(18, 4.5)" className="anim-fan">
                <line x1="0" y1="-2.5" x2="0" y2="2.5" strokeWidth="0.5" />
                <line x1="-2.5" y1="0" x2="2.5" y2="0" strokeWidth="0.5" />
              </g>
            </g>
            <path d="M 205 106 A 7 7 0 0 1 215 97" strokeWidth="1.2" fill="none" />
            <line x1="210" y1="101" x2="215" y2="96" strokeWidth="0.8" />
            <circle cx="216" cy="95" r="1.5" fill="#1DB954" />
            <rect x="158" y="122" width="16" height="10" strokeWidth="0.6" className="anim-win-2" />
            <rect x="181" y="122" width="16" height="10" strokeWidth="0.6" />
            <rect x="204" y="122" width="16" height="10" strokeWidth="0.6" className="anim-win-3" />
            <line x1="148" y1="138" x2="230" y2="138" strokeWidth="1" />
            <rect x="158" y="144" width="16" height="10" strokeWidth="0.6" className="anim-win-1" />
            <rect x="181" y="144" width="16" height="10" strokeWidth="0.6" />
            <rect x="204" y="144" width="16" height="18" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />

            {/* Building 1C: Data Silo & Transformer */}
            <rect x="245" y="122" width="38" height="40" rx="3" strokeWidth="1.2" />
            <line x1="245" y1="134" x2="283" y2="134" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="245" y1="146" x2="283" y2="146" strokeWidth="0.5" strokeDasharray="2 2" />
            <rect x="290" y="144" width="24" height="18" strokeWidth="0.8" fill="#1DB954" fillOpacity="0.1" />
            <line x1="294" y1="144" x2="294" y2="140" strokeWidth="0.8" />
            <line x1="310" y1="144" x2="310" y2="140" strokeWidth="0.8" />
            <circle cx="294" cy="140" r="1.2" fill="#1DB954" />
            <circle cx="310" cy="140" r="1.2" fill="#1DB954" />
          </g>


          {/* =====================================================================
              ZONE 02: CLOUD MODERNIZATION & EDGE FACILITY
             ===================================================================== */}
          <g>
            {/* Building 2A: Modular Glass Tech HQ with Solar Arrays */}
            <rect x="340" y="88" width="95" height="74" />
            <polygon points="345,88 375,76 395,88" fill="url(#solar-pv-mesh)" strokeWidth="0.6" />
            <polygon points="398,88 428,76 448,88" fill="url(#solar-pv-mesh)" strokeWidth="0.6" />
            <rect x="350" y="96" width="75" height="12" strokeWidth="0.6" fill="currentColor" fillOpacity="0.04" />
            <line x1="368" y1="96" x2="368" y2="108" strokeWidth="0.4" />
            <line x1="387" y1="96" x2="387" y2="108" strokeWidth="0.4" />
            <line x1="406" y1="96" x2="406" y2="108" strokeWidth="0.4" />
            <rect x="350" y="96" width="37" height="12" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" />

            <rect x="350" y="113" width="75" height="12" strokeWidth="0.6" fill="currentColor" fillOpacity="0.04" />
            <line x1="368" y1="113" x2="368" y2="125" strokeWidth="0.4" />
            <line x1="387" y1="113" x2="387" y2="125" strokeWidth="0.4" />
            <line x1="406" y1="113" x2="406" y2="125" strokeWidth="0.4" />
            <rect x="387" y="113" width="38" height="12" fill="#1DB954" fillOpacity="0.25" className="anim-win-2" />

            <rect x="350" y="130" width="75" height="12" strokeWidth="0.6" fill="currentColor" fillOpacity="0.04" />
            <line x1="368" y1="130" x2="368" y2="142" strokeWidth="0.4" />
            <line x1="387" y1="130" x2="387" y2="142" strokeWidth="0.4" />
            <line x1="406" y1="130" x2="406" y2="142" strokeWidth="0.4" />
            <rect x="350" y="130" width="18" height="12" fill="#1DB954" fillOpacity="0.2" className="anim-win-3" />

            <rect x="365" y="147" width="45" height="15" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

            {/* Building 2B: Stepped Cyber Hub & Radar Mast */}
            <rect x="450" y="74" width="105" height="88" />
            <rect x="465" y="60" width="75" height="14" strokeWidth="0.8" fill="#1DB954" fillOpacity="0.06" />
            <line x1="502" y1="42" x2="502" y2="60" strokeWidth="1.2" />
            <circle cx="502" cy="42" r="2.5" fill="#1DB954" />
            <circle cx="502" cy="42" r="8" stroke="#1DB954" strokeWidth="0.6" className="anim-beacon-1" fill="none" />
            <circle cx="502" cy="42" r="15" stroke="#1DB954" strokeWidth="0.4" className="anim-beacon-2" fill="none" />
            <g transform="translate(525, 55)">
              <line x1="0" y1="0" x2="0" y2="5" strokeWidth="0.8" />
              <g className="anim-radar">
                <path d="M -4 -3 A 5 5 0 0 1 4 -3" strokeWidth="0.9" fill="none" />
                <line x1="0" y1="-3" x2="0" y2="0" strokeWidth="0.6" />
              </g>
            </g>

            {/* Structural Diagrid Windows */}
            <rect x="462" y="82" width="36" height="22" strokeWidth="0.6" />
            <line x1="462" y1="82" x2="498" y2="104" strokeWidth="0.4" strokeOpacity="0.6" />
            <line x1="462" y1="104" x2="498" y2="82" strokeWidth="0.4" strokeOpacity="0.6" />
            <rect x="462" y="82" width="36" height="22" fill="#1DB954" fillOpacity="0.15" className="anim-win-2" />

            <rect x="506" y="82" width="36" height="22" strokeWidth="0.6" />
            <line x1="506" y1="82" x2="542" y2="104" strokeWidth="0.4" strokeOpacity="0.6" />
            <line x1="506" y1="104" x2="542" y2="82" strokeWidth="0.4" strokeOpacity="0.6" />

            <rect x="462" y="110" width="36" height="22" strokeWidth="0.6" />
            <rect x="506" y="110" width="36" height="22" strokeWidth="0.6" fill="#1DB954" fillOpacity="0.18" className="anim-win-1" />

            {/* Building 2C: Fiber Distribution Tower */}
            <rect x="570" y="62" width="75" height="100" />
            <line x1="588" y1="62" x2="588" y2="162" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="4 4" className="anim-fiber" filter="url(#neon-glow)" />
            <line x1="628" y1="62" x2="628" y2="162" stroke="#1DB954" strokeWidth="1.5" strokeDasharray="4 4" className="anim-fiber" filter="url(#neon-glow)" />
            <rect x="596" y="70" width="22" height="9" strokeWidth="0.6" className="anim-win-3" />
            <rect x="596" y="84" width="22" height="9" strokeWidth="0.6" className="anim-win-1" />
            <rect x="596" y="98" width="22" height="9" strokeWidth="0.6" className="anim-win-2" />
            <rect x="596" y="112" width="22" height="9" strokeWidth="0.6" className="anim-win-1" />
            <rect x="596" y="126" width="22" height="9" strokeWidth="0.6" className="anim-win-3" />
          </g>


          {/* =====================================================================
              ZONE 03: COMMERCIAL SCALE & ENTERPRISE ARCOLOGY
             ===================================================================== */}
          <g>
            {/* Twin Diagrid Megatowers with Suspension Skybridge */}
            <rect x="690" y="40" width="70" height="122" />
            <line x1="690" y1="40" x2="760" y2="75" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="690" y1="75" x2="760" y2="40" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="690" y1="75" x2="760" y2="110" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="690" y1="110" x2="760" y2="75" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="690" y1="110" x2="760" y2="145" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="690" y1="145" x2="760" y2="110" strokeWidth="0.6" strokeOpacity="0.6" />
            <rect x="700" y="46" width="50" height="9" fill="#1DB954" fillOpacity="0.25" className="anim-win-1" strokeWidth="0.4" />
            <rect x="700" y="81" width="50" height="9" fill="#1DB954" fillOpacity="0.18" className="anim-win-2" strokeWidth="0.4" />
            <rect x="700" y="116" width="50" height="9" fill="#1DB954" fillOpacity="0.3" className="anim-win-3" strokeWidth="0.4" />

            {/* Tower Right */}
            <rect x="805" y="30" width="70" height="132" />
            <line x1="805" y1="30" x2="875" y2="65" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="805" y1="65" x2="875" y2="30" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="805" y1="65" x2="875" y2="100" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="805" y1="100" x2="875" y2="65" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="805" y1="100" x2="875" y2="135" strokeWidth="0.6" strokeOpacity="0.6" />
            <line x1="805" y1="135" x2="875" y2="100" strokeWidth="0.6" strokeOpacity="0.6" />
            <rect x="815" y="38" width="50" height="9" fill="#1DB954" fillOpacity="0.25" className="anim-win-2" strokeWidth="0.4" />
            <rect x="815" y="73" width="50" height="9" fill="#1DB954" fillOpacity="0.2" className="anim-win-1" strokeWidth="0.4" />
            <rect x="815" y="108" width="50" height="9" fill="#1DB954" fillOpacity="0.25" className="anim-win-3" strokeWidth="0.4" />

            {/* Skybridge */}
            <rect x="760" y="62" width="45" height="18" strokeWidth="1" fill="#1DB954" fillOpacity="0.14" />
            <line x1="760" y1="71" x2="805" y2="71" strokeWidth="0.6" />
            <line x1="772" y1="62" x2="772" y2="80" strokeWidth="0.4" />
            <line x1="784" y1="62" x2="784" y2="80" strokeWidth="0.4" />
            <line x1="796" y1="62" x2="796" y2="80" strokeWidth="0.4" />
            <line x1="760" y1="40" x2="782" y2="62" stroke="#1DB954" strokeWidth="0.6" />
            <line x1="805" y1="30" x2="782" y2="62" stroke="#1DB954" strokeWidth="0.6" />

            {/* Express Glass Elevator Track & Moving Pod */}
            <line x1="798" y1="30" x2="798" y2="162" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
            <g transform="translate(793, 140)" className="anim-lift-1">
              <rect x="0" y="0" width="10" height="12" rx="1.5" fill="#1DB954" fillOpacity="0.9" stroke="#1DB954" strokeWidth="0.8" filter="url(#neon-glow)" />
              <line x1="2" y1="3" x2="8" y2="3" stroke="#000" strokeWidth="0.6" />
              <line x1="2" y1="7" x2="8" y2="7" stroke="#000" strokeWidth="0.6" />
            </g>

            {/* Structure 3B: Automated Ops Monolith & Holographic HUD */}
            <rect x="895" y="26" width="115" height="136" />
            <rect x="912" y="14" width="80" height="12" strokeWidth="0.8" fill="currentColor" fillOpacity="0.07" />
            <line x1="952" y1="2" x2="952" y2="14" strokeWidth="1.2" />
            <line x1="930" y1="2" x2="980" y2="2" strokeWidth="1.2" />
            <circle cx="980" cy="2" r="1.8" fill="#1DB954" className="anim-beacon-1" />

            {/* Holographic Telemetry Billboard */}
            <rect x="910" y="32" width="85" height="22" rx="2" fill="#1DB954" fillOpacity="0.16" stroke="#1DB954" strokeWidth="1" filter="url(#neon-glow)" />
            <text x="916" y="42" fontSize="5.5" fontFamily="monospace" fill="#1DB954" fontWeight="bold" stroke="none">AUTO_TRIAGE // 99.9%</text>
            <text x="916" y="50" fontSize="4.8" fontFamily="monospace" fill="currentColor" opacity="0.85" stroke="none">LATENCY: &lt;45s DISPATCH</text>

            {/* Dense Server Bank Matrix */}
            <g strokeWidth="0.4">
              {[...Array(6)].map((_, r) => (
                <g key={`s3-pure-grid-${r}`}>
                  <rect x="908" y={60 + r * 16} width="22" height="11" rx="1" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                  <rect x="935" y={60 + r * 16} width="22" height="11" rx="1" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                  <rect x="962" y={60 + r * 16} width="22" height="11" rx="1" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                  <rect x="989" y={60 + r * 16} width="14" height="11" rx="1" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                </g>
              ))}
            </g>
          </g>


          {/* =====================================================================
              ZONE 04: ZENITH APEX CITADEL & MEGATOWERS
             ===================================================================== */}
          <g>
            {/* Structure 4A: Cascading Skyscraper */}
            <rect x="1035" y="18" width="95" height="144" />
            <rect x="1055" y="6" width="60" height="12" strokeWidth="0.8" fill="#1DB954" fillOpacity="0.08" />
            <line x1="1025" y1="18" x2="1140" y2="18" strokeWidth="1.5" stroke="#1DB954" />
            <circle cx="1085" cy="6" r="4.5" stroke="#1DB954" strokeWidth="0.6" fill="none" />
            <text x="1083" y="8" fontSize="5" fontFamily="monospace" fill="#1DB954" fontWeight="bold" stroke="none">H</text>
            <circle cx="1030" cy="18" r="1.5" fill="#1DB954" className="anim-beacon-1" />
            <circle cx="1135" cy="18" r="1.5" fill="#1DB954" className="anim-beacon-1" />

            {/* Express Elevator Track */}
            <line x1="1120" y1="18" x2="1120" y2="162" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
            <g transform="translate(1115, 130)" className="anim-lift-2">
              <rect x="0" y="0" width="10" height="15" rx="1.5" fill="#1DB954" fillOpacity="0.95" stroke="#1DB954" strokeWidth="0.9" filter="url(#neon-glow)" />
              <circle cx="5" cy="4" r="1.2" fill="#000" />
              <line x1="2" y1="8" x2="8" y2="8" stroke="#000" strokeWidth="0.6" />
            </g>

            {/* Curtain Wall Matrix */}
            <g strokeWidth="0.4">
              {[...Array(8)].map((_, r) => (
                <g key={`s4-pure-cw-${r}`}>
                  <rect x="1045" y={28 + r * 16} width="18" height="11" className={r % 2 === 0 ? "anim-win-1" : "anim-win-3"} />
                  <rect x="1069" y={28 + r * 16} width="18" height="11" className={r % 3 === 0 ? "anim-win-2" : "anim-win-1"} />
                  <rect x="1093" y={28 + r * 16} width="18" height="11" className={r % 2 === 1 ? "anim-win-3" : "anim-win-2"} />
                </g>
              ))}
            </g>

            {/* Structure 4B: The Monolithic Cyber Apex Pinnacle Spire */}
            <polygon points="1145,26 1205,6 1265,26" strokeWidth="1.4" fill="#1DB954" fillOpacity="0.18" />
            <rect x="1145" y="26" width="120" height="136" />

            {/* Orbital Zenith Ion Laser */}
            <g className="anim-ion-beam">
              <line x1="1205" y1="0" x2="1205" y2="6" stroke="#1DB954" strokeWidth="2.5" filter="url(#laser-glow)" />
              <line x1="1205" y1="0" x2="1205" y2="6" stroke="#FFFFFF" strokeWidth="0.9" />
            </g>

            {/* Spire Radiant Energy Pulse Rings */}
            <circle cx="1205" cy="6" r="3" fill="#1DB954" />
            <circle cx="1205" cy="6" r="10" stroke="#1DB954" strokeWidth="1" className="anim-beacon-1" fill="none" />
            <circle cx="1205" cy="6" r="18" stroke="#1DB954" strokeWidth="0.6" className="anim-beacon-2" fill="none" />

            {/* Cantilevered Observation Wings */}
            <polygon points="1120,55 1145,55 1145,65 1120,58" strokeWidth="1.1" fill="#1DB954" fillOpacity="0.25" />
            <polygon points="1265,55 1290,55 1290,58 1265,65" strokeWidth="1.1" fill="#1DB954" fillOpacity="0.25" />
            <circle cx="1120" cy="55" r="1.5" fill="#1DB954" className="anim-beacon-1" />
            <circle cx="1290" cy="55" r="1.5" fill="#1DB954" className="anim-beacon-1" />

            {/* Vertical Glowing Core Data Trunk */}
            <line x1="1205" y1="26" x2="1205" y2="162" stroke="#1DB954" strokeWidth="2" strokeDasharray="5 5" className="anim-fiber" filter="url(#neon-glow)" />

            {/* Diagrid Shell Geometry */}
            <g strokeWidth="0.6" strokeOpacity="0.75">
              <line x1="1145" y1="26" x2="1265" y2="66" />
              <line x1="1145" y1="66" x2="1265" y2="26" />
              <line x1="1145" y1="66" x2="1265" y2="106" />
              <line x1="1145" y1="106" x2="1265" y2="66" />
              <line x1="1145" y1="106" x2="1265" y2="146" />
              <line x1="1145" y1="146" x2="1265" y2="106" />
            </g>

            {/* Server Matrix Glowing Windows */}
            <g strokeWidth="0.4">
              {[...Array(7)].map((_, r) => (
                <g key={`s4-pure-apex-${r}`}>
                  <rect x="1155" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 2 === 0 ? "anim-win-1" : "anim-win-2"} />
                  <rect x="1179" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 3 === 0 ? "anim-win-3" : "anim-win-1"} />
                  <rect x="1213" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 2 === 1 ? "anim-win-2" : "anim-win-3"} />
                  <rect x="1237" y={34 + r * 17} width="18" height="12" rx="1.5" className={r % 3 === 1 ? "anim-win-1" : "anim-win-2"} />
                </g>
              ))}
            </g>

            {/* Structure 4C: Zenith Cloud Engine Twin Arcology */}
            <rect x="1285" y="14" width="115" height="148" />
            <polygon points="1280,14 1342,4 1405,14" strokeWidth="1.4" fill="#1DB954" fillOpacity="0.22" />
            <line x1="1342" y1="0" x2="1342" y2="4" strokeWidth="2" stroke="#1DB954" />
            <circle cx="1342" cy="0" r="2.5" fill="#1DB954" />
            <circle cx="1342" cy="0" r="8" stroke="#1DB954" strokeWidth="0.6" className="anim-beacon-1" fill="none" />

            {/* Twin Cylinder Windows */}
            <g strokeWidth="0.4">
              {[...Array(8)].map((_, r) => (
                <g key={`s4-pure-twin-${r}`}>
                  <rect x="1312" y={25 + r * 16} width="26" height="11" rx="1" className={r % 2 === 0 ? "anim-win-2" : "anim-win-1"} />
                  <rect x="1346" y={25 + r * 16} width="26" height="11" rx="1" className={r % 3 === 0 ? "anim-win-1" : "anim-win-3"} />
                </g>
              ))}
            </g>
          </g>
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
