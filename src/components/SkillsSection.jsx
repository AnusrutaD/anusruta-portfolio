import { motion } from "framer-motion";

const skills = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka"],
  },
  {
    category: "AI / GenAI",
    items: ["LLMs", "Prompt Engineering", "LangChain", "RAG", "ChatGPT", "Claude", "Gemini", "Llama"],
  },
  {
    category: "Other Tools",
    items: ["Python", "MySQL", "Streamlit", "React", "Git", "Docker"],
  }
];

export default function SkillsSection() {
  return (
    <section className="mt-12">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Skills
      </h3>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <motion.div
            key={s.category}
            whileHover={{ scale: 1.02 }}
            className="
              rounded-xl p-5 border
              bg-white/80 border-slate-200 shadow-card
              dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
              backdrop-blur-xl transition
            "
          >
            <h4 className="text-sm font-semibold text-brand-primary mb-3">
              {s.category}
            </h4>

            <ul className="space-y-1">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-slate-700 dark:text-slate-300"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
