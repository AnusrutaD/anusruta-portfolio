import {
  SiSpringboot,
  SiApachekafka,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

const skills = [
  { name: "Java", icon: <DiJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export default function SkillsIcons() {
  return (
    <section className="mt-16">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
        Tech Stack
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex flex-col items-center justify-center gap-2
              rounded-xl p-4 border
              bg-white/80 border-slate-200 shadow-card
              dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
              backdrop-blur-xl transition hover:scale-105
            "
          >
            <div className="text-2xl text-brand-primary">{skill.icon}</div>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
