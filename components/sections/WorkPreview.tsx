import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/Button';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function WorkPreview() {
  return (
    <section className="bg-starlight py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading label="Work" title="Selected Work" />
        </AnimateIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => (
            <AnimateIn key={project.slug} delay={i * 100}>
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
        
        <AnimateIn delay={300} className="mt-16 text-center">
          <Button variant="secondary" href="/work">
            View Our Work
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
