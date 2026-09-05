export function ElevateCraftBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-[400px] h-[400px] bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl" />

      {/* Abstract 'Elevate' Geometric Vector Craft */}
      <svg
        className="absolute inset-0 w-full h-full opacity-70 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          {/* Gradients for ascending lines */}
          <linearGradient id="elevate-line-1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1DB954" stopOpacity="0" />
            <stop offset="50%" stopColor="#1DB954" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1DB954" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="elevate-line-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>

          <pattern id="elevate-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeOpacity="0.05"
            />
            <circle cx="48" cy="0" r="1.5" fill="currentColor" fillOpacity="0.08" />
          </pattern>
        </defs>

        {/* Subtle Precision Grid */}
        <rect width="100%" height="100%" fill="url(#elevate-grid)" className="text-text-primary" />

        {/* Ascending Stepped Elevation Planes & Curves */}
        <path
          d="M -100 800 C 300 780, 600 700, 950 560 C 1200 460, 1400 320, 1600 240"
          stroke="url(#elevate-line-2)"
          strokeWidth="1.5"
          className="text-text-primary"
        />

        <path
          d="M -50 720 C 350 700, 650 600, 1020 440 C 1280 320, 1480 180, 1650 100"
          stroke="url(#elevate-line-2)"
          strokeWidth="1.5"
          className="text-text-primary"
        />

        {/* Signature Green Accent Elevation Vector */}
        <path
          d="M 0 640 C 400 620, 720 500, 1100 320 C 1350 200, 1500 80, 1700 0"
          stroke="url(#elevate-line-1)"
          strokeWidth="2.5"
        />

        <path
          d="M 50 560 C 450 530, 800 400, 1180 220 C 1420 100, 1550 20, 1750 -80"
          stroke="url(#elevate-line-2)"
          strokeWidth="1.5"
          className="text-text-primary"
        />

        {/* Vertical Ascending Rays (Abstract Ascension) */}
        <line x1="720" y1="900" x2="1050" y2="0" stroke="url(#elevate-line-2)" strokeWidth="1" strokeDasharray="6 6" className="text-text-primary" />
        <line x1="880" y1="900" x2="1200" y2="0" stroke="url(#elevate-line-1)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="1040" y1="900" x2="1350" y2="0" stroke="url(#elevate-line-2)" strokeWidth="1" strokeDasharray="6 6" className="text-text-primary" />

        {/* Ascending Nodes (Key Elevation Points) */}
        <circle cx="720" cy="500" r="4" fill="#1DB954" />
        <circle cx="720" cy="500" r="10" stroke="#1DB954" strokeWidth="1" strokeOpacity="0.4" />

        <circle cx="1100" cy="320" r="5" fill="#1DB954" />
        <circle cx="1100" cy="320" r="14" stroke="#1DB954" strokeWidth="1" strokeOpacity="0.4" />

        <circle cx="1350" cy="200" r="4" fill="#1DB954" />
      </svg>

      {/* Clean Edge Blending Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-starlight dark:to-dark" />
    </div>
  );
}
