import type { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { AnimateIn } from '@/components/ui/AnimateIn';
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
    <div className="py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="uppercase tracking-wider text-sm font-semibold text-text-secondary">
                {project.category}
              </span>
              <Badge label={project.status} variant="concept" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
              {project.title}
            </h1>
            
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-border-subtle mb-16">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#E5E5E0' }} 
              />
            </div>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimateIn delay={100}>
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.overview}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.approach}
                </p>
              </section>
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="border border-border-subtle px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {project.outcome}
                </p>
              </section>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={300}>
          <div className="mt-24 pt-8 border-t border-border-subtle">
            <Link 
              href="/work"
              className="inline-flex items-center font-semibold text-text-primary hover:text-accent-dark transition-colors"
            >
              ← Back to Work
            </Link>
          </div>
        </AnimateIn>
      </Container>
    </div>
  );
}
