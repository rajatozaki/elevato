'use client';

import { cn } from '@/lib/utils';

interface BackgroundGridProps {
  className?: string;
  glow?: boolean;
}

export function BackgroundGrid({ className, glow = true }: BackgroundGridProps) {
  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none -z-10",
        className
      )}
      aria-hidden="true"
    >
      {/* Ambient Radial Glow Orbs */}
      {glow && (
        <>
          <div 
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[450px] md:h-[600px] rounded-full bg-accent/10 dark:bg-accent/8 blur-[120px] md:blur-[160px] animate-pulse-slow"
          />
          <div 
            className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 dark:bg-accent/4 blur-[130px]"
          />
          <div 
            className="absolute top-[60%] -right-[10%] w-[400px] h-[400px] rounded-full bg-accent/5 dark:bg-accent/4 blur-[130px]"
          />
        </>
      )}

      {/* Code Craft Technical Grid Pattern with Radial Mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-35 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_50%,transparent_100%)]"
      />

      {/* Fine Crosshair Coordinates at key intersections */}
      <div className="hidden md:block absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_25%,#000_40%,transparent_100%)]">
        <div className="absolute top-[180px] left-[15%] text-[10px] font-mono text-text-tertiary/40 dark:text-text-muted-dark/30 select-none">
          + [SYS.01] 28.6139° N
        </div>
        <div className="absolute top-[180px] right-[15%] text-[10px] font-mono text-text-tertiary/40 dark:text-text-muted-dark/30 select-none">
          + [NODE.PROD] 99.98%
        </div>
        <div className="absolute top-[480px] left-[8%] text-[10px] font-mono text-text-tertiary/30 dark:text-text-muted-dark/20 select-none">
          + [EDGE.SSR]
        </div>
        <div className="absolute top-[480px] right-[8%] text-[10px] font-mono text-text-tertiary/30 dark:text-text-muted-dark/20 select-none">
          + [AI.AUTO_FLOW]
        </div>
      </div>
    </div>
  );
}
