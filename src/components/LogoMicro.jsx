const LogoMicro = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M40 20L10 90H35L52 50L40 20Z" />
    <path
      d="M50 20H65C82 20 90 35 90 55C90 75 82 90 65 90H50L62 60L50 20Z"
      fillOpacity="0.9"
    />
  </svg>
);

export default LogoMicro;
