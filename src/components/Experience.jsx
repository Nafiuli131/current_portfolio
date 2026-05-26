import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import Section from './Section.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Six years of shipping real systems."
      description="Currently Senior Software Engineer at Cloudly Infotech, leading Pulse — an industrial IoT platform. Here's the full trajectory and what was built at each stop."
    >
      <ol className="relative">
        <div className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-400/60 via-ink-300/40 to-transparent sm:block dark:via-white/10" />

        {experience.map((job, i) => (
          <motion.li
            key={`${job.company}-${i}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-10 pl-0 sm:pl-12"
          >
            <span className="absolute left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-600 shadow-sm sm:inline-flex dark:border-white/10 dark:bg-ink-900 dark:text-brand-300">
              <FiBriefcase size={14} />
            </span>

            <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-white/10 dark:bg-ink-900/60">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {job.role} ·{' '}
                    <span className="text-brand-600 dark:text-brand-300">{job.company}</span>
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-2 text-xs muted">
                    <FiMapPin size={12} /> {job.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1 text-xs font-medium text-ink-700 dark:border-white/10 dark:text-ink-200">
                  {job.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                  )}
                  {job.period}
                </span>
              </div>

              <div className="mt-5 space-y-6">
                {job.projects.map((p, j) => (
                  <div key={`${p.name}-${j}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-semibold text-ink-900 dark:text-white">
                        {p.name}
                        {p.role && (
                          <span className="ml-2 rounded-full bg-brand-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                            {p.role}
                          </span>
                        )}
                      </h4>
                    </div>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                      {p.bullets.map((b, k) => (
                        <li key={k} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          <span className="muted">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {p.stack && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-ink-100/70 px-2 py-0.5 font-mono text-[11px] text-ink-700 dark:bg-white/5 dark:text-ink-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
