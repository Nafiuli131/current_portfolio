import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
