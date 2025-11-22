import { useEffect, useState } from "react";

const Typewriter = ({ words = [], speed = 80, delay = 1500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span className="text-sm text-indigo-800 dark:text-indigo-200 text-bra">
      {words[index].substring(0, subIndex)}|
    </span>
  );
};

export default Typewriter;
