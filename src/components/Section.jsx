import Parallax from "./Parallax";

const Section = ({ title, children }) => {
  return (
    <section className="my-16">
      {title && (
        <Parallax offset={20}>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h2>
        </Parallax>
      )}
      <div className="mt-6">{children}</div>
    </section>
  );
};

export default Section;
