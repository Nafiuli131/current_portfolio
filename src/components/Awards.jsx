import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import Section from './Section.jsx';
import { awards } from '../data/portfolio.js';

export default function Awards() {
  return (
    <Section
      id="awards"
      eyebrow="Honors"
      title="Awards & Achievements."
      description="Recognition for academic performance from undergraduate studies through secondary school — including Magna Cum Laude distinction and merit-based national scholarships."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {awards.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:hover:border-brand-400/40"
          >
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <FiAward size={16} />
            </div>
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              {a.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed muted">{a.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
