import { Link } from "react-router-dom";

const Button = ({ href, children, className = "" }) => {
  const base =
    "inline-flex items-center justify-center rounded-full border border-brand-primary bg-brand-primary/10 px-4 py-2 text-xs font-semibold text-brand-primary transition hover:bg-brand-primary/20";

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
