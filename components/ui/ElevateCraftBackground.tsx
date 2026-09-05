export function ElevateCraftBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Subtle ambient accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/[0.07] dark:bg-accent/[0.12] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/[0.04] dark:bg-accent/[0.08] rounded-full blur-3xl" />

      {/* Abstract 'Elevate' Geometric Vector Craft */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="elevate-accent-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0" />
            <stop offset="60%" stopColor="#1DB954" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.05" />
          </linearGradient>

          <pattern id="elevate-subtle-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              className="text-text-primary opacity-[0.04] dark:opacity-[0.06]"
            />
            <circle
              cx="48"
              cy="0"
              r="1.2"
              fill="currentColor"
              className="text-text-primary opacity-[0.08] dark:opacity-[0.12]"
            />
          </pattern>
        </defs>

        {/* Precision Background Grid */}
        <rect width="100%" height="100%" fill="url(#elevate-subtle-grid)" />

        {/* Ascending Elevation Curves */}
        <path
          d="M -100 820 C 300 800, 600 720, 950 580 C 1200 480, 1400 340, 1600 260"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-text-primary opacity-[0.06] dark:opacity-[0.1]"
        />

        <path
          d="M -50 740 C 350 720, 650 620, 1020 460 C 1280 340, 1480 200, 1650 120"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-text-primary opacity-[0.06] dark:opacity-[0.1]"
        />

        {/* Primary Green Elevation Trajectory */}
        <path
          d="M 0 660 C 400 640, 720 520, 1100 340 C 1350 220, 1500 100, 1700 20"
          stroke="url(#elevate-accent-gradient)"
          strokeWidth="2.5"
        />

        <path
          d="M 50 580 C 450 550, 800 420, 1180 240 C 1420 120, 1550 40, 1750 -60"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-text-primary opacity-[0.06] dark:opacity-[0.1]"
        />

        {/* Ascending Metric Vectors */}
        <line
          x1="880"
          y1="900"
          x2="1200"
          y2="0"
          stroke="#1DB954"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.45"
        />

        {/* Ascending Focus Nodes */}
        <circle cx="720" cy="520" r="3.5" fill="#1DB954" />
        <circle cx="720" cy="520" r="9" stroke="#1DB954" strokeWidth="1" strokeOpacity="0.35" />

        <circle cx="1100" cy="340" r="4.5" fill="#1DB954" />
        <circle cx="1100" cy="340" r="12" stroke="#1DB954" strokeWidth="1" strokeOpacity="0.35" />

        <circle cx="1350" cy="220" r="3.5" fill="#1DB954" />
      </svg>
    </div>
  );
}
