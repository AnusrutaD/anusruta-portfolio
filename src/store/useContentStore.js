import { create } from 'zustand'
import siteConfigDefault from '../data/siteConfig.json'
import projectsJson from '../data/projects.json'

const SITE_CONFIG_KEY = 'cms-site-config'
const PROJECTS_KEY = 'cms-projects'

function loadFromLocalStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export const useContentStore = create((set) => ({
  siteConfig: siteConfigDefault,
  projects: projectsJson,

  initFromStorage: () =>
    set(() => ({
      siteConfig: typeof window !== 'undefined'
        ? loadFromLocalStorage(SITE_CONFIG_KEY, siteConfigDefault)
        : siteConfigDefault,
      projects: typeof window !== 'undefined'
        ? loadFromLocalStorage(PROJECTS_KEY, projectsJson)
        : projectsJson,
    })),

  updateSiteConfig: (partial) =>
    set((state) => {
      const updated = { ...state.siteConfig, ...partial }
      try {
        localStorage.setItem(SITE_CONFIG_KEY, JSON.stringify(updated))
      } catch {}
      return { siteConfig: updated }
    }),

  replaceSiteConfig: (newConfig) =>
    set(() => {
      try {
        localStorage.setItem(SITE_CONFIG_KEY, JSON.stringify(newConfig))
      } catch {}
      return { siteConfig: newConfig }
    }),

  replaceProjects: (newProjects) =>
    set(() => {
      try {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(newProjects))
      } catch {}
      return { projects: newProjects }
    }),
}))
