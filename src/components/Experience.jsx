import { experience } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import ProjectVisual from './ProjectVisual.jsx';
import useReducedMotion from '../hooks/useReducedMotion.js';

/** Label in a fixed gutter on desktop, stacked above the copy on phones. */
function Row({ label, children, last = false }) {
  return (
    <div className="relative flex flex-col gap-2 pb-6 last:pb-0 sm:flex-row sm:gap-8 sm:pb-7">
      <div className="flex shrink-0 items-center gap-2 sm:w-[104px] sm:items-start sm:justify-end sm:gap-0 sm:pt-[3px]">
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent sm:hidden" />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </div>
      <div className="relative min-w-0 flex-1">
        <span
          aria-hidden="true"
          className="absolute -left-[19px] top-[6px] hidden h-1.5 w-1.5 rounded-full bg-accent sm:block"
        />
        {!last && (
          <span
            aria-hidden="true"
            className="absolute -left-[16.5px] top-[12px] hidden h-full w-px bg-line sm:block"
          />
        )}
        {children}
      </div>
    </div>
  );
}

function Project({ project, animate }) {
  return (
    <article className="group panel ticks mt-8 first:mt-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line bg-canvas px-5 py-3 sm:px-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Project
        </span>
        <span className="hidden h-3 w-px bg-line2 sm:block" aria-hidden="true" />
        <h4 className="font-display text-[15px] font-semibold tracking-tight text-ink">
          {project.name}
        </h4>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {project.role}
        </span>
      </div>

      <div className="p-5 sm:p-7">
        {project.accent && (
          <div className="mb-8">
            <ProjectVisual accent={project.accent} animate={animate} />
          </div>
        )}

        <Row label="Problem">
          <p className="body-sm max-w-[68ch] text-body">{project.problem}</p>
        </Row>

        <Row label="What I built">
          <ul className="max-w-[68ch] space-y-2.5">
            {project.work.map((w) => (
              <li key={w} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-line2"
                />
                <span className="body-sm">{w}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Architecture">
          <p className="body-sm max-w-[68ch]">{project.architecture}</p>
        </Row>

        <Row label="Impact" last>
          <p className="body-sm max-w-[68ch] text-body">{project.impact}</p>

          {project.outcomes?.length > 0 && (
            <ul className="mt-5 grid gap-px border border-line bg-line sm:inline-grid sm:auto-cols-fr sm:grid-flow-col">
              {project.outcomes.map((o) => (
                <li key={o.label} className="bg-paper px-5 py-3.5">
                  <span className="block font-display text-[1.15rem] font-semibold tracking-tight text-ink">
                    {o.value}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    {o.label}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </Row>
      </div>
    </article>
  );
}

function Company({ entry, animate }) {
  return (
    <li className="relative pb-16 last:pb-0 lg:pl-12">
      {/* timeline rail */}
      <span
        aria-hidden="true"
        className="absolute left-[3px] top-[9px] hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas lg:block"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[7.5px] top-[22px] hidden w-px bg-line lg:block"
      />

      <Reveal>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
            {entry.period}
          </span>
          {entry.current && (
            <span className="inline-flex items-center gap-1.5 border border-signal/25 bg-signal/[0.06] px-2 py-0.5">
              <span className="h-1 w-1 rounded-full bg-signal" aria-hidden="true" />
              <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-signal">
                Current
              </span>
            </span>
          )}
          <span className="hair hidden max-w-[160px] flex-1 sm:block" aria-hidden="true" />
        </div>

        <div className="mt-4 grid gap-x-10 gap-y-5 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-[1.6rem] font-semibold leading-tight tracking-tightest text-ink sm:text-[1.85rem]">
              {entry.company}
            </h3>
            <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {entry.location}
            </p>

            <ul className="mt-5 space-y-2 border-t border-line pt-4">
              {entry.roles.map((r) => (
                <li key={r.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span className="text-[14.5px] font-medium text-ink">{r.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-muted">
                    {r.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <p className="lede max-w-[62ch]">{entry.context}</p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-1">
              {entry.responsibilities.map((r) => (
                <li key={r} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  <span className="body-sm">{r}</span>
                </li>
              ))}
            </ul>

            {entry.courses && (
              <div className="mt-7">
                <p className="eyebrow">Courses supported</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.courses.map((c) => (
                    <li key={c} className="tag">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {entry.highlight && (
              <div className="mt-7 inline-flex items-baseline gap-3 border border-line bg-paper px-5 py-3.5">
                <span className="font-display text-[1.3rem] font-semibold tracking-tight text-ink">
                  {entry.highlight.value}
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
                  {entry.highlight.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </Reveal>

      {entry.projects.length > 0 && (
        <Reveal delay={80} className="mt-10">
          {entry.projects.map((p) => (
            <Project key={p.name} project={p} animate={animate} />
          ))}
        </Reveal>
      )}
    </li>
  );
}

export default function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="[ 03 ]"
          eyebrow={experience.eyebrow}
          title={experience.title}
          lede={experience.lede}
        />

        <ol className="relative">
          {experience.companies.map((entry) => (
            <Company key={entry.id} entry={entry} animate={!reduced} />
          ))}
        </ol>
      </div>
    </section>
  );
}
