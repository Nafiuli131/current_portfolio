import { insights, profile } from '../data/site.js';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { ArrowUpRight } from './Icons.jsx';

function NoteBody({ post }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-accent">NOTE {post.n}</span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
          {post.topic}
        </span>
      </div>

      <h3 className="h-card mt-7 text-balance md:min-h-[5.2rem]">{post.title}</h3>

      <p className="body-sm mt-5 flex-1">{post.excerpt}</p>

      {post.href && (
        <span className="link-arrow mt-7">
          Read full note
          <ArrowUpRight width={13} height={13} />
        </span>
      )}
    </>
  );
}

export default function Insights() {
  return (
    <section
      id="insights"
      className="scroll-mt-24 border-y border-line bg-paper py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeader
          index="[ 06 ]"
          eyebrow={insights.eyebrow}
          title={insights.title}
          lede={insights.lede}
        />

        {/* how the decisions get made — a sequence, so it sits on a trace */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 hidden h-px bg-line lg:block" aria-hidden="true" />

          <ol className="grid gap-11 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {insights.principles.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 90}
                className="relative border-l border-line pl-6 lg:border-l-0 lg:pl-0 lg:pt-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[-3.5px] top-1 h-1.5 w-1.5 rounded-full bg-accent lg:left-0 lg:top-[-3.5px]"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-[-1px] top-0 h-10 w-px bg-accent lg:hidden"
                />

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {p.step}
                </span>

                <h3 className="mt-3 font-display text-[1.15rem] font-semibold leading-tight tracking-tight text-ink lg:min-h-[2.8rem]">
                  {p.title}
                </h3>

                <p className="mt-3 font-serif text-[1.12rem] italic leading-snug text-accent-ink">
                  {p.quote}
                </p>

                <p className="body-sm mt-4">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* written notes */}
        <Reveal className="mt-20 flex items-center gap-4">
          <span className="eyebrow whitespace-nowrap">Engineering notes</span>
          <span className="hair flex-1" aria-hidden="true" />
        </Reveal>

        <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
          {insights.posts.map((post, i) => {
            const shared =
              'group relative flex flex-col bg-paper p-7 transition-colors duration-500 hover:bg-canvas sm:p-8';
            const bar = (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-out group-hover:scale-x-100"
              />
            );

            return post.href ? (
              <Reveal
                key={post.n}
                as="a"
                delay={i * 100}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className={shared}
              >
                {bar}
                <NoteBody post={post} />
              </Reveal>
            ) : (
              <Reveal key={post.n} delay={i * 100} className={shared}>
                {bar}
                <NoteBody post={post} />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            View All Insights
            <ArrowUpRight width={13} height={13} />
          </a>
          <span className="body-sm">New notes go out on LinkedIn first.</span>
        </Reveal>
      </div>
    </section>
  );
}
