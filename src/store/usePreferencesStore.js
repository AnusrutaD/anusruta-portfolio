import { create } from 'zustand'

const THEME_KEY = 'anusruta-theme'
const PREFS_KEY = 'anusruta-prefs'

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export const usePreferencesStore = create((set, get) => {
  const prefs = typeof window !== 'undefined' ? loadPrefs() : {}
  const storedTheme =
    typeof window !== 'undefined'
      ? localStorage.getItem(THEME_KEY)
      : null

  const systemPrefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const initialTheme =
    storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : systemPrefersDark
      ? 'dark'
      : 'light'

  return {
    /* --------------------------------------------
       BASE SETTINGS
    -------------------------------------------- */
    theme: initialTheme,
    reducedMotion: prefs.reducedMotion ?? false,
    showParticles: prefs.showParticles ?? true,

    /* --------------------------------------------
       FUTURISTIC HERO EFFECT SETTINGS
    -------------------------------------------- */
    showNeonRing: prefs.showNeonRing ?? true,
    showHoloScan: prefs.showHoloScan ?? true,
    showOrbitParticles: prefs.showOrbitParticles ?? true,
    show3DTilt: prefs.show3DTilt ?? true,
    showFloating: prefs.showFloating ?? true,

    /* --------------------------------------------
       THEME METHODS
    -------------------------------------------- */
    setTheme: (theme) => {
      set({ theme })
      try {
        localStorage.setItem(THEME_KEY, theme)
      } catch {}
    },

    toggleTheme: () => {
      const next = get().theme === 'dark' ? 'light' : 'dark'
      get().setTheme(next)
    },

    /* --------------------------------------------
       INDIVIDUAL SETTINGS TOGGLES
    -------------------------------------------- */
    setReducedMotion: (val) => {
      const next = { ...loadPrefs(), reducedMotion: val }
      set({ reducedMotion: val })
      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(next))
      } catch {}
    },

    setShowParticles: (val) => {
      const next = { ...loadPrefs(), showParticles: val }
      set({ showParticles: val })
      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(next))
      } catch {}
    },

    /* --------------------------------------------
       UNIVERSAL TOGGLE FOR EFFECT PANEL
    -------------------------------------------- */
    toggle: (key) => {
      const current = get()[key]
      const nextPrefs = { ...loadPrefs(), [key]: !current }

      set({ [key]: !current })

      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(nextPrefs))
      } catch {}
    },
  }
})
