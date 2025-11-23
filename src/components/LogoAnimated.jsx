import { motion } from "framer-motion";

const LogoAnimated = ({ className = "" }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      whileHover={{
        scale: 1.12,
        rotate: 2,
        transition: { type: "spring", stiffness: 200 },
      }}
    >
      <title>Anusruta Dutta Monogram</title>

      <motion.path
        d="M40 20L10 90H35L52 50L40 20Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.path
        d="M50 20H65C82 20 90 35 90 55C90 75 82 90 65 90H50L62 60L50 20Z"
        fill="currentColor"
        fillOpacity="0.9"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default LogoAnimated;
