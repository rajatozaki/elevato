import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { AnimateIn } from '@/components/ui/AnimateIn';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A selection of websites, digital experiences, and automation systems built by Elevato.',
};

export default function WorkPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <AnimateIn>
          <SectionHeading 
            title="Work" 
            description="A selection of websites, digital experiences, and automation systems built by Elevato."
          />
        </AnimateIn>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateIn key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
