// src/components/RippleLayer.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

let idCounter = 0;

export default function RippleLayer() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      const id = idCounter++;
      const x = e.clientX;
      const y = e.clientY;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full border border-cyan-400/60 bg-cyan-400/10"
            style={{
              width: 140,
              height: 140,
              left: r.x - 70,
              top: r.y - 70,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
