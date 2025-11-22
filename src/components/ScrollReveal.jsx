import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay,
    },
  }),
};

const ScrollReveal = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={reveal}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
