const Recommendation = () => {
  return (
    <div
      className="
        rounded-2xl p-6 border
        bg-white/80 border-slate-200 shadow-card
        dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
        backdrop-blur-xl transition
      "
    >
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        “I worked with Anusruta during his tenure at WiseTech Global. Anusruta
        has been a great teammate and a very diligent worker…”
      </p>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
        — Arsh Akhtar, Engineering at WiseTech Global
      </p>
    </div>
  );
};

export default Recommendation;
