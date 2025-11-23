import { motion } from "framer-motion";

const LogoHero = ({ className = "" }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", duration: 1.2, stiffness: 120 }}
    >
      <defs>
        <linearGradient id="hero-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      <motion.path
        d="M40 20L10 90H35L52 50L40 20Z"
        fill="url(#hero-gradient)"
      />

      <motion.path
        d="M50 20H65C82 20 90 35 90 55C90 75 82 90 65 90H50L62 60L50 20Z"
        fill="url(#hero-gradient)"
        fillOpacity="0.9"
      />
    </motion.svg>
  );
};

export default LogoHero;
