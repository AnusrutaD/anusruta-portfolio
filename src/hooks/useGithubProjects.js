import { useEffect, useState } from "react";

export function useGithubProjects(username, allowList = []) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          setError("GitHub API Error");
          setLoading(false);
          return;
        }

        // Filter by allow list
        const filtered = data.filter(repo => allowList.includes(repo.name));

        setProjects(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, [username, allowList]);

  return { projects, loading, error };
}
