import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import Parallax from "../components/Parallax.jsx";
import emailjs from "emailjs-com";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_11npj0c", // your service ID
        "template_6r9ks4y", // your template ID
        e.target,
        "iGWWSo7fZLqSixzMC" // your public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          e.target.reset();
        },
        () => {
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <SEO title="Contact" />

      <ScrollReveal>
        <section className="relative mt-16">
          {/* Radial Glow Behind Contact Hero */}
          <Parallax offset={30} className="absolute inset-0 -z-10 opacity-60">
            <div className="w-full h-full bg-brand-radial" />
          </Parallax>

          {/* Glass Hero Card */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="glass-panel grid gap-10 px-8 py-14 md:grid-cols-2"
          >
            {/* LEFT – intro + socials */}
            <div className="space-y-6">
              <motion.span
                variants={fadeUp}
                className="pill-badge bg-brand-primary/20 border-brand-primary/30 text-brand-primary"
              >
                Let’s build something together
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-100 leading-snug"
              >
                Contact Me
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                I&apos;m open to backend-heavy roles, system design discussions,
                and collaborations around microservices, distributed systems,
                and LLM-powered backends. Drop a message and I&apos;ll get back
                to you.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Connect on
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/anusruta-dutta"
                    target="_blank"
                    className="pill-badge hover:bg-brand-primary/20 hover:border-brand-primary"
                  >
                    🔗 LinkedIn
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    className="pill-badge hover:bg-brand-primary/20 hover:border-brand-primary"
                  >
                    🐦 X (Twitter)
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="pill-badge hover:bg-brand-primary/20 hover:border-brand-primary"
                  >
                    📸 Instagram
                  </a>
                  <a
                    href="https://leetcode.com/u/AnusrutaD/"
                    target="_blank"
                    className="pill-badge hover:bg-brand-primary/20 hover:border-brand-primary"
                  >
                    🧠 LeetCode
                  </a>
                  <a
                    href="https://www.hackerrank.com/"
                    target="_blank"
                    className="pill-badge hover:bg-brand-primary/20 hover:border-brand-primary"
                  >
                    💻 HackerRank
                  </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT – contact form */}
            <motion.div variants={fadeUp} className="flex items-center">
              <form
                onSubmit={handleSubmit}
                className="w-full space-y-4 text-sm"
              >
                <div className="flex flex-col">
                  <label className="mb-1 text-xs text-slate-600 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    className="rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300/70 dark:border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-xs text-slate-600 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300/70 dark:border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-xs text-slate-600 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    className="rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300/70 dark:border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-xs text-slate-600 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-300/70 dark:border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary resize-none"
                  />
                </div>

                <button
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-brand-primary px-6 py-2.5 text-sm font-medium text-white shadow-glow hover:opacity-90 transition disabled:opacity-40"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {sent && (
                  <p className="text-xs text-emerald-500 mt-2">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}

                {error && (
                  <p className="text-xs text-red-400 mt-2">
                    ⚠ Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Contact;
