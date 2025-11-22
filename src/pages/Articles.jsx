import SEO from "../components/SEO.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import Section from "../components/Section.jsx";
import { getAllPosts } from "../lib/blog.js";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Articles() {
  const posts = getAllPosts();

  return (
    <>
      <SEO
        title="Articles"
        description="Technical articles by Anusruta Dutta"
      />

      <ScrollReveal>
        <Section title="Articles">
          <div className="grid gap-6 mt-6">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </Section>
      </ScrollReveal>
    </>
  );
}
