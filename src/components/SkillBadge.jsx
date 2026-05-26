import { motion } from 'framer-motion';

export default function SkillBadge({ label, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4) }}
      whileHover={{ y: -2 }}
      className="chip hover:border-brand-400 hover:text-brand-700 dark:hover:border-brand-400/60 dark:hover:text-brand-200"
    >
      {label}
    </motion.span>
  );
}
