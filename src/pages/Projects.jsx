import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SEO from "../components/SEO.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { useContentStore } from "../store/useContentStore.js";

const Projects = () => {
  const projects = useContentStore((s) => s.projects);

  return (
    <>
      <SEO title="Projects" />

      {/* PAGE HEADER */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto px-4 md:px-6 mt-16">
          <PageHeader
            title="Projects"
            subtitle="A showcase of the systems, tools, and applications I’ve built."
          />
        </div>
      </ScrollReveal>

      {/* PROJECT LIST */}
      <ScrollReveal delay={0.2}>
        <Section title="All Projects">
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
};

export default Projects;
