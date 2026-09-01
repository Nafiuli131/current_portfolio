import { stack } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Stack() {
  return (
    <section aria-labelledby="stack-title" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeader
          id="stack-title"
          index="[ 05 ]"
          eyebrow={stack.eyebrow}
          title={stack.title}
          lede={stack.lede}
        />

        <div className="border-t border-line">
          {stack.groups.map((group, i) => (
            <Reveal
              key={group.name}
              delay={i * 60}
              className="group grid gap-3 border-b border-line py-6 transition-colors duration-500 hover:bg-paper sm:grid-cols-12 sm:gap-8 sm:px-3"
            >
              <div className="flex items-baseline gap-3 sm:col-span-3">
                <span className="font-mono text-[10px] tracking-[0.18em] text-accent/70 transition-colors duration-500 group-hover:text-accent">
                  {group.code}
                </span>
                <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">
                  {group.name}
                </h3>
              </div>

              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:col-span-9">
                {group.items.map((item, k) => (
                  <li key={item} className="flex items-center gap-3">
                    {k > 0 && <span aria-hidden="true" className="h-3 w-px bg-line2" />}
                    <span className="text-[13.5px] text-muted transition-colors duration-500 group-hover:text-body">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
