import { useScroll, useTransform } from "framer-motion";

export const useParallax = (offset = 50) => {
  const { scrollY } = useScroll();

  return useTransform(scrollY, [0, 300], [0, offset]);
};
