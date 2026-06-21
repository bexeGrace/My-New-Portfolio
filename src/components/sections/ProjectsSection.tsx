import ScrollAnimation from '@/components/ScrollAnimation';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <ScrollAnimation direction="down">
          <SectionTitle
            title="Featured Projects"
            subtitle="Selected builds where design, engineering, and product thinking come together."
          />
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.name} direction="up" delay={index * 100}>
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
