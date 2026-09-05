import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-24 lg:py-32 relative overflow-hidden">
      <Container>
        <AnimateIn>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs uppercase tracking-widest font-semibold text-accent-dark dark:text-accent">
                {project.category}
              </span>
              <span className="text-text-tertiary">/</span>
              <Badge label={project.status} variant="concept" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-8 text-text-primary">
              {project.title}
            </h1>
            
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border-subtle bg-dark mb-16 shadow-lg">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimateIn delay={100}>
            <div className="space-y-10 p-8 sm:p-10 rounded-3xl border border-border-subtle bg-surface shadow-xs">
              <section>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">01 {'//'} Scope</span>
                <h2 className="text-2xl font-bold mb-3 text-text-primary">Overview</h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {project.overview}
                </p>
              </section>
              <section>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">02 {'//'} Problem</span>
                <h2 className="text-2xl font-bold mb-3 text-text-primary">The Challenge</h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              <section>
                <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">03 {'//'} Method</span>
                <h2 className="text-2xl font-bold mb-3 text-text-primary">Our Approach</h2>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {project.approach}
                </p>
              </section>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="space-y-10 p-8 sm:p-10 rounded-3xl border border-border-subtle bg-surface shadow-xs flex flex-col justify-between">
              <div className="space-y-10">
                <section>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">04 {'//'} Build</span>
                  <h2 className="text-2xl font-bold mb-3 text-text-primary">The Solution</h2>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </section>
                
                <section>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">05 {'//'} Stack</span>
                  <h2 className="text-2xl font-bold mb-3 text-text-primary">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="border border-border-subtle bg-surface-elevated px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-dark dark:text-accent font-semibold block mb-2">06 {'//'} Result</span>
                  <h2 className="text-2xl font-bold mb-3 text-text-primary">Outcome</h2>
                  <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {project.outcome}
                  </p>
                </section>
              </div>

              <div className="pt-8 border-t border-border-subtle">
                <Link 
                  href="/work"
                  className="inline-flex items-center text-sm font-mono font-semibold text-text-primary hover:text-accent-dark dark:hover:text-accent transition-colors"
                >
                  ← Back to all projects
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Container>
    </div>
  );
}
