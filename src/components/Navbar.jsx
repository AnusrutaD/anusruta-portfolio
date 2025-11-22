import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener for transparent → solid navbar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/articles", label: "Articles" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-md dark:bg-slate-900/80 bg-white/80 dark:border-white/10 border-slate-200/80 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand Name */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100 transition hover:text-brand-primary"
        >
          ANUSRUTA DUTTA
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {/* Download Resume */}
          <a
            href="/Anusruta_Dutta_Resume.pdf"
            download
            className="hidden md:inline-flex text-xs font-medium px-4 py-2 rounded-xl bg-brand-primary text-white shadow-glow hover:opacity-90 transition"
          >
            Download Resume
          </a>
          {navItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-xs font-medium text-slate-500 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-slate-100"
              >
                {item.label}

                {/* Underline animation */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-brand-primary transition-all duration-300
                    ${active ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  `}
                />
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
