// src/components/VoiceCommandCenter.jsx
import { useState, useEffect } from "react";
import { usePreferencesStore } from "../store/usePreferencesStore";

export default function VoiceCommandCenter({ listening, onDone }) {
  const store = usePreferencesStore();
  const toggle = store.toggle;

  const [supported, setSupported] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }
    setSupported(true);
    if (!listening) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase();
      // simple mapping
      if (transcript.includes("dark mode")) store.setTheme("dark");
      if (transcript.includes("light mode")) store.setTheme("light");
      if (transcript.includes("particles")) toggle("showParticles");
      if (transcript.includes("tilt")) toggle("show3DTilt");
      if (transcript.includes("floating")) toggle("showFloating");
      if (transcript.includes("hologram")) toggle("showHoloScan");
      if (transcript.includes("neon")) toggle("showNeonRing");
      if (transcript.includes("reduced motion")) toggle("reducedMotion");
      if (transcript.includes("disable all")) {
        [
          "showParticles",
          "show3DTilt",
          "showFloating",
          "showOrbitParticles",
          "showHoloScan",
          "showNeonRing",
        ].forEach((k) => toggle(k));
      }
    };

    recognition.onend = () => {
      onDone?.();
    };

    recognition.start();

    return () => {
      try {
        recognition.abort();
      } catch {}
    };
  }, [listening]);

  if (!supported) return null;
  return null;
}
