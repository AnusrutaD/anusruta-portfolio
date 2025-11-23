/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // ✅ Prevent Tailwind from purging watermark classes
  safelist: [
    { pattern: /w-\[.*\]/ },
    { pattern: /h-\[.*\]/ },
    { pattern: /opacity-\[.*\]/ },
    { pattern: /right-\[.*\]/ },
    { pattern: /top-\[.*\]/ },
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },

      colors: {
        // Primary brand colors
        brand: {
          primary: "#6366F1", // indigo / engineering feel
          secondary: "#22C55E", // green accent (success/performance)
          accent: "#0EA5E9", // sky blue, for subtle highlights
        },

        // Semantic surfaces
        surface: {
          DEFAULT: "#020617",
          soft: "#020817",
          card: "#020617",
        },

        // Muted text
        muted: {
          light: "#6B7280",
          dark: "#94A3B8",
        },
      },

      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at top, rgba(99,102,241,0.18), transparent 60%)",
        "brand-linear":
          "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(14,165,233,0.25), rgba(34,197,94,0.25))",
      },

      boxShadow: {
        "soft-card":
          "0 18px 45px rgba(15,23,42,0.75), 0 0 0 1px rgba(148,163,184,0.08)",
        glow: "0 0 25px rgba(99,102,241,0.45)",
        "glow-soft":
          "0 0 18px rgba(99,102,241,0.28), 0 0 28px rgba(34,197,94,0.18)",
      },

      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      opacity: {
        15: "0.15",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
