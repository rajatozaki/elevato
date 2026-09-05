import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
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
      className={cn("group block", className)}
    >
      <div className="relative aspect-[16/10] bg-dark rounded-lg overflow-hidden mb-6">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute top-4 right-4">
          <Badge label={project.status} variant={getVariantForStatus(project.status)} />
        </div>
      </div>
      <div>
        <span className="text-xs uppercase tracking-widest text-text-secondary block mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary line-clamp-2">
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
