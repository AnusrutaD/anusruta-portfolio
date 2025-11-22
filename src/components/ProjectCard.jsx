import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-2xl p-6 border
        bg-white/80 border-slate-200 shadow-card
        dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
        backdrop-blur-xl transition
      "
    >
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
        {project.title}
      </h3>
      <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">
        {project.year}
      </p>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="
              px-3 py-1 rounded-full text-xs font-medium
              bg-slate-100 text-slate-700
              dark:bg-white/10 dark:text-slate-300
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* View Project Link */}
      {project.link && (
        <Link
          to={project.link}
          className="
            inline-block mt-4 text-sm font-medium
            text-brand-primary hover:underline
          "
        >
          View Project →
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
