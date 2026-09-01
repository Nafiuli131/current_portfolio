import { about, profile } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { ArrowUpRight } from './Icons.jsx';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <SectionHeader
          index="[ 01 ]"
          eyebrow={about.eyebrow}
          title={about.title}
          lede={about.lede}
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* portrait + quick facts */}
          <Reveal className="order-first min-w-0 lg:order-none lg:col-span-5">
            <div className="group">
              <div className="panel ticks relative overflow-hidden p-2 shadow-soft">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 z-10 bg-accent/[0.06] transition-opacity duration-[900ms] group-hover:opacity-0"
                />
                <img
                  src={profile.profileImage}
                  alt={`${profile.name}, ${profile.role}`}
                  width="460"
                  height="460"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover grayscale contrast-[1.04] transition-[filter] duration-[900ms] ease-out group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-center justify-between border-x border-b border-line bg-paper px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                  {profile.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {profile.location.split(',')[0]} · {profile.timezone}
                </span>
              </div>
            </div>

            <dl className="mt-8 border-t border-line">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line py-3.5"
                >
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                    {f.label}
                  </dt>
                  <dd className="text-[13.5px] text-body">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* narrative */}
          <div className="min-w-0 lg:col-span-7">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="lede max-w-[64ch]">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260} className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-serif text-[1.55rem] italic leading-tight text-ink sm:text-[1.85rem]">
                The hard part is almost never the code.
              </p>
            </Reveal>
          </div>
        </div>

        {/* credentials */}
        <div className="mt-16 grid gap-px border border-line bg-line sm:mt-20 lg:grid-cols-3">
          <Reveal className="bg-paper p-7">
            <h3 className="eyebrow">Education</h3>
            <ul className="mt-6 space-y-5">
              {about.education.map((e) => (
                <li key={e.degree}>
                  <p className="font-display text-[14.5px] font-semibold leading-snug tracking-tight text-ink">
                    {e.degree}
                  </p>
                  <p className="mt-1 text-[13px] text-body">{e.school}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {e.period} · {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="bg-paper p-7">
            <h3 className="eyebrow">Recognition</h3>
            <ul className="mt-6 space-y-4">
              {about.recognition.map((r) => (
                <li key={r} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  <span className="text-[13.5px] leading-relaxed text-body">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="bg-paper p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="eyebrow">Research</h3>
              <a
                href={profile.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow text-[10px]"
              >
                Scholar
                <ArrowUpRight width={11} height={11} />
              </a>
            </div>
            <p className="mt-6 font-display text-[15px] font-semibold tracking-tight text-ink">
              {about.research.count}
            </p>
            <ul className="mt-4 space-y-3">
              {about.research.titles.map((t) => (
                <li key={t} className="text-[12.5px] leading-relaxed text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
