import { cn } from '@/lib/utils';

export function ArchitecturalSkyline({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden select-none pointer-events-none relative", className)}>
      <svg
        viewBox="0 0 1200 130"
        className="w-full h-auto text-text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient for background skyline depth */}
          <linearGradient id="skyline-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* --- Background Silhouette Layer --- */}
        <g className="opacity-20 dark:opacity-25" stroke="currentColor" strokeWidth="0.75">
          {/* Distant building 1 */}
          <rect x="40" y="30" width="45" height="90" fill="url(#skyline-fade)" />
          {/* Distant high-rise 2 */}
          <rect x="110" y="15" width="55" height="105" fill="url(#skyline-fade)" />
          <line x1="137.5" y1="5" x2="137.5" y2="15" />
          {/* Distant pitched roof */}
          <polygon points="260,50 290,25 320,50" fill="url(#skyline-fade)" />
          <rect x="265" y="50" width="50" height="70" fill="url(#skyline-fade)" />
          {/* Distant office block */}
          <rect x="440" y="25" width="70" height="95" fill="url(#skyline-fade)" />
          {/* Distant communications tower */}
          <line x1="580" y1="10" x2="580" y2="120" strokeDasharray="3 3" />
          <circle cx="580" cy="10" r="2.5" fill="#1DB954" />
          {/* Distant complex */}
          <rect x="720" y="35" width="50" height="85" fill="url(#skyline-fade)" />
          <rect x="790" y="20" width="60" height="100" fill="url(#skyline-fade)" />
          <rect x="940" y="30" width="45" height="90" fill="url(#skyline-fade)" />
          <polygon points="1040,45 1075,18 1110,45" fill="url(#skyline-fade)" />
          <rect x="1045" y="45" width="60" height="75" fill="url(#skyline-fade)" />
        </g>

        {/* --- Foreground Architectural Detailed Layer --- */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 dark:opacity-60">
          
          {/* Segment 01: Modernist Townhouse & Streetlamp */}
          <g>
            {/* Street Lamp */}
            <line x1="25" y1="65" x2="25" y2="120" strokeWidth="1" />
            <path d="M 22 65 C 22 60, 28 60, 28 65 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
            <circle cx="25" cy="65" r="1.5" fill="#1DB954" />

            {/* Building 1: Stepped Modern Facade */}
            <rect x="55" y="55" width="40" height="65" />
            {/* Windows */}
            <rect x="62" y="65" width="8" height="12" strokeWidth="0.75" />
            <rect x="78" y="65" width="8" height="12" strokeWidth="0.75" />
            <rect x="62" y="85" width="8" height="12" strokeWidth="0.75" />
            <rect x="78" y="85" width="8" height="12" strokeWidth="0.75" />
            {/* Entrance Door */}
            <rect x="70" y="104" width="10" height="16" fill="#1DB954" fillOpacity="0.15" strokeWidth="1" />

            {/* Tree 1 */}
            <line x1="108" y1="85" x2="108" y2="120" strokeWidth="1" />
            <circle cx="108" cy="80" r="9" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
          </g>

          {/* Segment 02: Classic Pitched-Roof House & Solar Panel */}
          <g>
            {/* House with Chimney */}
            <polygon points="135,65 165,40 195,65" />
            <rect x="140" y="65" width="50" height="55" />
            <rect x="178" y="42" width="6" height="12" />
            {/* Attic Window */}
            <circle cx="165" cy="54" r="4" strokeWidth="0.75" />
            {/* Main windows */}
            <rect x="146" y="74" width="12" height="14" strokeWidth="0.75" />
            <line x1="152" y1="74" x2="152" y2="88" strokeWidth="0.5" />
            <line x1="146" y1="81" x2="158" y2="81" strokeWidth="0.5" />

            <rect x="172" y="74" width="12" height="14" strokeWidth="0.75" />
            <line x1="178" y1="74" x2="178" y2="88" strokeWidth="0.5" />
            <line x1="172" y1="81" x2="184" y2="81" strokeWidth="0.5" />
            {/* Front Door */}
            <rect x="159" y="98" width="12" height="22" strokeWidth="1" fill="#1DB954" fillOpacity="0.2" />

            {/* Bicycle Silhouette */}
            <circle cx="210" cy="114" r="5" strokeWidth="0.75" />
            <circle cx="224" cy="114" r="5" strokeWidth="0.75" />
            <line x1="210" y1="114" x2="217" y2="110" strokeWidth="0.75" />
            <line x1="217" y1="110" x2="224" y2="114" strokeWidth="0.75" />
            <line x1="217" y1="110" x2="215" y2="104" strokeWidth="0.75" />
            <line x1="213" y1="104" x2="218" y2="104" strokeWidth="0.75" />
          </g>

          {/* Segment 03: Mid-Rise Glass Tech Studio */}
          <g>
            <rect x="250" y="38" width="55" height="82" />
            {/* Horizontal architectural louvers / curtain wall */}
            <line x1="250" y1="52" x2="305" y2="52" strokeWidth="0.75" />
            <line x1="250" y1="66" x2="305" y2="66" strokeWidth="0.75" />
            <line x1="250" y1="80" x2="305" y2="80" strokeWidth="0.75" />
            <line x1="250" y1="94" x2="305" y2="94" strokeWidth="0.75" />
            <line x1="250" y1="108" x2="305" y2="108" strokeWidth="0.75" />
            {/* Vertical Mullions */}
            <line x1="268" y1="38" x2="268" y2="120" strokeWidth="0.5" />
            <line x1="287" y1="38" x2="287" y2="120" strokeWidth="0.5" />
            {/* Rooftop HVAC / antenna */}
            <rect x="265" y="32" width="14" height="6" strokeWidth="0.75" />
            <line x1="292" y1="24" x2="292" y2="38" strokeWidth="1" />
            <circle cx="292" cy="24" r="1.5" fill="#1DB954" />

            {/* Tree 2 */}
            <line x1="325" y1="82" x2="325" y2="120" strokeWidth="1" />
            <polygon points="325,70 316,86 334,86" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
            <polygon points="325,80 314,96 336,96" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
          </g>

          {/* Segment 04: Urban Centerpiece & Clock Tower */}
          <g>
            <rect x="360" y="48" width="35" height="72" />
            <rect x="368" y="58" width="19" height="20" strokeWidth="0.75" />
            <rect x="368" y="86" width="19" height="20" strokeWidth="0.75" />

            {/* Clock / Datum Tower */}
            <rect x="410" y="22" width="30" height="98" />
            <polygon points="410,22 425,8 440,22" />
            {/* Clock face */}
            <circle cx="425" cy="36" r="6" strokeWidth="0.75" fill="currentColor" fillOpacity="0.04" />
            <line x1="425" y1="36" x2="425" y2="33" strokeWidth="0.75" />
            <line x1="425" y1="36" x2="428" y2="36" strokeWidth="0.75" />
            {/* Tower windows */}
            <rect x="418" y="52" width="14" height="24" rx="7" strokeWidth="0.75" />
            <rect x="418" y="84" width="14" height="24" rx="7" strokeWidth="0.75" />

            {/* Street Bench */}
            <line x1="458" y1="110" x2="475" y2="110" strokeWidth="1.5" />
            <line x1="460" y1="110" x2="460" y2="120" strokeWidth="1" />
            <line x1="473" y1="110" x2="473" y2="120" strokeWidth="1" />
            <line x1="458" y1="106" x2="475" y2="106" strokeWidth="1" />
          </g>

          {/* Segment 05: Modern Residential Rowhouses */}
          <g>
            {/* Rowhouse A */}
            <polygon points="495,68 518,48 540,68" />
            <rect x="500" y="68" width="36" height="52" />
            <rect x="508" y="76" width="20" height="15" strokeWidth="0.75" />
            <rect x="512" y="99" width="12" height="21" fill="#1DB954" fillOpacity="0.15" />

            {/* Rowhouse B */}
            <polygon points="540,68 563,48 585,68" />
            <rect x="545" y="68" width="36" height="52" />
            <rect x="553" y="76" width="20" height="15" strokeWidth="0.75" />
            <rect x="557" y="99" width="12" height="21" fill="#1DB954" fillOpacity="0.15" />

            {/* Street Lamp */}
            <line x1="605" y1="65" x2="605" y2="120" strokeWidth="1" />
            <path d="M 602 65 C 602 60, 608 60, 608 65 Z" fill="#1DB954" fillOpacity="0.4" strokeWidth="0.75" />
            <circle cx="605" cy="65" r="1.5" fill="#1DB954" />
          </g>

          {/* Segment 06: Contemporary Headquarters */}
          <g>
            <rect x="630" y="32" width="65" height="88" />
            {/* Grid Windows */}
            <rect x="640" y="42" width="10" height="12" strokeWidth="0.75" />
            <rect x="657" y="42" width="10" height="12" strokeWidth="0.75" />
            <rect x="674" y="42" width="10" height="12" strokeWidth="0.75" />

            <rect x="640" y="60" width="10" height="12" strokeWidth="0.75" />
            <rect x="657" y="60" width="10" height="12" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <rect x="674" y="60" width="10" height="12" strokeWidth="0.75" />

            <rect x="640" y="78" width="10" height="12" strokeWidth="0.75" />
            <rect x="657" y="78" width="10" height="12" strokeWidth="0.75" />
            <rect x="674" y="78" width="10" height="12" strokeWidth="0.75" />

            {/* Entrance Lobby */}
            <rect x="650" y="98" width="25" height="22" strokeWidth="1" />
            <line x1="662.5" y1="98" x2="662.5" y2="120" strokeWidth="0.75" />

            {/* Tree 3 */}
            <line x1="715" y1="80" x2="715" y2="120" strokeWidth="1" />
            <circle cx="715" cy="74" r="11" strokeWidth="1" fill="#1DB954" fillOpacity="0.12" />
          </g>

          {/* Segment 07: Modular Loft & Urban Detail */}
          <g>
            <rect x="745" y="50" width="48" height="70" />
            <rect x="755" y="60" width="28" height="16" strokeWidth="0.75" />
            <line x1="769" y1="60" x2="769" y2="76" strokeWidth="0.5" />
            <rect x="755" y="84" width="28" height="16" strokeWidth="0.75" />
            <line x1="769" y1="84" x2="769" y2="100" strokeWidth="0.5" />

            {/* Pitched house with garage */}
            <polygon points="810,65 835,42 860,65" />
            <rect x="815" y="65" width="40" height="55" />
            <rect x="823" y="74" width="10" height="12" strokeWidth="0.75" />
            <rect x="840" y="74" width="10" height="12" strokeWidth="0.75" />
            <rect x="825" y="96" width="20" height="24" strokeWidth="0.75" fill="currentColor" fillOpacity="0.04" />
            <line x1="825" y1="102" x2="845" y2="102" strokeWidth="0.5" />
            <line x1="825" y1="108" x2="845" y2="108" strokeWidth="0.5" />
            <line x1="825" y1="114" x2="845" y2="114" strokeWidth="0.5" />
          </g>

          {/* Segment 08: Tall Minimalist Tower */}
          <g>
            <rect x="880" y="26" width="45" height="94" />
            <line x1="880" y1="45" x2="925" y2="45" strokeWidth="0.75" />
            <line x1="880" y1="65" x2="925" y2="65" strokeWidth="0.75" />
            <line x1="880" y1="85" x2="925" y2="85" strokeWidth="0.75" />
            <line x1="880" y1="105" x2="925" y2="105" strokeWidth="0.75" />
            {/* Spire */}
            <line x1="902.5" y1="12" x2="902.5" y2="26" strokeWidth="1" />
            <circle cx="902.5" cy="12" r="2" fill="#1DB954" />

            {/* Tree 4 & Street Lamp */}
            <line x1="945" y1="84" x2="945" y2="120" strokeWidth="1" />
            <circle cx="945" cy="78" r="9" strokeWidth="1" fill="#1DB954" fillOpacity="0.15" />
            
            <line x1="970" y1="65" x2="970" y2="120" strokeWidth="1" />
            <circle cx="970" cy="65" r="1.5" fill="#1DB954" />
          </g>

          {/* Segment 09: Stepped Residential Complex */}
          <g>
            <polygon points="995,70 1020,48 1045,70" />
            <rect x="1000" y="70" width="40" height="50" />
            <rect x="1008" y="78" width="10" height="12" strokeWidth="0.75" />
            <rect x="1024" y="78" width="10" height="12" strokeWidth="0.75" />

            <rect x="1055" y="44" width="50" height="76" />
            <rect x="1065" y="54" width="12" height="14" strokeWidth="0.75" />
            <rect x="1083" y="54" width="12" height="14" strokeWidth="0.75" />
            <rect x="1065" y="76" width="12" height="14" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <rect x="1083" y="76" width="12" height="14" strokeWidth="0.75" />

            {/* Tree 5 */}
            <line x1="1125" y1="85" x2="1125" y2="120" strokeWidth="1" />
            <circle cx="1125" cy="78" r="10" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
          </g>

          {/* Segment 10: Ending Pavilion */}
          <g>
            <rect x="1145" y="60" width="35" height="60" />
            <polygon points="1140,60 1162.5,45 1185,60" />
            <rect x="1155" y="70" width="15" height="20" strokeWidth="0.75" />
          </g>
        </g>

        {/* --- Ground Datum Base Line --- */}
        <line x1="0" y1="120" x2="1200" y2="120" stroke="currentColor" strokeWidth="1.5" className="text-border-subtle opacity-80" />
        <circle cx="60" cy="120" r="2" fill="#1DB954" />
        <circle cx="425" cy="120" r="2" fill="#1DB954" />
        <circle cx="715" cy="120" r="2" fill="#1DB954" />
        <circle cx="1065" cy="120" r="2" fill="#1DB954" />
      </svg>
    </div>
  );
}
