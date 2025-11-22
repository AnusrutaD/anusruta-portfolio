import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import EffectsPanel from "./EffectsPanel.jsx"; // <-- NEW
import { usePreferencesStore } from "../store/usePreferencesStore.js";
import { useEffect } from "react";
import RippleLayer from "./RippleLayer.jsx";
import CommandPalette from "./CommandPalette.jsx";

const Layout = ({ children }) => {
  const theme = usePreferencesStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="min-h-screen w-full text-slate-900 dark:text-slate-100"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-20 pb-10">
        <main>{children}</main>
        <Footer />
      </div>

      {/* ⚙️ Floating Effects Panel (Futuristic Control Center) */}
      <EffectsPanel />
      <RippleLayer />
      <CommandPalette />
    </div>
  );
};

export default Layout;
