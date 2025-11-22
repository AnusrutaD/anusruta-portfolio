// src/components/CommandPalette.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreferencesStore } from "../store/usePreferencesStore";

const actionsConfig = (store) => [
  {
    label: "Toggle Theme",
    action: store.toggleTheme,
    tags: "theme dark light mode",
  },
  {
    label: "Toggle Particles",
    actionKey: "showParticles",
    tags: "particles background",
  },
  {
    label: "Toggle 3D Tilt",
    actionKey: "show3DTilt",
    tags: "tilt 3d image hero",
  },
  {
    label: "Toggle Floating",
    actionKey: "showFloating",
    tags: "float animation hero",
  },
  {
    label: "Toggle Orbit Particles",
    actionKey: "showOrbitParticles",
    tags: "orbit particles",
  },
  {
    label: "Toggle Hologram Scan",
    actionKey: "showHoloScan",
    tags: "hologram scan",
  },
  {
    label: "Toggle Neon Ring",
    actionKey: "showNeonRing",
    tags: "neon ring glow",
  },
  {
    label: "Toggle Reduced Motion",
    actionKey: "reducedMotion",
    tags: "accessibility motion",
  },
];

export default function CommandPalette() {
  const store = usePreferencesStore();
  const toggle = store.toggle;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Open with Ctrl+J
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const actions = actionsConfig(store).map((a) => ({
    ...a,
    action:
      a.action ||
      (() => {
        toggle(a.actionKey);
      }),
  }));

  const filtered = actions.filter((a) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      a.label.toLowerCase().includes(q) ||
      (a.tags && a.tags.toLowerCase().includes(q))
    );
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-xl mx-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-slate-700/80 px-4 py-3">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command… (e.g. 'theme', 'particles')"
                className="w-full bg-transparent outline-none text-sm text-slate-50 placeholder:text-slate-400"
              />
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-4 py-3 text-xs text-slate-400">
                  No commands found.
                </div>
              )}
              {filtered.map((a) => (
                <button
                  key={a.label}
                  onClick={() => {
                    a.action();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-slate-800/80 text-sm text-slate-100 flex justify-between"
                >
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-slate-700/80 text-[11px] text-slate-400 flex justify-between">
              <span>Ctrl + J to open / Esc to close</span>
              <span>Command Palette</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
