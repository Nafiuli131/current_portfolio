import { expertise } from '../data/site.js';
import { ArrowRight } from './Icons.jsx';

/* Four things I'm hired for, architecture first. Each one says what it means
   in plain words before it names a technology. */

export default function ExpertisePanel() {
  return (
    <div className="panel ticks ticks-on relative overflow-hidden shadow-soft">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-canvas px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal anim-blip" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            {expertise.eyebrow}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {expertise.meta}
        </span>
      </div>

      <ul>
        {expertise.items.map((item) => (
          <li
            key={item.index}
            className="relative grid grid-cols-[26px_minmax(0,1fr)] gap-x-3 border-b border-line py-3.5 pl-5 pr-4 transition-colors duration-500 hover:bg-paper"
          >
            <span className="pt-[4px] font-mono text-[9.5px] tracking-[0.12em] text-accent">
              {item.index}
            </span>

            <div className="min-w-0">
              <h3 className="font-display text-[14.5px] font-semibold leading-tight tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-1 max-w-[44ch] text-[12.5px] leading-snug text-body">{item.note}</p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {item.tech}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={expertise.cta.href}
        className="group flex items-center justify-between gap-3 bg-canvas px-4 py-3 transition-colors duration-300 hover:bg-paper"
      >
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted transition-colors duration-300 group-hover:text-accent">
          {expertise.cta.label}
        </span>
        <ArrowRight
          width={13}
          height={13}
          className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
        />
      </a>
    </div>
  );
}
