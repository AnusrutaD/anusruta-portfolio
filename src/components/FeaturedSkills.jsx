import { motion } from "framer-motion";

const featuredSkills = [
  {
    title: "Backend & Systems",
    desc: "Java, Spring Boot, Microservices, Distributed Systems, System Design.",
  },
  {
    title: "LLMs & GenAI",
    desc: "Prompt Engineering, LangChain, RAG, ChatGPT, Claude, Gemini, Llama.",
  },
  {
    title: "Developer Stack",
    desc: "Python, React, APIs, MySQL, Streamlit, Kafka, Problem Solving (700+ LC).",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const FeaturedSkills = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {featuredSkills.map((item, i) => (
        <motion.div
          key={item.title}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="glass-panel p-4 md:p-5 flex flex-col gap-2"
        >
          <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Featured Skill
          </p>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {item.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedSkills;
