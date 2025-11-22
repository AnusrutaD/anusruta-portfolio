// src/components/SkillsGrid.jsx
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Backend & Systems",
    description: "Scalable, reliable backend services and system design.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Apache Kafka",
      "Distributed Systems",
      "System Design (HLD / LLD)",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    title: "AI, LLMs & GenAI",
    description: "Building intelligent backends powered by modern LLMs.",
    skills: [
      "Python",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Llama",
      "Streamlit",
    ],
  },
  {
    title: "Frontend & Tools",
    description: "End-to-end delivery with modern tooling and UI stacks.",
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "HTML / CSS",
      "Git & GitHub",
      "Linux",
      "Docker (basic)",
      "CI/CD (basic)",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const SkillsGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SKILL_GROUPS.map((group, index) => (
        <motion.div
          key={group.title}
          custom={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="glass-panel p-5 md:p-6 flex flex-col gap-4"
        >
          {/* Icon-ish glass circle */}
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary/80 to-indigo-500/80 text-white text-sm shadow-md">
            {group.title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {group.title}
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {group.description}
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] px-3 py-1 rounded-full bg-slate-200 text-slate-700 border border-slate-300/70 dark:bg-white/5 dark:text-slate-200 dark:border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
