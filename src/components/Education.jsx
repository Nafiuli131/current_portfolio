import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import Section from './Section.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Foundations in Computer Science."
      description="Strong fundamentals from a top Bangladeshi CS program, with consistent academic performance from high school onward."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 dark:border-white/10 dark:bg-ink-900/60"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <FiBookOpen size={16} />
            </div>
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              {e.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-700 dark:text-ink-200">{e.school}</p>
            <div className="mt-3 flex items-center justify-between text-xs muted">
              <span>{e.period}</span>
              <span className="rounded-full bg-brand-500/10 px-2 py-0.5 font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                {e.note}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
