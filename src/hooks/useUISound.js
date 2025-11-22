// src/hooks/useUISound.js
import { useRef } from "react";

export function useUISound(url, volume = 0.15) {
  const audioRef = useRef(null);

  function play() {
    try {
      if (!audioRef.current) {
        const audio = new Audio(url);
        audio.volume = volume;
        audioRef.current = audio;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } catch {
      // ignore if autoplay blocked
    }
  }

  return play;
}
