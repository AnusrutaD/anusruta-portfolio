const ExperienceCard = ({ role, company, timeline, children }) => {
  return (
    <div
      className="
        rounded-2xl p-6 border
        bg-white/80 border-slate-200 shadow-card
        dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
        backdrop-blur-xl transition
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {role}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {company}
          </p>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">{timeline}</p>
      </div>

      <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
};

export default ExperienceCard;
