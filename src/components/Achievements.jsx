import CountUp from "react-countup";
import { motion } from "framer-motion";

const achievements = [
  { label: "Years Experience", value: 4 },
  { label: "LeetCode Problems", value: 700 },
  { label: "Projects Delivered", value: 15 },
];

export default function Achievements() {
  return (
    <div className="grid grid-cols-3 gap-6 text-center mt-16">
      {achievements.map((a, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="
            rounded-2xl p-6 border
            bg-white/80 border-slate-200 shadow-card
            dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
            backdrop-blur-xl
          "
        >
          <p className="text-2xl font-bold text-brand-primary">
            <CountUp end={a.value} duration={2} />
            {a.label === "LeetCode Problems" ? "+" : ""}
          </p>
          <p className="text-xs mt-1 text-slate-700 dark:text-slate-300">
            {a.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
