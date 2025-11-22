import { motion } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

const Parallax = ({ children, offset = 40, className = "" }) => {
  const y = useParallax(offset);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
