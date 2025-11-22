import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Engineer",
    company: "WiseTech Global",
    timeline: "Dec 2022 — Present",
    details: [
      "Improved system performance using MVC + Spring Boot + MySQL.",
      "Optimized modules using Stream API → 30% faster queries.",
      "Built scalable features across microservices & distributed systems.",
    ],
  },
  {
    role: "Application Development Analyst",
    company: "Accenture",
    timeline: "Dec 2021 — Dec 2022",
    details: ["Java, Python, Full Stack development across multiple modules."],
  },
  {
    role: "Application Development Associate",
    company: "Accenture",
    timeline: "Dec 2019 — Nov 2021",
    details: ["Worked on APIs, cloud integrations & backend services."],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="mt-16">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
        Experience
      </h3>

      <div className="relative border-l border-slate-300/40 dark:border-white/10 ml-2">
        {experience.map((job, index) => (
          <motion.div
            whileHover={{ y: -2 }}
            key={index}
            className="pl-6 mb-10 group"
          >
            {/* Dot */}
            <span
              className="
                w-3 h-3 bg-brand-primary rounded-full absolute -left-[7px] mt-1.5
                group-hover:scale-125 transition
              "
            />

            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              {job.role}
            </h4>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {job.company} • {job.timeline}
            </p>

            <ul className="mt-3 space-y-1">
              {job.details.map((d, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  • {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
