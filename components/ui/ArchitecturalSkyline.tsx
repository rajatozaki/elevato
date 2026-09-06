import { cn } from '@/lib/utils';

export function BusinessInfrastructureVisual({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-hidden select-none relative", className)}>
      <svg
        viewBox="0 0 1200 140"
        className="w-full h-auto text-text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>{`
            @keyframes dataHighway {
              0% { stroke-dashoffset: 48; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes dataPacket1 {
              0% { transform: translateX(0px); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(290px); opacity: 0; }
            }
            @keyframes dataPacket2 {
              0% { transform: translateX(0px); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(290px); opacity: 0; }
            }
            @keyframes dataPacket3 {
              0% { transform: translateX(0px); opacity: 0; }
              15% { opacity: 1; }
              85% { opacity: 1; }
              100% { transform: translateX(290px); opacity: 0; }
            }
            @keyframes radarRing {
              0% { r: 3px; opacity: 0.9; stroke-width: 1.5; }
              100% { r: 14px; opacity: 0; stroke-width: 0.5; }
            }
            @keyframes statusBlink {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            .stream-line {
              animation: dataHighway 3s linear infinite;
            }
            .stream-line-slow {
              animation: dataHighway 6s linear infinite;
            }
            .packet-node-1 {
              animation: dataPacket1 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
            .packet-node-2 {
              animation: dataPacket2 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.9s;
            }
            .packet-node-3 {
              animation: dataPacket3 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.8s;
            }
            .beacon-ping {
              animation: radarRing 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
              transform-origin: center;
            }
            .beacon-ping-delayed {
              animation: radarRing 2.4s cubic-bezier(0, 0, 0.2, 1) infinite 1.2s;
              transform-origin: center;
            }
            .status-indicator {
              animation: statusBlink 2s ease-in-out infinite;
            }
          `}</style>

          {/* Gradients for infrastructure bus and glow */}
          <linearGradient id="infra-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#1DB954" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="module-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="bus-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0.05" />
            <stop offset="30%" stopColor="#1DB954" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#1DB954" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* --- Background Architectural Grid & Coordinate Tick Marks --- */}
        <g className="opacity-25 dark:opacity-30" stroke="currentColor" strokeWidth="0.75">
          {/* Subtle Grid Crosses */}
          <path d="M 30 18 L 30 24 M 27 21 L 33 21" />
          <path d="M 310 18 L 310 24 M 307 21 L 313 21" />
          <path d="M 600 18 L 600 24 M 597 21 L 603 21" />
          <path d="M 890 18 L 890 24 M 887 21 L 893 21" />
          <path d="M 1170 18 L 1170 24 M 1167 21 L 1173 21" />

          {/* Subordinate Grid Lines */}
          <line x1="20" y1="21" x2="1180" y2="21" strokeDasharray="2 6" strokeOpacity="0.4" />
          <line x1="20" y1="125" x2="1180" y2="125" strokeOpacity="0.5" />
        </g>

        {/* --- Main Infrastructure Primary Data Arteries --- */}
        <g stroke="currentColor" strokeWidth="1">
          {/* Upper Secondary Bus (y = 48) */}
          <path
            d="M 145 48 L 435 48 L 725 48 L 1035 48"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeDasharray="4 6"
            className="stream-line-slow"
          />

          {/* Core Highway Bus (y = 76) */}
          <path
            d="M 60 76 L 260 76 L 285 76 L 315 76 L 550 76 L 575 76 L 605 76 L 840 76 L 865 76 L 895 76 L 1140 76"
            stroke="url(#bus-pulse)"
            strokeWidth="1.75"
          />

          {/* Animated Active Data Stream Track */}
          <path
            d="M 60 76 L 1140 76"
            stroke="#1DB954"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeDasharray="8 24"
            className="stream-line"
          />
        </g>

        {/* --- Moving Animated Signal Packets Across Arteries --- */}
        <g>
          {/* Packet 1: Ingestion -> Compute Engine */}
          <g className="packet-node-1">
            <circle cx="145" cy="76" r="3.5" fill="#1DB954" />
            <circle cx="145" cy="76" r="6" stroke="#1DB954" strokeWidth="0.75" opacity="0.6" />
          </g>

          {/* Packet 2: Compute Engine -> Event Router */}
          <g className="packet-node-2">
            <circle cx="435" cy="76" r="3.5" fill="#1DB954" />
            <circle cx="435" cy="76" r="6" stroke="#1DB954" strokeWidth="0.75" opacity="0.6" />
          </g>

          {/* Packet 3: Event Router -> Endpoints Sync */}
          <g className="packet-node-3">
            <circle cx="725" cy="76" r="3.5" fill="#1DB954" />
            <circle cx="725" cy="76" r="6" stroke="#1DB954" strokeWidth="0.75" opacity="0.6" />
          </g>
        </g>

        {/* =====================================================================
            ZONE 1: GLOBAL EDGE INGESTION & CLIENT TOUCHPOINTS (x: 40 - 260)
           ===================================================================== */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
          {/* Module Enclosure */}
          <rect x="40" y="30" width="210" height="82" rx="8" fill="url(#module-fill)" strokeWidth="1" className="text-border-subtle" />
          
          {/* Ingress Edge Gateway Server Block */}
          <rect x="52" y="42" width="76" height="58" rx="4" strokeWidth="1" />
          {/* Rack Blade Slots */}
          <line x1="58" y1="52" x2="120" y2="52" strokeWidth="0.75" strokeOpacity="0.6" />
          <line x1="58" y1="62" x2="120" y2="62" strokeWidth="0.75" strokeOpacity="0.6" />
          <line x1="58" y1="72" x2="120" y2="72" strokeWidth="0.75" strokeOpacity="0.6" />
          <line x1="58" y1="82" x2="120" y2="82" strokeWidth="0.75" strokeOpacity="0.6" />
          
          {/* Ingress LED Status Beacons */}
          <circle cx="62" cy="52" r="1.5" fill="#1DB954" className="status-indicator" />
          <circle cx="62" cy="62" r="1.5" fill="#1DB954" />
          <circle cx="62" cy="72" r="1.5" fill="#1DB954" className="status-indicator" />
          <circle cx="62" cy="82" r="1.5" fill="#1DB954" />

          {/* Device Touchpoints Schematic (Mobile / Desktop Ingress) */}
          <rect x="144" y="44" width="28" height="40" rx="3" strokeWidth="0.75" />
          <line x1="144" y1="74" x2="172" y2="74" strokeWidth="0.5" />
          <circle cx="158" cy="79" r="1.5" strokeWidth="0.5" />

          <rect x="180" y="52" width="18" height="32" rx="2" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.08" />
          <circle cx="189" cy="78" r="1" fill="#1DB954" />

          {/* Connecting Traces */}
          <path d="M 128 62 L 144 62" strokeWidth="0.75" />
          <path d="M 172 68 L 180 68" strokeWidth="0.75" />
          <path d="M 198 68 L 220 68 L 220 76 L 250 76" strokeWidth="1" />

          {/* Node Output Pin & Pulse Beacon */}
          <circle cx="250" cy="76" r="3" fill="#1DB954" />
          <circle cx="250" cy="76" r="8" stroke="#1DB954" className="beacon-ping" fill="none" />

          {/* Typography Labels */}
          <text x="54" y="104" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6" stroke="none">
            EDGE // INGRESS
          </text>
          <text x="144" y="104" fontSize="8" fontFamily="monospace" fill="#1DB954" stroke="none" fontWeight="bold">
            0.4s DNS
          </text>
        </g>

        {/* =====================================================================
            ZONE 2: NEXT.JS COMPUTE & APPLICATION ARCHITECTURE (x: 330 - 550)
           ===================================================================== */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
          {/* Module Enclosure */}
          <rect x="330" y="30" width="210" height="82" rx="8" fill="url(#module-fill)" strokeWidth="1" className="text-border-subtle" />

          {/* Central Compute Micro-Processor Chip */}
          <rect x="390" y="44" width="70" height="54" rx="4" strokeWidth="1.25" fill="currentColor" fillOpacity="0.03" />
          <rect x="402" y="54" width="46" height="34" rx="2" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.1" />
          
          {/* Processor Bus Leads */}
          <line x1="390" y1="52" x2="382" y2="52" strokeWidth="0.75" />
          <line x1="390" y1="62" x2="382" y2="62" strokeWidth="0.75" />
          <line x1="390" y1="72" x2="382" y2="72" strokeWidth="0.75" />
          <line x1="390" y1="82" x2="382" y2="82" strokeWidth="0.75" />

          <line x1="460" y1="52" x2="468" y2="52" strokeWidth="0.75" />
          <line x1="460" y1="62" x2="468" y2="62" strokeWidth="0.75" />
          <line x1="460" y1="72" x2="468" y2="72" strokeWidth="0.75" />
          <line x1="460" y1="82" x2="468" y2="82" strokeWidth="0.75" />

          <line x1="410" y1="44" x2="410" y2="38" strokeWidth="0.75" />
          <line x1="425" y1="44" x2="425" y2="38" strokeWidth="0.75" />
          <line x1="440" y1="44" x2="440" y2="38" strokeWidth="0.75" />

          {/* Memory / SSG Cache Bank */}
          <rect x="345" y="46" width="30" height="18" rx="2" strokeWidth="0.75" />
          <rect x="345" y="68" width="30" height="18" rx="2" strokeWidth="0.75" />
          <line x1="352" y1="55" x2="368" y2="55" strokeWidth="0.5" />
          <line x1="352" y1="77" x2="368" y2="77" strokeWidth="0.5" />

          {/* Optimizer Core Node */}
          <rect x="476" y="50" width="46" height="42" rx="3" strokeWidth="0.75" />
          <circle cx="499" cy="65" r="7" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
          <line x1="499" y1="58" x2="499" y2="72" strokeWidth="0.75" />
          <line x1="492" y1="65" x2="506" y2="65" strokeWidth="0.75" />

          {/* Node Output Pin */}
          <circle cx="540" cy="76" r="3" fill="#1DB954" />
          <circle cx="540" cy="76" r="8" stroke="#1DB954" className="beacon-ping-delayed" fill="none" />

          {/* Typography Labels */}
          <text x="344" y="104" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6" stroke="none">
            APP ROUTER // SSG
          </text>
          <text x="474" y="104" fontSize="8" fontFamily="monospace" fill="#1DB954" stroke="none" fontWeight="bold">
            100 LIGHTHOUSE
          </text>
        </g>

        {/* =====================================================================
            ZONE 3: EVENT BROKER & REAL-TIME TRIAGE GATEWAY (x: 620 - 840)
           ===================================================================== */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
          {/* Module Enclosure */}
          <rect x="620" y="30" width="210" height="82" rx="8" fill="url(#module-fill)" strokeWidth="1" className="text-border-subtle" />

          {/* Decision Logic Diamond (Triage / Qualification Gateway) */}
          <polygon points="695,44 725,64 695,84 665,64" strokeWidth="1.25" fill="#1DB954" fillOpacity="0.12" />
          <circle cx="695" cy="64" r="3" fill="#1DB954" />

          {/* Webhook FIFO Queue Stack */}
          <rect x="635" y="48" width="20" height="10" rx="1.5" strokeWidth="0.75" />
          <rect x="635" y="61" width="20" height="10" rx="1.5" strokeWidth="0.75" />
          <rect x="635" y="74" width="20" height="10" rx="1.5" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
          
          <path d="M 655 66 L 665 64" strokeWidth="0.75" />

          {/* Branching Qualified Output Channels */}
          {/* Route A: High Priority / Instant Alert */}
          <path d="M 725 64 L 755 52 L 785 52" strokeWidth="1" stroke="#1DB954" />
          <circle cx="785" cy="52" r="2.5" fill="#1DB954" />

          {/* Route B: System Sync */}
          <path d="M 725 64 L 755 76 L 785 76" strokeWidth="1" />
          <circle cx="785" cy="76" r="2.5" fill="#1DB954" />

          {/* Route C: Analytics Archive */}
          <path d="M 725 64 L 755 88 L 785 88" strokeWidth="0.75" strokeOpacity="0.6" />
          <circle cx="785" cy="88" r="2" fill="currentColor" fillOpacity="0.4" />

          {/* Channel Filters Matrix */}
          <rect x="745" y="46" width="24" height="12" rx="2" strokeWidth="0.5" fill="currentColor" fillOpacity="0.04" />
          <text x="748" y="55" fontSize="6" fontFamily="monospace" fill="#1DB954" stroke="none">FAST</text>

          {/* Node Output Pin */}
          <circle cx="830" cy="76" r="3" fill="#1DB954" />
          <circle cx="830" cy="76" r="8" stroke="#1DB954" className="beacon-ping" fill="none" />

          {/* Typography Labels */}
          <text x="634" y="104" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6" stroke="none">
            WEBHOOK // TRIAGE
          </text>
          <text x="750" y="104" fontSize="8" fontFamily="monospace" fill="#1DB954" stroke="none" fontWeight="bold">
            &lt; 40ms EVAL
          </text>
        </g>

        {/* =====================================================================
            ZONE 4: ENTERPRISE DISPATCH & AUTOMATION ENDPOINTS (x: 910 - 1170)
           ===================================================================== */}
        <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="opacity-85 dark:opacity-90">
          {/* Module Enclosure */}
          <rect x="910" y="30" width="250" height="82" rx="8" fill="url(#module-fill)" strokeWidth="1" className="text-border-subtle" />

          {/* Instant Push Alert Beacon (WhatsApp / Telegram Dispatch) */}
          <g transform="translate(930, 42)">
            <line x1="20" y1="42" x2="20" y2="10" strokeWidth="1.25" />
            <circle cx="20" cy="10" r="3" fill="#1DB954" />
            {/* Radiating Broadcast Waves */}
            <path d="M 13 5 C 17 2, 23 2, 27 5" stroke="#1DB954" strokeWidth="0.75" fill="none" />
            <path d="M 9 1 C 15 -3, 25 -3, 31 1" stroke="#1DB954" strokeWidth="0.75" fill="none" opacity="0.6" />
            <rect x="8" y="42" width="24" height="8" rx="2" strokeWidth="0.75" />
            <text x="4" y="48" fontSize="6" fontFamily="monospace" fill="currentColor" stroke="none">API</text>
          </g>

          {/* CRM & Database Auto-Sync Storage Matrix */}
          <g transform="translate(1000, 44)">
            {/* Cylinder 1 */}
            <ellipse cx="22" cy="8" rx="20" ry="6" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.15" />
            <path d="M 2 8 L 2 20 C 2 24, 42 24, 42 20 L 42 8" strokeWidth="0.75" fill="none" />
            <path d="M 2 20 L 2 32 C 2 36, 42 36, 42 32 L 42 20" strokeWidth="0.75" fill="none" />
            <path d="M 2 32 L 2 44 C 2 48, 42 48, 42 44 L 42 32" strokeWidth="0.75" fill="none" />
            
            {/* Sync Activity LEDs */}
            <circle cx="12" cy="18" r="1.25" fill="#1DB954" />
            <circle cx="12" cy="30" r="1.25" fill="#1DB954" className="status-indicator" />
            <circle cx="12" cy="42" r="1.25" fill="#1DB954" />
          </g>

          {/* Founder Delivery & Repository Transfer Vault */}
          <g transform="translate(1075, 46)">
            <rect x="0" y="0" width="56" height="42" rx="4" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
            <line x1="0" y1="12" x2="56" y2="12" strokeWidth="0.75" />
            <circle cx="8" cy="6" r="1.5" fill="#1DB954" />
            <circle cx="14" cy="6" r="1.5" fill="#1DB954" />
            <circle cx="20" cy="6" r="1.5" fill="#1DB954" />
            
            {/* Key/Lock Glyph */}
            <circle cx="28" cy="24" r="5" strokeWidth="0.75" fill="#1DB954" fillOpacity="0.2" />
            <path d="M 28 29 L 28 35 M 28 32 L 32 32" strokeWidth="0.75" />
          </g>

          {/* Typography Labels */}
          <text x="924" y="104" fontSize="8" fontFamily="monospace" fill="currentColor" opacity="0.6" stroke="none">
            DISPATCH // CRM SYNC
          </text>
          <text x="1074" y="104" fontSize="8" fontFamily="monospace" fill="#1DB954" stroke="none" fontWeight="bold">
            &lt; 2 MIN ALERT
          </text>
        </g>

        {/* --- Baseline Progression Datum Strip --- */}
        <g stroke="currentColor" strokeWidth="1" className="opacity-90">
          <line x1="20" y1="125" x2="1180" y2="125" stroke="currentColor" strokeOpacity="0.2" />
          
          {/* Station Synchronizer Markers */}
          <circle cx="145" cy="125" r="2.5" fill="#1DB954" />
          <circle cx="435" cy="125" r="2.5" fill="#1DB954" />
          <circle cx="725" cy="125" r="2.5" fill="#1DB954" />
          <circle cx="1035" cy="125" r="3" fill="#1DB954" />
        </g>
      </svg>
    </div>
  );
}

// Backward compatibility alias
export const ArchitecturalSkyline = BusinessInfrastructureVisual;

