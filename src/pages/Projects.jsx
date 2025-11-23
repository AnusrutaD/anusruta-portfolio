import { motion } from "framer-motion";
import { useState } from "react";
import SkeletonProjectCard from "../components/SkeletonProjectCard";
import { useGithubProjects } from "../hooks/useGithubProjects";

export default function Projects() {
  const { projects, loading, error } = useGithubProjects();

  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter((p) => {
    return (
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase()) ||
      p.language?.toLowerCase().includes(query.toLowerCase())
    );
  });

  if (error) return <div className="p-10 text-red-400">{error}</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <h1 className="text-4xl font-bold">Featured Projects</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name, language or description..."
        className="px-4 py-2 rounded-xl w-full bg-white/10 border border-white/10 backdrop-blur text-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* 🟣 Loading Shimmer */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      )}

      {/* 🟢 Loaded Projects */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-2">{p.name}</h2>

              {/* README Preview */}
              <p className="text-xs text-slate-400 mb-4 whitespace-pre-line">
                {p.readme}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span>⭐ {p.stargazers_count}</span>
                <span>🍴 {p.forks_count}</span>

                {/* GitHub-style language color */}
                <span className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: p.languageColor }}
                  ></span>
                  {p.language}
                </span>
              </div>

              {/* Repo + Live Demo */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={p.html_url}
                  target="_blank"
                  className="text-brand-primary hover:underline"
                >
                  View Repository →
                </a>
                {p.homepage && (
                  <a
                    href={p.homepage}
                    target="_blank"
                    className="hover:underline text-brand-primary"
                  >
                    🔗 Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
