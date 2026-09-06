import { cn } from '@/lib/utils';

export function ArchitecturalSkyline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden select-none relative", className)}>
      <svg
        viewBox="0 0 1200 155"
        className="w-full h-auto text-text-primary"
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
            @keyframes trajectoryPulse {
              0% { offset-distance: 0%; opacity: 0; transform: scale(0.8); }
              10% { opacity: 1; transform: scale(1.2); }
              90% { opacity: 1; transform: scale(1.2); }
              100% { offset-distance: 100%; opacity: 0; transform: scale(0.8); }
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
              50% { opacity: 0.85; fill: #1DB954; }
            }
            @keyframes windowGlow2 {
              0%, 100% { opacity: 0.75; fill: #1DB954; }
              50% { opacity: 0.2; fill: #1DB954; }
            }
            @keyframes windowGlow3 {
              0%, 100% { opacity: 0.15; fill: #1DB954; }
              50% { opacity: 0.7; fill: #1DB954; }
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

            /* Datum Scanner Line */
            @keyframes datumStream {
              0% { transform: translateX(0px); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(1160px); opacity: 0; }
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
              transform-origin: 856px 14px;
            }
            .anim-datum {
              animation: datumStream 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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

          {/* Floor Shading Gradient */}
          <linearGradient id="floor-shade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* --- LAYER 0: Blueprint Architectural Grid & Elevation Datum Lines --- */}
        <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.75">
          {/* Elevation Level Guides */}
          <line x1="20" y1="20" x2="1180" y2="20" strokeDasharray="3 7" strokeOpacity="0.4" />
          <line x1="20" y1="55" x2="1180" y2="55" strokeDasharray="3 7" strokeOpacity="0.3" />
          <line x1="20" y1="90" x2="1180" y2="90" strokeDasharray="3 7" strokeOpacity="0.3" />

          {/* Blueprint Crosshairs */}
          <path d="M 140 18 L 140 24 M 137 21 L 143 21" />
          <path d="M 430 18 L 430 24 M 427 21 L 433 21" />
          <path d="M 720 18 L 720 24 M 717 21 L 723 21" />
          <path d="M 1030 18 L 1030 24 M 1027 21 L 1033 21" />
        </g>

        {/* --- LAYER 1: Background Ascending Architectural Silhouettes (Distant Layer) --- */}
        <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.75">
          {/* Stage 1 Distant: Traditional pitched rooftops */}
          <polygon points="30,95 55,75 80,95" fill="url(#skyline-fade)" />
          <rect x="35" y="95" width="40" height="40" fill="url(#skyline-fade)" />
          <rect x="110" y="85" width="45" height="50" fill="url(#skyline-fade)" />
          <polygon points="175,80 200,62 225,80" fill="url(#skyline-fade)" />
          <rect x="180" y="80" width="50" height="55" fill="url(#skyline-fade)" />

          {/* Stage 2 Distant: Mid-level modern stepped studio blocks */}
          <rect x="270" y="65" width="60" height="70" fill="url(#skyline-fade)" />
          <polygon points="360,68 395,45 430,68" fill="url(#skyline-fade)" />
          <rect x="365" y="68" width="60" height="67" fill="url(#skyline-fade)" />
          <rect x="460" y="52" width="65" height="83" fill="url(#skyline-fade)" />

          {/* Stage 3 Distant: Commercial glass curtain structures */}
          <rect x="560" y="40" width="70" height="95" fill="url(#skyline-fade)" />
          <rect x="660" y="30" width="75" height="105" fill="url(#skyline-fade)" />
          <rect x="765" y="24" width="65" height="111" fill="url(#skyline-fade)" />

          {/* Stage 4 Distant: Soaring Megatowers & Spire Silhouettes */}
          <rect x="860" y="18" width="75" height="117" fill="url(#skyline-fade)" />
          <polygon points="965,22 1000,8 1035,22" fill="url(#skyline-fade)" />
          <rect x="970" y="22" width="60" height="113" fill="url(#skyline-fade)" />
          <rect x="1060" y="12" width="80" height="123" fill="url(#skyline-fade)" />
          <line x1="1100" y1="4" x2="1100" y2="12" strokeWidth="1" />
        </g>

        {/* --- LAYER 2: Dynamic Elevation Growth Trajectory Line --- */}
        <g>
          {/* Background subtle curve */}
          <path
            d="M 20 125 C 280 115, 600 75, 1125 10"
            stroke="url(#elevation-trajectory)"
            strokeWidth="1.75"
            strokeDasharray="5 5"
            className="anim-trajectory"
          />

          {/* Continuous trajectory guide hairlines */}
          <path
            d="M 20 125 C 280 115, 600 75, 1125 10"
            stroke="#1DB954"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        </g>

        {/* --- LAYER 3: Deep Foreground Architectural Progression --- */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
          
          {/* =====================================================================
              STAGE 1: TRADITIONAL FOUNDATIONS & CRAFTSMAN BASELINE (x: 0 - 275)
              Modest 1-story craftsman cottage, masonry townhouse, workshop
             ===================================================================== */}
          <g>
            {/* Street Lamp 1 (Classic lantern with glowing ambient halo) */}
            <line x1="22" y1="90" x2="22" y2="135" strokeWidth="1" />
            <path d="M 19 90 C 19 85, 25 85, 25 90 Z" fill="#1DB954" fillOpacity="0.3" strokeWidth="0.75" />
            <circle cx="22" cy="90" r="2" fill="#1DB954" className="anim-beacon-glow" />
            <circle cx="22" cy="90" r="5" stroke="#1DB954" strokeWidth="0.5" strokeOpacity="0.4" fill="none" />

            {/* Cottage 1: Craftsman Pitched Cottage with Chimney & Smoke */}
            <polygon points="42,94 66,74 90,94" strokeWidth="1.25" fill="currentColor" fillOpacity="0.02" />
            <rect x="46" y="94" width="40" height="41" />
            {/* Chimney & Smoke Wisps */}
            <rect x="74" y="78" width="6" height="12" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
            <circle cx="77" cy="74" r="1.5" fill="#1DB954" opacity="0.6" className="anim-smoke-1" />
            <circle cx="79" cy="68" r="2.5" fill="#1DB954" opacity="0.4" className="anim-smoke-2" />
            {/* Attic Window */}
            <circle cx="66" cy="85" r="3.5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />
            {/* Windows & Entrance Door with lit warm green interior */}
            <rect x="52" y="100" width="9" height="12" strokeWidth="0.75" />
            <line x1="56.5" y1="100" x2="56.5" y2="112" strokeWidth="0.5" />
            <line x1="52" y1="106" x2="61" y2="106" strokeWidth="0.5" />
            
            <rect x="69" y="100" width="9" height="12" strokeWidth="0.75" className="anim-win-1" />
            <line x1="73.5" y1="100" x2="73.5" y2="112" strokeWidth="0.5" />
            <line x1="69" y1="106" x2="78" y2="106" strokeWidth="0.5" />

            <rect x="59" y="116" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
            <circle cx="69" cy="126" r="0.75" fill="currentColor" />

            {/* Parked Vintage Bicycle */}
            <g transform="translate(98, 122)">
              <circle cx="4" cy="9" r="4.5" strokeWidth="0.75" />
              <circle cx="17" cy="9" r="4.5" strokeWidth="0.75" />
              <line x1="4" y1="9" x2="10" y2="5" strokeWidth="0.75" />
              <line x1="10" y1="5" x2="17" y2="9" strokeWidth="0.75" />
              <line x1="10" y1="5" x2="8" y2="1" strokeWidth="0.75" />
              <line x1="6" y1="1" x2="11" y2="1" strokeWidth="0.75" />
            </g>

            {/* Townhouse B: 2-Story Brick Townhouse with Masonry Lines */}
            <rect x="130" y="82" width="46" height="53" />
            <polygon points="126,82 153,64 180,82" strokeWidth="1.25" fill="currentColor" fillOpacity="0.02" />
            {/* Masonry horizontal hatchings */}
            <line x1="130" y1="94" x2="176" y2="94" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.5" />
            <line x1="130" y1="108" x2="176" y2="108" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.5" />
            {/* Upper floor windows */}
            <rect x="138" y="88" width="11" height="12" strokeWidth="0.75" />
            <rect x="157" y="88" width="11" height="12" strokeWidth="0.75" className="anim-win-2" />
            {/* Ground floor windows & door */}
            <rect x="138" y="104" width="11" height="12" strokeWidth="0.75" className="anim-win-3" />
            <rect x="157" y="104" width="11" height="12" strokeWidth="0.75" />
            <rect x="147" y="118" width="12" height="17" strokeWidth="1" />

            {/* Tree 1: Fine-branching street tree */}
            <line x1="190" y1="102" x2="190" y2="135" strokeWidth="1" />
            <circle cx="190" cy="98" r="9" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />
            <path d="M 184 102 C 187 95, 193 95, 196 102" strokeWidth="0.75" />

            {/* Workshop C: Timber Frame Shed & Garage */}
            <polygon points="204,92 228,74 252,92" strokeWidth="1.25" />
            <rect x="208" y="92" width="40" height="43" />
            {/* Roll-up garage door with slatted louvers */}
            <rect x="216" y="106" width="24" height="29" strokeWidth="0.75" />
            <line x1="216" y1="112" x2="240" y2="112" strokeWidth="0.5" />
            <line x1="216" y1="118" x2="240" y2="118" strokeWidth="0.5" />
            <line x1="216" y1="124" x2="240" y2="124" strokeWidth="0.5" />
            <line x1="216" y1="130" x2="240" y2="130" strokeWidth="0.5" />

            {/* Street Bench */}
            <line x1="258" y1="126" x2="272" y2="126" strokeWidth="1.25" />
            <line x1="260" y1="126" x2="260" y2="135" strokeWidth="1" />
            <line x1="270" y1="126" x2="270" y2="135" strokeWidth="1" />
          </g>

          {/* =====================================================================
              STAGE 2: STRUCTURED MODERNIZATION & STUDIO EXPANSION (x: 275 - 575)
              Multi-story townhouses, split-level loft, clock spire, solar decks
             ===================================================================== */}
          <g>
            {/* Streetlamp 2 */}
            <line x1="284" y1="82" x2="284" y2="135" strokeWidth="1" />
            <path d="M 281 82 C 281 77, 287 77, 287 82 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
            <circle cx="284" cy="82" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

            {/* Modern Townhouse Pair with Ribbon Windows */}
            <polygon points="296,72 320,54 344,72" strokeWidth="1.25" />
            <rect x="301" y="72" width="38" height="63" />
            <rect x="309" y="80" width="22" height="14" strokeWidth="0.75" />
            <rect x="309" y="98" width="22" height="14" strokeWidth="0.75" className="anim-win-2" />
            <rect x="313" y="116" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

            <polygon points="344,72 368,54 392,72" strokeWidth="1.25" />
            <rect x="349" y="72" width="38" height="63" />
            <rect x="357" y="80" width="22" height="14" strokeWidth="0.75" className="anim-win-1" />
            <rect x="357" y="98" width="22" height="14" strokeWidth="0.75" />
            <rect x="361" y="116" width="13" height="19" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

            {/* Pine Tree 2 */}
            <line x1="404" y1="94" x2="404" y2="135" strokeWidth="1" />
            <polygon points="404,82 395,98 413,98" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
            <polygon points="404,92 393,110 415,110" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />

            {/* Modern Split-Level Studio with Cantilever Balcony & Solar Roof */}
            <rect x="426" y="56" width="54" height="79" />
            {/* Solar Panel Array on Roof */}
            <polygon points="432,56 450,47 464,56" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <line x1="442" y1="51" x2="442" y2="56" strokeWidth="0.5" />
            <line x1="453" y1="51" x2="453" y2="56" strokeWidth="0.5" />
            {/* Cantilever Upper Floor & Balcony */}
            <rect x="434" y="64" width="16" height="16" strokeWidth="0.75" className="anim-win-3" />
            <rect x="456" y="64" width="16" height="16" strokeWidth="0.75" />
            <line x1="426" y1="84" x2="480" y2="84" strokeWidth="1.25" />
            <line x1="428" y1="81" x2="478" y2="81" strokeWidth="0.5" />
            {/* Ground Level Glass Studio */}
            <rect x="434" y="90" width="16" height="18" strokeWidth="0.75" />
            <rect x="456" y="90" width="16" height="18" strokeWidth="0.75" className="anim-win-1" />
            <rect x="444" y="112" width="18" height="23" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

            {/* Transitional Clock & Datum Spire Tower */}
            <rect x="494" y="42" width="38" height="93" />
            <polygon points="494,42 513,24 532,42" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
            {/* Spire Needle & Beacon */}
            <line x1="513" y1="18" x2="513" y2="24" strokeWidth="1" />
            <circle cx="513" cy="18" r="1.5" fill="#1DB954" className="anim-beacon-glow" />
            {/* Clock Face */}
            <circle cx="513" cy="42" r="5.5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />
            <line x1="513" y1="42" x2="513" y2="39" strokeWidth="0.75" />
            <line x1="513" y1="42" x2="516" y2="42" strokeWidth="0.75" />
            {/* Arched Windows */}
            <rect x="502" y="58" width="22" height="24" rx="11" strokeWidth="0.75" className="anim-win-2" />
            <rect x="502" y="90" width="22" height="24" rx="11" strokeWidth="0.75" />
            <rect x="507" y="118" width="12" height="17" strokeWidth="1" fill="#1DB954" fillOpacity="0.2" />

            {/* Tree 3 */}
            <line x1="548" y1="92" x2="548" y2="135" strokeWidth="1" />
            <circle cx="548" cy="86" r="11" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
          </g>

          {/* =====================================================================
              STAGE 3: ADVANCED COMMERCIAL STUDIOS & ATRIUMS (x: 575 - 885)
              5-Story Glass Tech Studio, Exo-skeleton trusses, Cantilever Box
             ===================================================================== */}
          <g>
            {/* Contemporary 5-Story Glass Tech HQ */}
            <rect x="572" y="34" width="64" height="101" />
            {/* Window Matrix Grid with Active Breathing Lights */}
            <rect x="581" y="42" width="11" height="14" strokeWidth="0.75" />
            <rect x="598" y="42" width="11" height="14" strokeWidth="0.75" className="anim-win-1" />
            <rect x="615" y="42" width="11" height="14" strokeWidth="0.75" />

            <rect x="581" y="62" width="11" height="14" strokeWidth="0.75" className="anim-win-3" />
            <rect x="598" y="62" width="11" height="14" strokeWidth="0.75" />
            <rect x="615" y="62" width="11" height="14" strokeWidth="0.75" className="anim-win-2" />

            <rect x="581" y="82" width="11" height="14" strokeWidth="0.75" />
            <rect x="598" y="82" width="11" height="14" strokeWidth="0.75" className="anim-win-1" />
            <rect x="615" y="82" width="11" height="14" strokeWidth="0.75" />

            <rect x="581" y="102" width="11" height="14" strokeWidth="0.75" className="anim-win-2" />
            <rect x="598" y="102" width="11" height="14" strokeWidth="0.75" />
            <rect x="615" y="102" width="11" height="14" strokeWidth="0.75" />

            <rect x="592" y="120" width="24" height="15" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

            {/* Stepped Architectural HQ Complex with Sun-Louvers */}
            <rect x="650" y="26" width="72" height="109" />
            {/* Horizontal Ribbon Louvers */}
            <line x1="650" y1="40" x2="722" y2="40" strokeWidth="0.75" />
            <line x1="650" y1="54" x2="722" y2="54" strokeWidth="0.75" />
            <line x1="650" y1="68" x2="722" y2="68" strokeWidth="0.75" />
            <line x1="650" y1="82" x2="722" y2="82" strokeWidth="0.75" />
            <line x1="650" y1="96" x2="722" y2="96" strokeWidth="0.75" />
            <line x1="650" y1="110" x2="722" y2="110" strokeWidth="0.75" />
            {/* Vertical Mullions */}
            <line x1="674" y1="26" x2="674" y2="135" strokeWidth="0.5" />
            <line x1="698" y1="26" x2="698" y2="135" strokeWidth="0.5" />
            {/* Glazed Double-Height Entrance Atrium */}
            <rect x="670" y="112" width="32" height="23" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />

            {/* Modern Streetlamp & Tree */}
            <line x1="738" y1="74" x2="738" y2="135" strokeWidth="1" />
            <circle cx="738" cy="74" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

            {/* Modular Creative Cantilever Tower */}
            <rect x="756" y="38" width="58" height="97" />
            {/* Protruding Cantilever Glass Skybox */}
            <rect x="748" y="22" width="74" height="22" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
            <rect x="760" y="26" width="50" height="14" strokeWidth="0.75" className="anim-win-1" />
            {/* Lower floor windows */}
            <rect x="768" y="50" width="34" height="15" strokeWidth="0.75" className="anim-win-3" />
            <rect x="768" y="72" width="34" height="15" strokeWidth="0.75" />
            <rect x="768" y="94" width="34" height="15" strokeWidth="0.75" className="anim-win-2" />
            <rect x="774" y="116" width="22" height="19" strokeWidth="1" />

            {/* Tree 4 */}
            <line x1="836" y1="88" x2="836" y2="135" strokeWidth="1" />
            <circle cx="836" cy="80" r="12" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

            {/* High-Tech Innovation Center with Diagonal Exo-Skeleton Bracing */}
            <rect x="856" y="16" width="62" height="119" />
            <line x1="887" y1="16" x2="887" y2="135" strokeWidth="0.75" />
            {/* Structural X-Bracing */}
            <line x1="856" y1="36" x2="918" y2="68" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="856" y1="68" x2="918" y2="36" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="856" y1="68" x2="918" y2="100" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="856" y1="100" x2="918" y2="68" strokeWidth="0.75" strokeOpacity="0.6" />
            {/* Rooftop Communications Antenna Mast & Signal Waves */}
            <line x1="887" y1="6" x2="887" y2="16" strokeWidth="1.25" />
            <circle cx="887" cy="6" r="2.5" fill="#1DB954" />
            <circle cx="887" cy="6" r="8" stroke="#1DB954" strokeWidth="0.75" className="anim-signal" fill="none" />
          </g>

          {/* =====================================================================
              STAGE 4: THE PINNACLE ELEVATION & MEGATOWERS (x: 885 - 1200)
              Towering apex skyscrapers, soaring needle spires, skybridge
             ===================================================================== */}
          <g>
            {/* Skyscraper 1: Stepped Modernist Corporate Tower */}
            <rect x="930" y="28" width="68" height="107" />
            <rect x="940" y="14" width="48" height="14" strokeWidth="1" fill="#1DB954" fillOpacity="0.08" />
            <line x1="964" y1="4" x2="964" y2="14" strokeWidth="1.25" />
            <circle cx="964" cy="4" r="2.5" fill="#1DB954" />
            <circle cx="964" cy="4" r="6" stroke="#1DB954" className="anim-beacon" fill="none" />
            
            {/* Window Grid Pattern */}
            <rect x="940" y="36" width="13" height="18" strokeWidth="0.75" className="anim-win-1" />
            <rect x="958" y="36" width="13" height="18" strokeWidth="0.75" />
            <rect x="976" y="36" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />

            <rect x="940" y="60" width="13" height="18" strokeWidth="0.75" />
            <rect x="958" y="60" width="13" height="18" strokeWidth="0.75" className="anim-win-3" />
            <rect x="976" y="60" width="13" height="18" strokeWidth="0.75" />

            <rect x="940" y="84" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
            <rect x="958" y="84" width="13" height="18" strokeWidth="0.75" />
            <rect x="976" y="84" width="13" height="18" strokeWidth="0.75" className="anim-win-1" />
            <rect x="948" y="110" width="34" height="25" strokeWidth="1" />

            {/* Tree 5 & Street Beacon */}
            <line x1="1012" y1="84" x2="1012" y2="135" strokeWidth="1" />
            <circle cx="1012" cy="78" r="10" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />
            <line x1="1030" y1="68" x2="1030" y2="135" strokeWidth="1" />
            <circle cx="1030" cy="68" r="1.5" fill="#1DB954" className="anim-beacon-glow" />

            {/* Skyscraper 2: Iconic Angled Pinnacle Spire (Zenith Height y: 4) */}
            <polygon points="1048,32 1080,8 1112,32" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
            <rect x="1048" y="32" width="64" height="103" />
            {/* Pinnacle Needle Spire & Flashing Beacons */}
            <line x1="1080" y1="0" x2="1080" y2="8" strokeWidth="1.5" />
            <circle cx="1080" cy="0" r="3.5" fill="#1DB954" />
            <circle cx="1080" cy="0" r="10" stroke="#1DB954" className="anim-beacon" fill="none" />
            <circle cx="1080" cy="0" r="18" stroke="#1DB954" className="anim-beacon-delayed" fill="none" />

            {/* Pinnacle Triangular Glass Vault */}
            <polygon points="1064,28 1080,14 1096,28" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" className="anim-win-1" />
            {/* Vertical Mullion Lines */}
            <line x1="1064" y1="40" x2="1064" y2="135" strokeWidth="0.5" />
            <line x1="1080" y1="40" x2="1080" y2="135" strokeWidth="0.75" />
            <line x1="1096" y1="40" x2="1096" y2="135" strokeWidth="0.5" />
            <line x1="1048" y1="52" x2="1112" y2="52" strokeWidth="0.75" />
            <line x1="1048" y1="70" x2="1112" y2="70" strokeWidth="0.75" />
            <line x1="1048" y1="88" x2="1112" y2="88" strokeWidth="0.75" />
            <line x1="1048" y1="106" x2="1112" y2="106" strokeWidth="0.75" />

            {/* Skyscraper 3: The Grand Corporate Apex Megatower */}
            <rect x="1126" y="20" width="68" height="115" />
            <polygon points="1122,20 1160,6 1198,20" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />
            {/* Apex Spire */}
            <line x1="1160" y1="-2" x2="1160" y2="6" strokeWidth="1.5" />
            <circle cx="1160" cy="-2" r="3.5" fill="#1DB954" />
            <circle cx="1160" cy="-2" r="8" stroke="#1DB954" className="anim-beacon" fill="none" />

            {/* High-density curtain wall with glowing floors */}
            <rect x="1136" y="28" width="13" height="18" strokeWidth="0.75" />
            <rect x="1154" y="28" width="15" height="18" strokeWidth="0.75" className="anim-win-1" />
            <rect x="1174" y="28" width="13" height="18" strokeWidth="0.75" />

            <rect x="1136" y="52" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
            <rect x="1154" y="52" width="15" height="18" strokeWidth="0.75" />
            <rect x="1174" y="52" width="13" height="18" strokeWidth="0.75" className="anim-win-3" />

            <rect x="1136" y="76" width="13" height="18" strokeWidth="0.75" />
            <rect x="1154" y="76" width="15" height="18" strokeWidth="0.75" className="anim-win-1" />
            <rect x="1174" y="76" width="13" height="18" strokeWidth="0.75" />

            <rect x="1136" y="100" width="13" height="18" strokeWidth="0.75" className="anim-win-2" />
            <rect x="1154" y="100" width="15" height="18" strokeWidth="0.75" />
            <rect x="1174" y="100" width="13" height="18" strokeWidth="0.75" />
            <rect x="1146" y="120" width="30" height="15" />
          </g>
        </g>

        {/* --- LAYER 4: Ground Foundation Datum Line & Progression Station Markers --- */}
        <g stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90">
          <line x1="0" y1="135" x2="1200" y2="135" />
          
          {/* Progression Stage Anchor Nodes with Green Glow */}
          <circle cx="66" cy="135" r="3" fill="#1DB954" />
          <circle cx="344" cy="135" r="3" fill="#1DB954" />
          <circle cx="686" cy="135" r="3.5" fill="#1DB954" />
          <circle cx="1080" cy="135" r="4" fill="#1DB954" />
          <circle cx="1160" cy="135" r="4.5" fill="#1DB954" />

          {/* Moving Datum Scanner Dot */}
          <g className="anim-datum">
            <circle cx="20" cy="135" r="3" fill="#1DB954" />
            <circle cx="20" cy="135" r="6" stroke="#1DB954" strokeWidth="0.75" fill="none" opacity="0.6" />
          </g>
        </g>

        {/* --- LAYER 5: Station Architectural Datum Labels --- */}
        <g fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.45" stroke="none">
          <text x="50" y="148">01 // BASELINE FOUNDATION [EL +0.0m]</text>
          <text x="310" y="148">02 // MODERNIZATION [EL +24.5m]</text>
          <text x="640" y="148">03 // COMMERCIAL SCALE [EL +58.0m]</text>
          <text x="1020" y="148">04 // PINNACLE APEX [EL +140.0m]</text>
        </g>
      </svg>
    </div>
  );
}

// Export alias
export const BusinessInfrastructureVisual = ArchitecturalSkyline;


