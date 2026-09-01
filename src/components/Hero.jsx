import { hero, profile } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SystemTopology from './SystemTopology.jsx';
import { ArrowRight, Doc } from './Icons.jsx';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pb-16 pt-[calc(var(--nav-h)+3rem)] sm:pb-20 sm:pt-[calc(var(--nav-h)+4.5rem)] lg:pb-24 lg:pt-[calc(var(--nav-h)+5.5rem)]"
    >
      {/* drafting-paper atmosphere, anchored to the top of the page */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-[var(--nav-h)] -z-10 h-[135%] overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-paper" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(27,77,228,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,77,228,0.055) 1px, transparent 1px)',
            backgroundSize: '68px 68px',
            maskImage: 'radial-gradient(ellipse 88% 78% at 50% 8%, #000 12%, transparent 74%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 88% 78% at 50% 8%, #000 12%, transparent 74%)',
          }}
        />
        <div
          className="absolute -top-[24rem] left-1/2 h-[46rem] w-[74rem] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(closest-side, rgba(27,77,228,0.10), rgba(27,77,228,0.03) 55%, transparent 78%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <div className="shell">
        {/* ---- the statement gets the full width ---- */}
        <Reveal className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {profile.available && (
            <span className="inline-flex max-w-full items-center gap-2 border border-signal/25 bg-signal/[0.06] px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal anim-blip" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                {profile.availabilityNote}
              </span>
            </span>
          )}
          <span className="hidden h-3 w-px bg-line2 sm:block" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {hero.kicker}
          </span>
        </Reveal>

        <h1 className="h-display mt-8">
          <Reveal as="span" delay={70} className="block">
            {hero.headline[0]}
          </Reveal>
          <Reveal as="span" delay={150} className="block text-muted">
            {hero.headline[1]}
          </Reveal>
        </h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={230} className="flex gap-4">
              <span
                className="mt-[11px] hidden h-px w-8 shrink-0 bg-accent sm:block"
                aria-hidden="true"
              />
              <p className="max-w-[50ch] text-[17px] font-medium leading-[1.6] text-ink sm:text-[19px]">
                {hero.positioning}
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-5 sm:pl-12">
              <p className="body-sm max-w-[58ch]">{hero.lede}</p>
            </Reveal>

            <Reveal
              delay={370}
              className="mt-9 flex flex-col gap-3 xs:flex-row xs:items-center sm:pl-12"
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowRight width={14} height={14} />
              </a>
              <a href="#contact" className="btn-ghost">
                Work With Me
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-1 py-3 font-mono text-[11.5px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-accent xs:ml-1"
              >
                <Doc width={14} height={14} />
                Résumé
              </a>
            </Reveal>
          </div>

          {/* ---- the kind of system this is about ---- */}
          <Reveal delay={220} className="min-w-0 lg:col-span-5">
            <SystemTopology />
          </Reveal>
        </div>

        {/* ---- proof strip ---- */}
        <Reveal delay={440} className="mt-16 border-t border-line sm:mt-20">
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {hero.metrics.map((m) => (
              <div
                key={m.label}
                className="border-line py-6 pr-4 [&:nth-child(even)]:border-l [&:nth-child(even)]:pl-5 [&:nth-child(n+3)]:border-t md:[&:nth-child(even)]:pl-5 md:[&:nth-child(n+2)]:border-l md:[&:nth-child(n+2)]:pl-5 md:[&:nth-child(n+3)]:border-t-0"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-display text-[2rem] font-semibold tracking-tightest text-ink sm:text-[2.35rem]">
                    {m.value}
                  </span>
                  <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
