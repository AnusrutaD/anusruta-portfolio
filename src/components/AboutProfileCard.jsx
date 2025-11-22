import { profile } from "../data/profile";
import { Github, Linkedin, Globe } from "lucide-react";

const AboutProfileCard = () => {
  return (
    <div className="glass-panel p-5 md:p-6 flex gap-4 md:gap-6 items-center">
      {/* Avatar / Placeholder */}
      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-brand-primary via-indigo-500 to-sky-400 flex items-center justify-center text-white text-xl font-semibold shadow-lg">
        {profile.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)}
      </div>

      {/* Text */}
      <div className="space-y-1">
        <h2 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">
          {profile.name}{" "}
          <span className="text-xs text-slate-500 dark:text-slate-400">
            ({profile.pronouns})
          </span>
        </h2>

        <p className="text-xs text-slate-600 dark:text-slate-400">
          Backend Engineer · Java · Microservices · Distributed Systems · GenAI
        </p>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          📍 {profile.location} • {profile.status}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          <a
            href={profile.links.linkedin}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-slate-200 text-slate-800 border border-slate-300/70 dark:bg-white/5 dark:text-slate-200 dark:border-white/10 hover:border-brand-primary hover:text-brand-primary transition"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-slate-200 text-slate-800 border border-slate-300/70 dark:bg-white/5 dark:text-slate-200 dark:border-white/10 hover:border-brand-primary hover:text-brand-primary transition"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="/Anusruta_Dutta_Resume.pdf"
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 bg-brand-primary/90 text-white hover:bg-brand-primary transition"
          >
            <Globe size={14} /> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutProfileCard;
