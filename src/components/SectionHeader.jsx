import Reveal from './Reveal.jsx';

export default function SectionHeader({ index, eyebrow, title, lede, id }) {
  return (
    <header className="mb-14 sm:mb-18">
      <Reveal className="flex items-center gap-4">
        <span className="font-mono text-[10.5px] tracking-[0.2em] text-accent">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
        <span className="hair flex-1" aria-hidden="true" />
      </Reveal>

      <div className="mt-7 grid gap-5 md:mt-9 md:grid-cols-12 md:gap-10">
        <Reveal delay={60} className="md:col-span-7">
          <h2 id={id} className="h-section text-balance">
            {title}
          </h2>
        </Reveal>
        {lede ? (
          <Reveal delay={120} className="md:col-span-5 md:pt-2">
            <p className="body-sm max-w-xl">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
