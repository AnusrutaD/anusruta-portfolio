import { motion } from "framer-motion";
import { useGithubProjects } from "../hooks/useGithubProjects";

export default function Projects() {
  // ⭐ List of repos YOU want to show
  const allowList = [
    "anusruta-portfolio",
    "tweet-generating-app",
    "Employee-Management-System",
    "ExpenseWon",
    "AutoSpark",
    "ElevatorSystem",
    "LLDTicTacToe",
    "design-a-parkinglot",
    "Snakes-and-Ladder",
    "Design-A-Pen",
  ];

  const { projects, loading, error } = useGithubProjects(
    "AnusrutaD",
    allowList
  );

  // console.log(projects);

  if (loading)
    return <div className="p-10 text-slate-400">Loading projects…</div>;

  if (error) return <div className="p-10 text-red-400">{error}</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <h1 className="text-4xl font-bold">Featured Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>

            <p className="text-sm text-slate-400 mb-4">
              {p.description || "No description provided."}
            </p>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>⭐ {p.stargazers_count}</span>
              <span>🍴 {p.forks_count}</span>
              <span>📦 {p.language || "N/A"}</span>
            </div>

            <a
              href={p.html_url}
              target="_blank"
              className="inline-block mt-4 text-brand-primary hover:underline"
            >
              View Repository →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
