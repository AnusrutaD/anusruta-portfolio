import {
  SiLinkedin,
  SiGithub,
  SiX,
  SiLeetcode,
  SiInstagram,
} from "react-icons/si";
import LogoMicro from "./LogoMicro";

const socials = [
  { icon: <SiLinkedin />, link: "https://linkedin.com/in/anusruta-dutta" },
  { icon: <SiGithub />, link: "https://github.com/AnusrutaD" },
  { icon: <SiX />, link: "https://x.com/AnusrutaDutta" },
  { icon: <SiLeetcode />, link: "https://leetcode.com/u/anusruta_dutta/" },
  { icon: <SiInstagram />, link: "https://www.instagram.com/anusruto/" },
];

export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center opacity-90">
      <div className="flex justify-center gap-6 mb-4">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            className="text-xl text-slate-700 dark:text-slate-300 hover:text-brand-primary transition"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        <LogoMicro className="h-4 w-4 opacity-70" />
        © {new Date().getFullYear()} Anusruta Dutta — All rights reserved.
      </p>
    </footer>
  );
}
