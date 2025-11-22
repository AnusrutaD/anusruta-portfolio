import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Recommendation from "../components/Recommendation.jsx";
import SEO from "../components/SEO.jsx";
import { useContentStore } from "../store/useContentStore.js";
import ScrollReveal from "../components/ScrollReveal.jsx";
import FeaturedSkills from "../components/FeaturedSkills.jsx";
import Achievements from "../components/Achievements.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import JourneyTimeline from "../components/JourneyTimeline.jsx";

const Home = () => {
  const projects = useContentStore((s) => s.projects);

  return (
    <>
      <SEO title="Home" />

      {/* HERO SECTION */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <Hero />
        </div>
      </ScrollReveal>

      {/* ACHIEVEMENTS */}
      <ScrollReveal delay={0.1}>
        <Section title="Highlights">
          <div className="mt-6">
            <Achievements />
          </div>
        </Section>
      </ScrollReveal>

      {/* FEATURED SKILLS */}
      <ScrollReveal delay={0.15}>
        <Section title="Featured Skills">
          <div className="mt-6">
            <FeaturedSkills />
          </div>
        </Section>
      </ScrollReveal>

      {/* FEATURED PROJECTS */}
      <ScrollReveal delay={0.2}>
        <Section title="Featured Projects">
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {projects.slice(0, 4).map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </Section>
      </ScrollReveal>

      {/* EXPERIENCE PREVIEW */}
      <ScrollReveal delay={0.25}>
        <Section title="Experience">
          <div className="mt-6">
            <JourneyTimeline limit={2} preview />
          </div>
        </Section>
      </ScrollReveal>

      {/* RECOMMENDATION */}
      <ScrollReveal delay={0.3}>
        <Section title="Recommendation">
          <div className="mt-6">
            <Recommendation />
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
};

export default Home;
