export default async function handler(req, res) {
  // SECRET allowList — stays on the server
  const allowList = [
    "anusruta-portfolio",
    "tweet-generating-app",
    "Employee-Management-System",
    "ExpenseWon",
    "AutoSpark",
    "ElevatorSystem",
    "LLDTicTacToe",
    "design-a-parkinglot",
    "Snakes-and-Ladder",
    "Design-A-Pen",
  ];

  try {
    // Get your GitHub token from VERSEL env
    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(
      `https://api.github.com/users/AnusrutaD/repos?per_page=100`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API failed" });
    }

    const repos = await response.json();

    // FILTER private allowList
    const filtered = repos.filter((repo) => allowList.includes(repo.name));

    // Sort by updated date
    filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    return res.status(200).json(filtered);
  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({ error: "Server error fetching projects" });
  }
}
