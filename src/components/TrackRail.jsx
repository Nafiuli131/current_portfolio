import { track } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function TrackRail() {
  return (
    <section aria-label="Companies worked with" className="border-y border-line bg-paper">
      <div className="shell py-9 sm:py-11">
        <Reveal className="mb-7 flex items-center gap-4">
          <span className="eyebrow whitespace-nowrap">Shipped production software at</span>
          <span className="hair flex-1" aria-hidden="true" />
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">
          {track.map((t, i) => (
            <Reveal as="li" key={t.org} delay={i * 60}>
              <p className="font-display text-[14.5px] font-semibold leading-tight tracking-tight text-ink">
                {t.org}
              </p>
              <p className="mt-1 text-[12.5px] leading-snug text-muted">{t.role}</p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted/80">
                {t.period}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
