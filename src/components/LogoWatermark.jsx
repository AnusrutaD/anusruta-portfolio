const LogoWatermark = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
    >
      <path
        d="M40 20L10 90H35L52 50L40 20Z"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.06"
      />
      <path
        d="M50 20H65C82 20 90 35 90 55C90 75 82 90 65 90H50L62 60L50 20Z"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.04"
      />
    </svg>
  );
};

export default LogoWatermark;
