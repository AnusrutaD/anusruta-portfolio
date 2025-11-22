import { Helmet } from "react-helmet";

const SEO = ({ title, description, image }) => {
  const fullTitle = title
    ? `${title} | Anusruta Dutta`
    : "Anusruta Dutta — Backend Engineer (Java, Microservices, Distributed Systems, Generative AI)";

  const fullDescription =
    description ||
    "Backend Engineer with 4+ years experience in Java, Spring Boot, Microservices, System Design and Generative AI.";

  const ogImage =
    image ||
    "https://anusrutadutta.com/api/og?title=Anusruta%20Dutta%20Portfolio";

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={fullDescription} />

      {/* OpenGraph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
