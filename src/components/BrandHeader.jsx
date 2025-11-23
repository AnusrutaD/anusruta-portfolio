import LogoAnimated from "./LogoAnimated";

export default function BrandHeader() {
  return (
    <div className="flex items-center gap-3 select-none">
      <LogoAnimated className="h-10 w-10 text-slate-900 dark:text-white" />
      <span className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
        Anusruta Dutta
      </span>
    </div>
  );
}
