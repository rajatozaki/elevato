import Link from 'next/link';
import Image from 'next/image';
import { type Project } from '@/data/projects';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link 
      href={`/work/${project.slug}`}
      className={cn(
        "group block rounded-2xl border border-border-subtle dark:border-border-subtle bg-surface/90 dark:bg-surface/90 p-4 transition-all duration-300 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-[16/10] bg-dark rounded-xl overflow-hidden mb-5 border border-border-dark/60">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3.5 right-3.5">
          <Badge label={project.status} variant={getVariantForStatus(project.status)} />
        </div>
      </div>
      <div className="px-2 pb-2">
        <span className="text-[11px] font-mono uppercase tracking-widest text-accent-dark dark:text-accent block mb-1.5 font-medium">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-text-primary dark:text-text-on-dark group-hover:text-accent-dark dark:group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary dark:text-text-muted-dark text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function getVariantForStatus(status: Project['status']): 'concept' | 'demo' | 'internal' | 'client' {
  switch (status) {
    case 'Concept Project': return 'concept';
    case 'Demonstration Project': return 'demo';
    case 'Internal Build': return 'internal';
    case 'Client Project': return 'client';
    default: return 'client';
  }
}
