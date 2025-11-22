import { motion, AnimatePresence } from "framer-motion";
import { usePreferencesStore } from "../store/usePreferencesStore";
import { useRef, useState, useEffect } from "react";
import {
  FiSettings,
  FiZap,
  FiEyeOff,
  FiMoon,
  FiSun,
  FiMove,
  FiMic,
} from "react-icons/fi";
import { useUISound } from "../hooks/useUISound";
import VoiceCommandCenter from "./VoiceCommandCenter";

export default function EffectsPanel() {
  const panelRef = useRef(null);
  const { theme, toggleTheme, toggle } = usePreferencesStore();

  const [open, setOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [listening, setListening] = useState(false);

  const options = [
    { key: "showParticles", label: "Particles" },
    { key: "show3DTilt", label: "3D Tilt" },
    { key: "showFloating", label: "Floating Animation" },
    { key: "showOrbitParticles", label: "Orbit Particles" },
    { key: "showHoloScan", label: "Hologram Scan" },
    { key: "showNeonRing", label: "Neon Pulse Ring" },
    { key: "reducedMotion", label: "Reduced Motion" },
  ];

  const playToggle = useUISound("/sounds/toggle.mp3");
  const playClick = useUISound("/sounds/click.mp3");

  // ESC closes all
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPanelOpen(false);
        setListening(false);
      }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  // Click outside closes panel
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !e.target.closest(".fab-button")
      ) {
        setPanelOpen(false);
      }
    }
    if (panelOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [panelOpen]);

  const disableAll = () => {
    const keys = [
      "showParticles",
      "show3DTilt",
      "showFloating",
      "showOrbitParticles",
      "showHoloScan",
      "showNeonRing",
    ];
    keys.forEach((k) => toggle(k));
    playToggle();
  };

  return (
    <>
      <VoiceCommandCenter
        listening={listening}
        onDone={() => setListening(false)}
      />

      {/* Floating FAB */}
      <motion.button
        onClick={() => {
          setOpen((p) => !p);
          playClick();
        }}
        className="
          fab-button fixed bottom-6 right-6 z-50 p-5 rounded-full
          bg-gradient-to-br from-purple-600 to-indigo-700
          shadow-[0_0_30px_rgba(139,92,246,0.6)]
          border border-white/20 backdrop-blur-xl
          hover:scale-110 active:scale-95
          transition text-white
        "
        animate={{
          boxShadow: open
            ? "0 0 45px rgba(139,92,246,0.8)"
            : "0 0 20px rgba(139,92,246,0.4)",
          rotate: open ? 180 : 0,
        }}
      >
        <FiSettings className="text-2xl" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Open panel */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -80 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                setPanelOpen((p) => !p);
                playClick();
              }}
              className="
                fixed bottom-6 right-6 z-40 p-3 rounded-full
                bg-indigo-500/70 backdrop-blur-xl
                border border-white/20 shadow-xl text-white
                hover:bg-indigo-500 transition
              "
            >
              <FiZap />
            </motion.button>

            {/* Theme */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -40, y: -70 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                toggleTheme();
                playToggle();
              }}
              className="
                fixed bottom-6 right-6 z-40 p-3 rounded-full bg-black/10
                dark:bg-white/10 backdrop-blur-xl
                border border-black/10 dark:border-white/10 shadow-xl text-black dark:text-white
                hover:bg-white/20 transition
              "
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </motion.button>

            {/* Disable all */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -130 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={disableAll}
              className="
                fixed bottom-6 right-6 z-40 p-3 rounded-full
                bg-red-600/70 backdrop-blur-xl
                border border-white/20 shadow-xl text-white
                hover:bg-red-600 transition
              "
            >
              <FiEyeOff />
            </motion.button>

            {/* Voice mic */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: -40, y: 70 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                setListening((p) => !p);
                playClick();
              }}
              className={`
                fixed bottom-6 right-6 z-40 p-3 rounded-full
                border border-white/20 shadow-xl text-white
                backdrop-blur-xl
                ${
                  listening
                    ? "bg-emerald-500/80"
                    : "bg-emerald-600/70 hover:bg-emerald-600"
                }
              `}
            >
              <FiMic />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Draggable panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            ref={panelRef}
            drag
            dragMomentum={false}
            dragElastic={0.12}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="
              fixed bottom-28 right-10 z-50 p-6 w-80
              rounded-3xl backdrop-blur-2xl
              bg-slate-900/70 dark:bg-slate-800/50
              border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.5)]
              text-white
            "
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold tracking-wide">
                🧬 God-Tier Control Hub
              </h2>
              <FiMove className="opacity-60" />
            </div>

            <div className="flex flex-col gap-3">
              {options.map((opt, i) => (
                <motion.button
                  key={opt.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    toggle(opt.key);
                    playToggle();
                  }}
                  className="
                    flex items-center justify-between
                    px-4 py-2 rounded-xl
                    bg-white/10 hover:bg-white/20
                    border border-white/10
                    transition text-sm
                  "
                >
                  {opt.label}
                  <span className="opacity-70 text-xs">
                    {usePreferencesStore.getState()[opt.key] ? "ON" : "OFF"}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
