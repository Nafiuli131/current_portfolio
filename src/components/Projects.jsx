import { projects } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import ProjectVisual from './ProjectVisual.jsx';
import useReducedMotion from '../hooks/useReducedMotion.js';
import { ArrowUpRight } from './Icons.jsx';

const STAGES = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'solution', label: 'Result' },
];

function Featured({ project, n, animate }) {
  return (
    <Reveal as="article" className="group panel ticks">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-canvas px-5 py-3 sm:px-7">
        <span className="font-mono text-[10px] tracking-[0.2em] text-accent">CASE {n}</span>
        <span className="hidden h-3 w-px bg-line2 sm:block" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {project.category}
        </span>
        <span className="ml-auto inline-flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-body">
            {project.status}
          </span>
        </span>
      </div>

      <div className="grid gap-10 p-5 sm:p-7 lg:grid-cols-12 lg:gap-10 lg:p-9">
        <div className="min-w-0 lg:col-span-5">
          <h3 className="font-display text-[1.8rem] font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.15rem]">
            {project.name}
          </h3>

          <p className="lede mt-5 max-w-[46ch]">{project.summary}</p>

          <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5">
            <div>
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                Type
              </dt>
              <dd className="mt-1.5 text-[13px] text-body">Independent build</dd>
            </div>
            <div>
              <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                Year
              </dt>
              <dd className="mt-1.5 text-[13px] text-body">{project.year}</dd>
            </div>
          </dl>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          {project.cta && (
            <a
              href={project.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              {project.cta.label}
              <ArrowUpRight width={14} height={14} />
            </a>
          )}
        </div>

        <div className="min-w-0 lg:col-span-7">
          <ProjectVisual accent={project.accent} animate={animate} />

          <ol className="mt-7">
            {STAGES.map((stage, i) => (
              <li
                key={stage.key}
                className="relative flex flex-col gap-2 pb-7 last:pb-0 sm:flex-row sm:gap-8 sm:pb-6"
              >
                <div className="flex shrink-0 items-center gap-2 sm:w-[86px] sm:items-start sm:justify-end sm:gap-0 sm:pt-[3px]">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent sm:hidden" />
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                    {stage.label}
                  </span>
                </div>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[19px] top-[6px] hidden h-1.5 w-1.5 rounded-full bg-accent sm:block"
                  />
                  {i < STAGES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -left-[16.5px] top-[12px] hidden h-full w-px bg-line sm:block"
                    />
                  )}
                  <p className="body-sm max-w-[62ch] text-body">{project[stage.key]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const reduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-line bg-paper py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeader
          index="[ 04 ]"
          eyebrow={projects.eyebrow}
          title={projects.title}
          lede={projects.lede}
        />

        <div className="space-y-6 sm:space-y-8">
          {projects.featured.map((p, i) => (
            <Featured
              key={p.id}
              project={p}
              n={String(i + 1).padStart(2, '0')}
              animate={!reduced}
            />
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <Reveal className="flex items-center gap-4">
            <span className="eyebrow whitespace-nowrap">Also built</span>
            <span className="hair flex-1" aria-hidden="true" />
          </Reveal>

          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {projects.more.map((item, i) => (
              <Reveal
                key={item.name}
                delay={i * 80}
                className="group flex flex-col bg-paper transition-colors duration-500 hover:bg-canvas"
              >
                <ProjectVisual
                  accent={item.accent}
                  animate={!reduced}
                  className="border-0 border-b"
                />
                <div className="flex flex-1 flex-col p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {item.domain}
                </p>
                <h3 className="mt-4 font-display text-[16.5px] font-semibold leading-snug tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="body-sm mt-3 flex-1">{item.note}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
