import { useEffect, useState } from "react";

export function useGithubProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/projects");
        const data = await res.json();

        if (res.ok) {
          setProjects(data);
        } else {
          setError("Failed to load GitHub projects");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load GitHub repositories");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { projects, loading, error };
}
