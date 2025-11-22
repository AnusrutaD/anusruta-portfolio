import SEO from "../components/SEO.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import SkillsIcons from "../components/SkillsIcons.jsx";
import Achievements from "../components/Achievements.jsx";
import JourneyTimeline from "../components/JourneyTimeline.jsx";




export default function About() {
  return (
    <>
      <SEO title="About" description="About Anusruta Dutta" />

      <ScrollReveal>
        <PageHeader
          title="About Me"
          subtitle="A deeper look at my journey, skills, and experience."
        />
      </ScrollReveal>

      {/* PROFILE CARD */}
      <ScrollReveal delay={0.1}>
        <ProfileCard />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Achievements />
      </ScrollReveal>

      {/* SKILLS SECTION */}
      <ScrollReveal delay={0.2}>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <SkillsIcons />
      </ScrollReveal>

      {/* EXPERIENCE TIMELINE */}
      <ScrollReveal delay={0.3}>
        <JourneyTimeline />
      </ScrollReveal>      
    </>
  );
}
