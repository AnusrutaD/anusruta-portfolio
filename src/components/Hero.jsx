import { motion } from "framer-motion";
import Button from "./Button.jsx";
import { profile } from "../data/profile";
import Typewriter from "./Typewriter.jsx";
import { Suspense, lazy } from "react";
import { usePreferencesStore } from "../store/usePreferencesStore.js";
import Parallax from "./Parallax.jsx";
import heroImage from "/images/profile-hero.png";

import LogoHero from "./LogoHero.jsx";
import LogoWatermark from "./LogoWatermark.jsx";

const AvatarCanvas = lazy(() => import("./AvatarCanvas.jsx"));

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const Hero = () => {
  const showParticles = usePreferencesStore((s) => s.showParticles);

  return (
    <section className="relative mt-8 md:mt-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative grid gap-10 px-8 py-14 md:grid-cols-2 rounded-3xl shadow-card-lg backdrop-blur-xl overflow-hidden"
        style={{ backgroundColor: "var(--bg-surface-1)" }}
      >
        {/* WATERMARK INSIDE CARD */}
        <LogoWatermark
          className="
            absolute 
            right-6 
            top-6
            w-[320px]
            h-[320px]
            text-slate-400 
            dark:text-white
            opacity-5
            z-0
            select-none
            pointer-events-none
          "
        />

        {/* LEFT CONTENT */}
        <div className="space-y-7 relative z-10">
          <LogoHero className="w-20 h-20 md:w-24 md:h-24 mb-4 text-brand-primary" />

          <motion.div variants={fadeUp}>
            <span className="pill-badge bg-white/50 text-slate-800 border-white/60 dark:bg-white/10 dark:text-white">
              Backend Engineer • Java • Microservices • GenAI
            </span>
          </motion.div>

          <Parallax offset={20}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl"
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-brand-primary via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
              .
              <br />I build scalable backend systems & LLM-powered
              architectures.
            </motion.h1>
          </Parallax>

          <Parallax offset={15}>
            <motion.div variants={fadeUp}>
              <Typewriter
                words={[
                  "Backend Engineer (Java)",
                  "Spring Boot • Microservices • Kafka",
                  "700+ LeetCode • System Design",
                  "Exploring Generative AI & LLMs",
                ]}
              />
            </motion.div>
          </Parallax>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-sm leading-relaxed text-slate-700 dark:text-slate-300"
          >
            {profile.about[0]}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4">
            <Button href="/projects" className="shadow-glow">
              🚀 View Projects
            </Button>

            <Button
              href="/Anusruta_Dutta_Resume.pdf"
              className="bg-brand-primary text-slate-800 font-medium shadow-lg shadow-brand-primary/40 hover:shadow-brand-primary/60 transition dark:bg-brand-primary dark:text-white"
            >
              📄 Download Resume
            </Button>

            <Button
              href={profile.links.linkedin}
              className="border-slate-300 text-slate-800 dark:border-slate-700 dark:text-slate-200 hover:border-brand-primary hover:text-brand-primary"
            >
              🔗 Connect on LinkedIn
            </Button>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center relative z-10"
        >
          <Parallax offset={30}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateX: 6,
                rotateY: -6,
                boxShadow:
                  "0 20px 40px rgba(0,0,0,0.35), 0 0 40px rgba(99,102,241,0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative p-2 rounded-3xl bg-gradient-to-br from-slate-800/30 to-slate-900/10 backdrop-blur-lg"
              style={{ perspective: 1000 }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-500/15 to-blue-500/15 blur-3xl" />

              <img
                src={heroImage}
                alt="Anusruta Portrait"
                className="relative w-[260px] md:w-[340px] lg:w-[400px] object-contain drop-shadow-2xl rounded-2xl animate-float"
              />
            </motion.div>
          </Parallax>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
