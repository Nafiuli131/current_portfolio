import { motion } from 'framer-motion';

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="heading-2 gradient-text">{title}</h2>}
            {description && (
              <p className="muted mt-4 text-base sm:text-lg">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
