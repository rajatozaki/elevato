import { cn } from '@/lib/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function ProcessStep({ number, title, description, isLast = false, className }: ProcessStepProps) {
  return (
    <div className={cn("flex gap-6 lg:gap-8", className)}>
      <div className="flex flex-col items-center">
        <div className="text-accent font-mono text-sm font-medium h-8 flex items-center">
          {number}
        </div>
        {!isLast && (
          <div className="w-px h-full border-l border-border-subtle mt-2 flex-1"></div>
        )}
      </div>
      <div className={cn("pb-12", !isLast && "pb-16")}>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
