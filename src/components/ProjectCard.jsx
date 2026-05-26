import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index = 0 }) {
  const isActive = !!project.active;

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-glow dark:bg-ink-900/60 ${
        isActive
          ? 'border-brand-400/60 bg-gradient-to-br from-white to-brand-50/40 ring-1 ring-brand-500/20 dark:border-brand-400/50 dark:from-ink-900/70 dark:to-brand-500/5 dark:ring-brand-400/20'
          : 'border-ink-200 hover:border-brand-300 dark:border-white/10 dark:hover:border-brand-400/40'
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      {isActive && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl"
        />
      )}

      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            {project.role && <p className="eyebrow truncate">{project.role}</p>}
            {isActive && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Currently Leading
              </span>
            )}
          </div>
          <h3 className="heading-3 mt-1 text-balance">{project.name}</h3>
          {project.headline && (
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
              {project.headline}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2 opacity-70 transition group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub`}
              className="btn-icon h-9 w-9"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} demo`}
              className="btn-icon h-9 w-9"
            >
              <FiArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
        {project.problem && (
          <p>
            <span className="font-semibold text-ink-900 dark:text-white">Problem · </span>
            <span className="muted">{project.problem}</span>
          </p>
        )}
        {project.solution && (
          <p>
            <span className="font-semibold text-ink-900 dark:text-white">Solution · </span>
            <span className="muted">{project.solution}</span>
          </p>
        )}
        {project.outcome && (
          <p>
            <span className="font-semibold text-ink-900 dark:text-white">Outcome · </span>
            <span className={isActive ? 'font-medium text-brand-700 dark:text-brand-200' : 'muted'}>
              {project.outcome}
            </span>
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-100 pt-4 dark:border-white/5">
        {project.stack?.map((t) => (
          <span
            key={t}
            className="rounded-md bg-ink-100/70 px-2 py-1 font-mono text-[11px] text-ink-700 dark:bg-white/5 dark:text-ink-200"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
