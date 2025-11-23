import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

import profilePhoto from "/images/profile.png"; // <-- your uploaded photo
import LogoAnimated from "./LogoAnimated";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01, rotateX: 3, rotateY: -3 }}
      className="
        relative overflow-hidden rounded-3xl p-8 shadow-xl
        backdrop-blur-xl 
        bg-white/60 dark:bg-slate-900/50
        border border-white/20 dark:border-white/10
      "
    >
      {/* === Glowing Ring === */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-400/40 via-purple-400/40 to-blue-400/40 blur-2xl opacity-30 dark:opacity-20 pointer-events-none" />

      {/* === Main Content Wrapper === */}
      <div className="relative flex items-center gap-8 z-10">
        {/* === Photo Container === */}
        <div className="relative">
          {/* Glow background ring */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br 
            from-indigo-400/40 via-purple-400/40 to-blue-400/40 
            blur-xl opacity-40 dark:opacity-30"
          ></div>

          {/* Actual photo */}
          <img
            src={profilePhoto}
            alt="Anusruta"
            className="
              relative z-10 h-40 w-40 rounded-2xl object-cover
              shadow-lg border border-white/30 dark:border-white/10
              bg-white dark:bg-slate-800
            "
          />
        </div>

        {/* === Text Section === */}
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <LogoAnimated className="h-8 w-8 text-slate-900 dark:text-white" />
            Anusruta Dutta
          </h2>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            Backend Engineer (Java, Microservices, Distributed Systems) &
            LLM/GenAI enthusiast focused on scalable backend architectures.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Java • Spring Boot",
              "LLMs • GenAI",
              "Microservices",
              "System Design",
            ].map((label) => (
              <span
                key={label}
                className="
                  px-3 py-1 rounded-full text-xs font-medium
                  bg-slate-200/70 text-slate-700
                  dark:bg-slate-800/70 dark:text-slate-300
                  border border-slate-300/40 dark:border-white/10
                "
              >
                {label}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-3 text-lg text-slate-700 dark:text-slate-300">
            <a href="https://linkedin.com/in/anusruta-dutta" target="_blank">
              <FaLinkedin className="hover:text-brand-primary transition" />
            </a>
            <a href="https://github.com/anusrutaD" target="_blank">
              <FaGithub className="hover:text-brand-primary transition" />
            </a>
            <a href="https://x.com/AnusrutaDutta" target="_blank">
              <FaXTwitter className="hover:text-brand-primary transition" />
            </a>
            <a href="https://www.instagram.com/anusruto/" target="_blank">
              <FaInstagram className="hover:text-brand-primary transition" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
