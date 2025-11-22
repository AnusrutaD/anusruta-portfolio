import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative mb-10 mt-4">
      {/* Animated Gradient Background */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-b 
          from-brand-primary/15 via-transparent to-transparent 
          dark:from-brand-primary/25 
          blur-2xl opacity-70 
          animate-pulse
        "
      />

      {/* Foreground Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;
