import { services } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { GlyphAI, GlyphCloud, GlyphSystems } from './Icons.jsx';

const GLYPHS = { systems: GlyphSystems, ai: GlyphAI, cloud: GlyphCloud };

export default function Services() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 border-y border-line bg-paper py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeader
          index="[ 02 ]"
          eyebrow={services.eyebrow}
          title={services.title}
          lede={services.lede}
        />

        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {services.cards.map((card, i) => {
            const Glyph = GLYPHS[card.glyph];
            return (
              <Reveal
                key={card.key}
                delay={i * 110}
                className="group relative flex flex-col bg-paper p-7 transition-colors duration-500 hover:bg-canvas sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-out group-hover:scale-x-100"
                />

                <div className="flex items-start justify-between">
                  <span className="text-line2 transition-colors duration-500 group-hover:text-accent">
                    <Glyph />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                    {card.index}
                  </span>
                </div>

                <h3 className="h-card mt-8">{card.title}</h3>
                <p className="body-sm mt-4 flex-1">{card.body}</p>

                <ul className="mt-8 border-t border-line pt-1">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 border-b border-line py-2.5 last:border-b-0"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 bg-line2 transition-colors duration-500 group-hover:bg-accent"
                      />
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.11em] text-muted transition-colors duration-500 group-hover:text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
