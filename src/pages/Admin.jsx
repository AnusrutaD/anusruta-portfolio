import { useState, useEffect } from "react";
import { useContentStore } from "../store/useContentStore.js";
import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import SEO from "../components/SEO.jsx";

const Admin = () => {
  const { siteConfig, projects, replaceSiteConfig, replaceProjects } =
    useContentStore();

  const [siteConfigText, setSiteConfigText] = useState("");
  const [projectsText, setProjectsText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSiteConfigText(JSON.stringify(siteConfig, null, 2));
    setProjectsText(JSON.stringify(projects, null, 2));
  }, [siteConfig, projects]);

  const saveSiteConfig = () => {
    try {
      replaceSiteConfig(JSON.parse(siteConfigText));
      setMessage("Site config saved!");
    } catch {
      setMessage("Invalid JSON in site config");
    }
  };

  const saveProjects = () => {
    try {
      replaceProjects(JSON.parse(projectsText));
      setMessage("Projects saved!");
    } catch {
      setMessage("Invalid JSON in projects");
    }
  };

  return (
    <div className="w-full">
      <SEO
        title="Admin CMS"
        description="Local CMS to edit portfolio content"
      />

      <PageHeader title="Admin CMS" subtitle="Local-only JSON editing" />

      {message && <p className="mb-4 text-xs text-emerald-400">{message}</p>}

      <div className="grid gap-6 md:grid-cols-2">
        <Section title="Site Config">
          <textarea
            className="h-80 w-full rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-200"
            value={siteConfigText}
            onChange={(e) => setSiteConfigText(e.target.value)}
          />
          <button
            onClick={saveSiteConfig}
            className="mt-3 rounded-lg bg-brand-primary px-4 py-1.5 text-xs"
          >
            Save
          </button>
        </Section>

        <Section title="Projects JSON">
          <textarea
            className="h-80 w-full rounded-lg border border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-200"
            value={projectsText}
            onChange={(e) => setProjectsText(e.target.value)}
          />
          <button
            onClick={saveProjects}
            className="mt-3 rounded-lg bg-brand-primary px-4 py-1.5 text-xs"
          >
            Save
          </button>
        </Section>
      </div>
    </div>
  );
};

export default Admin;
