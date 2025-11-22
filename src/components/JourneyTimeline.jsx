import { motion } from "framer-motion";
import {
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiApachekafka,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiPostman,
  SiGithub,
} from "react-icons/si";

import { FaJava, FaPython, FaReact } from "react-icons/fa";


const timeline = [
  {
    year: "Dec 2022 — Nov 2024",
    company: "WiseTech Global",
    title: "Software Engineer / Backend Engineer",
    logo: "/logos/wisetech.png", // <--- Add this image in /public/logos
    desc: "Worked on scalable backend systems, distributed processing pipelines, platform modernization and high-performance microservices for global supply-chain platforms.",
    tech: [
      FaJava,
      SiSpringboot,
      SiApachekafka,
      SiDocker,
      SiKubernetes,
      SiMysql,
      SiGithub,
    ],
  },
  {
    year: "Dec 2021 — Dec 2022",
    company: "Accenture",
    title: "Application Development Analyst",
    logo: "/logos/accenture.png",
    desc: "Backend system development, enterprise integration, microservice refactoring, cloud workflows, and performance tuning.",
    tech: [FaJava, SiSpringboot, SiMysql, FaReact, SiPostman],
  },
  {
    year: "Dec 2019 — Dec 2021",
    company: "Accenture",
    title: "Application Development Associate",
    logo: "/logos/accenture.png",
    desc: "Built enterprise-grade Java/Spring Boot applications, learned distributed backend patterns, cloud CI/CD, and API lifecycle management.",
    tech: [FaJava, SiSpringboot, SiMysql, SiGithub],
  },
  {
    year: "Oct 2019 — Nov 2019",
    company: "Testyantra Software Solutions",
    title: "Junior Data Scientist",
    logo: "/logos/testyantra.png",
    desc: "Developed ML models, data cleaning pipelines, Python automation, analytics dashboards and model experiments.",
    tech: [FaPython, SiPandas, SiNumpy, SiTensorflow],
  },
  {
    year: "Jul 2019 — Sep 2019",
    company: "Testyantra Software Solutions",
    title: "Data Science Intern",
    logo: "/logos/testyantra.png",
    desc: "Hands-on training in ML, deep learning basics, Python for data science, and building initial ML prototypes.",
    tech: [FaPython, SiPandas, SiNumpy],
  },
];

export default function JourneyTimeline() {
  return (
    <div className="relative pl-10 mt-16">
      {/* Animated Vertical Glow Line */}
      <div
        className="absolute left-3 top-0 h-full w-[3px] bg-gradient-to-b 
      from-brand-primary via-brand-primary/40 to-transparent rounded-full animate-pulse"
      />

      <div className="space-y-14">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: i * 0.18 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Node */}
            <div
              className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full 
            bg-brand-primary shadow-[0_0_10px_theme(colors.brand.primary)]"
            />

            <div
              className="ml-6 p-6 rounded-2xl backdrop-blur-xl 
              bg-white/50 dark:bg-white/5 border border-white/20 
              dark:border-white/10 shadow-lg dark:shadow-none"
            >
              {/* Company Row */}
              <div className="flex items-center gap-4">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-10 h-10 object-contain rounded-md bg-white dark:bg-slate-800 p-1 shadow"
                />

                <div>
                  <p className="text-xs font-semibold text-brand-primary tracking-wide">
                    {item.year}
                  </p>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                {item.desc}
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {item.tech.map((TechIcon, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-white/70 dark:bg-slate-800 
                      border border-white/30 dark:border-slate-700 
                      shadow-sm dark:shadow-none flex items-center justify-center"
                  >
                    <TechIcon className="text-brand-primary text-xl" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
