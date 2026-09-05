import Link from 'next/link';
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, href, className }: ServiceCardProps) {
  const content = (
    <div className={cn(
      "p-6 lg:p-8 rounded-xl border border-border-subtle bg-starlight h-full flex flex-col transition-colors",
      href && "group-hover:border-accent/30",
      className
    )}>
      <div className="text-accent mb-6 w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm flex-1">{description}</p>
      
      {href && (
        <div className="mt-6 flex items-center text-sm font-medium text-accent">
          Learn more
          <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full group">
        {content}
      </Link>
    );
  }

  return content;
}
