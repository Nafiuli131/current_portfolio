import { motion } from 'framer-motion';
import Section from './Section.jsx';
import SkillBadge from './SkillBadge.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A toolkit shaped by shipping production systems."
      description="Java + Spring Boot are home. Python (FastAPI) is the second language. The rest is what I reach for to make systems fast, observable, and intelligent."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 dark:border-white/10 dark:bg-ink-900/60"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s, idx) => (
                <SkillBadge key={s} label={s} index={idx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
