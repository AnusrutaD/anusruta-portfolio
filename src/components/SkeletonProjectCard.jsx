export default function SkeletonProjectCard() {
  return (
    <div className="p-6 rounded-2xl bg-white/10 dark:bg-slate-800/40 animate-pulse">
      <div className="h-4 w-32 bg-white/20 rounded mb-4"></div>
      <div className="h-3 w-full bg-white/10 rounded mb-2"></div>
      <div className="h-3 w-5/6 bg-white/10 rounded mb-6"></div>

      <div className="flex gap-3 mb-6">
        <div className="h-3 w-10 bg-white/20 rounded"></div>
        <div className="h-3 w-10 bg-white/20 rounded"></div>
        <div className="h-3 w-10 bg-white/20 rounded"></div>
      </div>

      <div className="h-3 w-24 bg-white/20 rounded"></div>
    </div>
  );
}
