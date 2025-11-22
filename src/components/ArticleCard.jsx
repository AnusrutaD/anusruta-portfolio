import { Link } from "react-router-dom";

const ArticleCard = ({ post }) => {
  return (
    <Link
      to={`/articles/${post.slug}`}
      className="
        block rounded-2xl p-6 border
        bg-white/80 border-slate-200 shadow-card
        dark:bg-slate-900/60 dark:border-white/10 dark:shadow-card-dark
        backdrop-blur-xl transition
        hover:scale-[1.01]
      "
    >
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
        {post.title}
      </h2>

      <p className="text-xs text-slate-400 mt-1">
        {post.date || "Unknown Date"}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed line-clamp-2">
        {post.excerpt}
      </p>
    </Link>
  );
};

export default ArticleCard;
