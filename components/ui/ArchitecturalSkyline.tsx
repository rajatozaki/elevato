import { cn } from '@/lib/utils';

export function ArchitecturalSkyline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden select-none pointer-events-none relative", className)}>
      <svg
        viewBox="0 0 1200 135"
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
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#1DB954" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* --- Background Ascending Silhouettes (Distant Layer) --- */}
        <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.75">
          {/* Stage 1 Distant: Low rooftops (x: 20-240, h: 25-45) */}
          <polygon points="30,85 55,65 80,85" fill="url(#skyline-fade)" />
          <rect x="35" y="85" width="40" height="35" fill="url(#skyline-fade)" />
          <rect x="110" y="75" width="45" height="45" fill="url(#skyline-fade)" />
          <rect x="180" y="65" width="50" height="55" fill="url(#skyline-fade)" />

          {/* Stage 2 Distant: Mid-low modern blocks (x: 240-540, h: 55-75) */}
          <rect x="270" y="52" width="60" height="68" fill="url(#skyline-fade)" />
          <polygon points="360,58 395,35 430,58" fill="url(#skyline-fade)" />
          <rect x="365" y="58" width="60" height="62" fill="url(#skyline-fade)" />
          <rect x="460" y="42" width="65" height="78" fill="url(#skyline-fade)" />

          {/* Stage 3 Distant: Taller commercial structures (x: 540-840, h: 80-95) */}
          <rect x="560" y="32" width="70" height="88" fill="url(#skyline-fade)" />
          <rect x="660" y="24" width="75" height="96" fill="url(#skyline-fade)" />
          <rect x="765" y="18" width="65" height="102" fill="url(#skyline-fade)" />

          {/* Stage 4 Distant: Soaring Pinnacle Towers (x: 840-1200, h: 105-125) */}
          <rect x="860" y="14" width="75" height="106" fill="url(#skyline-fade)" />
          <polygon points="965,18 1000,5 1035,18" fill="url(#skyline-fade)" />
          <rect x="970" y="18" width="60" height="102" fill="url(#skyline-fade)" />
          <rect x="1060" y="8" width="80" height="112" fill="url(#skyline-fade)" />
          <line x1="1100" y1="2" x2="1100" y2="8" />
        </g>

        {/* --- Dynamic Elevation Growth Trajectory Line --- */}
        <path
          d="M 20 105 C 300 95, 600 65, 1120 12"
          stroke="url(#elevation-trajectory)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* --- Foreground Detailed Architectural Evolution Layer --- */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-75 dark:opacity-70">
          
          {/* =====================================================================
              ZONE 1: THE HUMBLE START (x: 0 - 270)
              Modest, small single-story houses & cottages (Low height: y ~ 70-85)
             ===================================================================== */}
          <g>
            {/* Street Lamp 1 (Classic lantern) */}
            <line x1="20" y1="80" x2="20" y2="120" strokeWidth="1" />
            <path d="M 17 80 C 17 76, 23 76, 23 80 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
            <circle cx="20" cy="80" r="1.5" fill="#1DB954" />

            {/* Cottage A: Small 1-story pitched house (y: 80 to 120 -> height: 40) */}
            <polygon points="40,84 62,66 84,84" />
            <rect x="44" y="84" width="36" height="36" />
            <rect x="68" y="70" width="5" height="10" />
            <rect x="50" y="90" width="8" height="10" strokeWidth="0.75" />
            <rect x="66" y="90" width="8" height="10" strokeWidth="0.75" />
            <rect x="57" y="104" width="10" height="16" fill="#1DB954" fillOpacity="0.15" />

            {/* Vintage Bicycle */}
            <circle cx="98" cy="114" r="5" strokeWidth="0.75" />
            <circle cx="112" cy="114" r="5" strokeWidth="0.75" />
            <line x1="98" y1="114" x2="105" y2="110" strokeWidth="0.75" />
            <line x1="105" y1="110" x2="112" y2="114" strokeWidth="0.75" />
            <line x1="105" y1="110" x2="103" y2="105" strokeWidth="0.75" />
            <line x1="101" y1="105" x2="106" y2="105" strokeWidth="0.75" />

            {/* House B: Modest brick townhouse (y: 72 to 120 -> height: 48) */}
            <rect x="126" y="72" width="42" height="48" />
            <polygon points="122,72 147,56 172,72" />
            <circle cx="147" cy="65" r="3.5" strokeWidth="0.75" />
            <rect x="134" y="78" width="10" height="11" strokeWidth="0.75" />
            <rect x="150" y="78" width="10" height="11" strokeWidth="0.75" />
            <rect x="134" y="94" width="10" height="11" strokeWidth="0.75" />
            <rect x="150" y="94" width="10" height="11" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
            <rect x="142" y="106" width="10" height="14" />

            {/* Tree 1 */}
            <line x1="184" y1="92" x2="184" y2="120" strokeWidth="1" />
            <circle cx="184" cy="88" r="8" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />

            {/* Workshop C: Small pitched shed with garage (y: 78 to 120 -> height: 42) */}
            <polygon points="198,82 220,66 242,82" />
            <rect x="202" y="82" width="36" height="38" />
            <rect x="210" y="96" width="20" height="24" strokeWidth="0.75" />
            <line x1="210" y1="102" x2="230" y2="102" strokeWidth="0.5" />
            <line x1="210" y1="108" x2="230" y2="108" strokeWidth="0.5" />
            <line x1="210" y1="114" x2="230" y2="114" strokeWidth="0.5" />

            {/* Street Bench */}
            <line x1="250" y1="112" x2="264" y2="112" strokeWidth="1.25" />
            <line x1="252" y1="112" x2="252" y2="120" strokeWidth="1" />
            <line x1="262" y1="112" x2="262" y2="120" strokeWidth="1" />
          </g>

          {/* =====================================================================
              ZONE 2: STRUCTURED MODERNIZATION (x: 270 - 560)
              2 to 3-story structured urban townhouses (Growing height: y ~ 50-68)
             ===================================================================== */}
          <g>
            {/* Streetlamp 2 */}
            <line x1="278" y1="72" x2="278" y2="120" strokeWidth="1" />
            <path d="M 275 72 C 275 67, 281 67, 281 72 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
            <circle cx="278" cy="72" r="1.5" fill="#1DB954" />

            {/* Modern Townhouse Pair (y: 58 to 120 -> height: 62) */}
            <polygon points="290,62 312,46 334,62" />
            <rect x="295" y="62" width="34" height="58" />
            <rect x="302" y="70" width="18" height="13" strokeWidth="0.75" />
            <rect x="302" y="88" width="18" height="13" strokeWidth="0.75" />
            <rect x="306" y="104" width="11" height="16" fill="#1DB954" fillOpacity="0.15" />

            <polygon points="334,62 356,46 378,62" />
            <rect x="339" y="62" width="34" height="58" />
            <rect x="346" y="70" width="18" height="13" strokeWidth="0.75" />
            <rect x="346" y="88" width="18" height="13" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <rect x="350" y="104" width="11" height="16" fill="#1DB954" fillOpacity="0.15" />

            {/* Tree 2 (Geometric pine) */}
            <line x1="392" y1="84" x2="392" y2="120" strokeWidth="1" />
            <polygon points="392,72 384,86 400,86" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
            <polygon points="392,80 382,96 402,96" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />

            {/* Modern Loft with Rooftop Deck (y: 48 to 120 -> height: 72) */}
            <rect x="414" y="48" width="48" height="72" />
            {/* Balcony & railings */}
            <rect x="422" y="56" width="14" height="15" strokeWidth="0.75" />
            <rect x="440" y="56" width="14" height="15" strokeWidth="0.75" />
            <line x1="414" y1="74" x2="462" y2="74" strokeWidth="1" />
            <line x1="416" y1="71" x2="460" y2="71" strokeWidth="0.5" />
            <rect x="422" y="80" width="14" height="16" strokeWidth="0.75" />
            <rect x="440" y="80" width="14" height="16" strokeWidth="0.75" />
            <rect x="430" y="100" width="16" height="20" />
            {/* Rooftop solar panel */}
            <polygon points="420,48 436,40 448,48" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />

            {/* Clock & Datum Transition Spire (y: 35 to 120 -> height: 85) */}
            <rect x="478" y="35" width="34" height="85" />
            <polygon points="478,35 495,20 512,35" />
            <circle cx="495,35" r="5" strokeWidth="0.75" fill="currentColor" fillOpacity="0.05" />
            <line x1="495" y1="35" x2="495" y2="32" strokeWidth="0.75" />
            <line x1="495" y1="35" x2="498" y2="35" strokeWidth="0.75" />
            <rect x="486" y="50" width="18" height="22" rx="9" strokeWidth="0.75" />
            <rect x="486" y="80" width="18" height="22" rx="9" strokeWidth="0.75" />
            <rect x="490" y="106" width="10" height="14" fill="#1DB954" fillOpacity="0.2" />

            {/* Tree 3 */}
            <line x1="530" y1="80" x2="530" y2="120" strokeWidth="1" />
            <circle cx="530" cy="74" r="10" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
          </g>

          {/* =====================================================================
              ZONE 3: ADVANCED COMMERCIAL & STUDIO HUBS (x: 560 - 860)
              4-6 story sleek glass offices & studios (Height rising: y ~ 24-42)
             ===================================================================== */}
          <g>
            {/* Contemporary 5-Story Glass Tech Studio (y: 28 to 120 -> height: 92) */}
            <rect x="555" y="28" width="58" height="92" />
            {/* Grid Windows */}
            <rect x="564" y="36" width="10" height="12" strokeWidth="0.75" />
            <rect x="579" y="36" width="10" height="12" strokeWidth="0.75" />
            <rect x="594" y="36" width="10" height="12" strokeWidth="0.75" />

            <rect x="564" y="54" width="10" height="12" strokeWidth="0.75" />
            <rect x="579" y="54" width="10" height="12" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
            <rect x="594" y="54" width="10" height="12" strokeWidth="0.75" />

            <rect x="564" y="72" width="10" height="12" strokeWidth="0.75" />
            <rect x="579" y="72" width="10" height="12" strokeWidth="0.75" />
            <rect x="594" y="72" width="10" height="12" strokeWidth="0.75" />

            <rect x="564" y="90" width="10" height="12" strokeWidth="0.75" />
            <rect x="579" y="90" width="10" height="12" strokeWidth="0.75" />
            <rect x="594" y="90" width="10" height="12" strokeWidth="0.75" />
            <rect x="574" y="106" width="20" height="14" />
            {/* Rooftop communication antenna */}
            <line x1="600" y1="18" x2="600" y2="28" strokeWidth="1" />
            <circle cx="600" cy="18" r="2" fill="#1DB954" />

            {/* Modernist Stepped HQ Complex (y: 22 to 120 -> height: 98) */}
            <rect x="630" y="22" width="65" height="98" />
            {/* Architectural horizontal ribbon louvers */}
            <line x1="630" y1="36" x2="695" y2="36" strokeWidth="0.75" />
            <line x1="630" y1="50" x2="695" y2="50" strokeWidth="0.75" />
            <line x1="630" y1="64" x2="695" y2="64" strokeWidth="0.75" />
            <line x1="630" y1="78" x2="695" y2="78" strokeWidth="0.75" />
            <line x1="630" y1="92" x2="695" y2="92" strokeWidth="0.75" />
            <line x1="630" y1="106" x2="695" y2="106" strokeWidth="0.75" />
            {/* Vertical Mullions */}
            <line x1="652" y1="22" x2="652" y2="120" strokeWidth="0.5" />
            <line x1="673" y1="22" x2="673" y2="120" strokeWidth="0.5" />
            {/* Glass Entrance Atrium */}
            <rect x="648" y="98" width="29" height="22" strokeWidth="1" fill="#1DB954" fillOpacity="0.1" />

            {/* Modern Streetlamp & Tree */}
            <line x1="712" y1="64" x2="712" y2="120" strokeWidth="1" />
            <circle cx="712" cy="64" r="1.5" fill="#1DB954" />

            {/* Modular Creative Cantilever Tower (y: 18 to 120 -> height: 102) */}
            <rect x="730" y="34" width="52" height="86" />
            <rect x="722" y="18" width="68" height="20" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.08" />
            <rect x="734" y="22" width="44" height="12" strokeWidth="0.75" />
            {/* Lower floor windows */}
            <rect x="740" y="44" width="32" height="14" strokeWidth="0.75" />
            <rect x="740" y="64" width="32" height="14" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <rect x="740" y="84" width="32" height="14" strokeWidth="0.75" />
            <rect x="746" y="104" width="20" height="16" />

            {/* Tree 4 */}
            <line x1="808" y1="78" x2="808" y2="120" strokeWidth="1" />
            <circle cx="808" cy="70" r="11" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />

            {/* High-Tech Innovation Center (y: 14 to 120 -> height: 106) */}
            <rect x="828" y="14" width="56" height="106" />
            <line x1="856" y1="14" x2="856" y2="120" strokeWidth="0.75" />
            {/* Diagonal Exo-skeleton Bracing */}
            <line x1="828" y1="34" x2="884" y2="64" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="828" y1="64" x2="884" y2="34" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="828" y1="64" x2="884" y2="94" strokeWidth="0.75" strokeOpacity="0.6" />
            <line x1="828" y1="94" x2="884" y2="64" strokeWidth="0.75" strokeOpacity="0.6" />
            {/* Rooftop spire */}
            <line x1="856" y1="4" x2="856" y2="14" strokeWidth="1" />
            <circle cx="856" cy="4" r="2" fill="#1DB954" />
          </g>

          {/* =====================================================================
              ZONE 4: PEAK PINNACLE ARCHITECTURE & SKYSCRAPERS (x: 880 - 1200)
              Towering, futuristic, elevated skyscrapers reaching apex (y ~ 6-12)
             ===================================================================== */}
          <g>
            {/* Skyscraper 1: Stepped Modernist Tower (y: 10 to 120 -> height: 110) */}
            <rect x="900" y="24" width="64" height="96" />
            <rect x="910" y="10" width="44" height="14" strokeWidth="1" />
            <line x1="932" y1="2" x2="932" y2="10" strokeWidth="1.25" />
            <circle cx="932" cy="2" r="2.5" fill="#1DB954" />
            {/* Window Grid Pattern */}
            <rect x="918" y="14" width="8" height="6" strokeWidth="0.5" />
            <rect x="938" y="14" width="8" height="6" strokeWidth="0.5" fill="#1DB954" fillOpacity="0.3" />
            
            <rect x="908" y="32" width="12" height="16" strokeWidth="0.75" />
            <rect x="926" y="32" width="12" height="16" strokeWidth="0.75" />
            <rect x="944" y="32" width="12" height="16" strokeWidth="0.75" />

            <rect x="908" y="54" width="12" height="16" strokeWidth="0.75" />
            <rect x="926" y="54" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
            <rect x="944" y="54" width="12" height="16" strokeWidth="0.75" />

            <rect x="908" y="76" width="12" height="16" strokeWidth="0.75" />
            <rect x="926" y="76" width="12" height="16" strokeWidth="0.75" />
            <rect x="944" y="76" width="12" height="16" strokeWidth="0.75" />
            <rect x="916" y="100" width="32" height="20" strokeWidth="1" />

            {/* Tree 5 & Street Beacon */}
            <line x1="980" y1="74" x2="980" y2="120" strokeWidth="1" />
            <circle cx="980" cy="68" r="9" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />
            <line x1="998" y1="58" x2="998" y2="120" strokeWidth="1" />
            <circle cx="998" cy="58" r="1.5" fill="#1DB954" />

            {/* Skyscraper 2: Iconic Angled Pinnacle Spire (y: 6 to 120 -> height: 114) */}
            <polygon points="1016,28 1045,6 1074,28" strokeWidth="1.25" />
            <rect x="1016" y="28" width="58" height="92" />
            {/* Needle Spire */}
            <line x1="1045" y1="0" x2="1045" y2="6" strokeWidth="1.5" />
            <circle cx="1045" cy="0" r="3" fill="#1DB954" />
            {/* Pinnacle Triangular Window */}
            <polygon points="1030,24 1045,12 1060,24" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            {/* Louver columns */}
            <line x1="1030" y1="36" x2="1030" y2="120" strokeWidth="0.5" />
            <line x1="1045" y1="36" x2="1045" y2="120" strokeWidth="0.75" />
            <line x1="1060" y1="36" x2="1060" y2="120" strokeWidth="0.5" />
            <line x1="1016" y1="46" x2="1074" y2="46" strokeWidth="0.75" />
            <line x1="1016" y1="62" x2="1074" y2="62" strokeWidth="0.75" />
            <line x1="1016" y1="78" x2="1074" y2="78" strokeWidth="0.75" />
            <line x1="1016" y1="94" x2="1074" y2="94" strokeWidth="0.75" />

            {/* Skyscraper 3: The Grand Peak Corporate Megatower (y: 4 to 120 -> height: 116) */}
            <rect x="1090" y="16" width="70" height="104" />
            <polygon points="1086,16 1125,4 1164,16" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.1" />
            {/* Tall Spire */}
            <line x1="1125" y1="-2" x2="1125" y2="4" strokeWidth="1.5" />
            <circle cx="1125" cy="-2" r="3.5" fill="#1DB954" />
            {/* High-density curtain wall */}
            <rect x="1100" y="24" width="12" height="16" strokeWidth="0.75" />
            <rect x="1118" y="24" width="14" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.3" />
            <rect x="1138" y="24" width="12" height="16" strokeWidth="0.75" />

            <rect x="1100" y="46" width="12" height="16" strokeWidth="0.75" />
            <rect x="1118" y="46" width="14" height="16" strokeWidth="0.75" />
            <rect x="1138" y="46" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />

            <rect x="1100" y="68" width="12" height="16" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.25" />
            <rect x="1118" y="68" width="14" height="16" strokeWidth="0.75" />
            <rect x="1138" y="68" width="12" height="16" strokeWidth="0.75" />

            <rect x="1100" y="90" width="12" height="16" strokeWidth="0.75" />
            <rect x="1118" y="90" width="14" height="16" strokeWidth="0.75" />
            <rect x="1138" y="90" width="12" height="16" strokeWidth="0.75" />
            <rect x="1110" y="106" width="30" height="14" />

            {/* Ending High-Tech Geometric Pavilion (x: 1168 - 1200) */}
            <polygon points="1170,30 1195,12 1200,16 1200,120 1170,120" strokeWidth="1.25" />
            <line x1="1170" y1="45" x2="1200" y2="45" strokeWidth="0.75" />
            <line x1="1170" y1="65" x2="1200" y2="65" strokeWidth="0.75" fill="#1DB954" />
            <line x1="1170" y1="85" x2="1200" y2="85" strokeWidth="0.75" />
            <line x1="1170" y1="105" x2="1200" y2="105" strokeWidth="0.75" />
            <circle cx="1195" cy="12" r="2" fill="#1DB954" />
          </g>
        </g>

        {/* --- Ground Datum Base Line & Progression Markers --- */}
        <line x1="0" y1="120" x2="1200" y2="120" stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-90" />
        
        {/* Progression Stage Anchor Nodes */}
        <circle cx="62" cy="120" r="2.5" fill="#1DB954" />
        <circle cx="334" cy="120" r="2.5" fill="#1DB954" />
        <circle cx="660" cy="120" r="3" fill="#1DB954" />
        <circle cx="1045" cy="120" r="3.5" fill="#1DB954" />
        <circle cx="1125" cy="120" r="4" fill="#1DB954" />
      </svg>
    </div>
  );
}
