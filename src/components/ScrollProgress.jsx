import { motion, useScroll, useSpring } from 'framer-motion';

// Thin progress bar at the very top of the viewport.
// Fills from left to right as the user scrolls the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700"
    />
  );
}
