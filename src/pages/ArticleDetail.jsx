import { useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/blog.js";
import SEO from "../components/SEO.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import Section from "../components/Section.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticleDetail() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <Section title="Article Not Found">
        <p className="text-slate-600 dark:text-slate-300">
          The article you are looking for does not exist.
        </p>
      </Section>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.summary}
        url={`https://your-domain.com/articles/${slug}`}
      />

      <ScrollReveal>
        <Section title={post.title}>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            {post.date}
          </p>

          <article className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </article>
        </Section>
      </ScrollReveal>
    </>
  );
}
