import fm from "front-matter";

const modules = import.meta.glob("../content/*.md", {
  eager: true,
});

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, module]) => {
      // from vite-plugin-markdown
      const markdown = module.markdown || module.default || "";

      const parsed = fm(markdown);

      const slug = path.split("/").pop().replace(".md", "");

      return {
        slug,
        title: parsed.attributes.title || "Untitled",
        date: parsed.attributes.date || "Unknown Date",
        summary:
          parsed.attributes.summary ||
          parsed.body.slice(0, 150).trim() + "...",
        content: parsed.body,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug);
}
