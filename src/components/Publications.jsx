import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import Section from './Section.jsx';
import { publications, profile } from '../data/portfolio.js';

export default function Publications() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Research & Publications."
      description="Selected peer-reviewed research available on my Google Scholar profile. Focus areas: blockchain, augmented reality, and applied cryptography in civic and healthcare systems."
    >
      {/* View on Google Scholar CTA */}
      <div className="-mt-4 mb-10 flex flex-wrap items-center justify-between gap-3">
        <span className="mono-tag inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1 text-xs dark:border-white/10">
          <FiFileText size={13} className="text-brand-500" />
          {publications.length} publications
        </span>
        <a
          href={profile.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-2 text-xs font-semibold text-ink-800 backdrop-blur transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:border-brand-400 dark:hover:text-brand-300"
        >
          View on Google Scholar
          <FiArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {publications.map((p, i) => {
          const isLink = !!p.url;
          const CardTag = isLink ? motion.a : motion.div;
          const cardProps = isLink
            ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <CardTag
              key={p.title}
              {...cardProps}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:hover:border-brand-400/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                  <FiFileText size={16} />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-400">
                  / paper {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-balance font-display text-base font-semibold leading-snug text-ink-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed muted">{p.blurb}</p>

              {isLink && (
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink-500 transition group-hover:text-brand-600 dark:text-ink-400 dark:group-hover:text-brand-300">
                  <FiExternalLink size={12} />
                  <span>Open paper</span>
                  <FiArrowUpRight
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    size={12}
                  />
                </div>
              )}
            </CardTag>
          );
        })}
      </div>
    </Section>
  );
}
