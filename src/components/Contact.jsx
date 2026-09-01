import { useEffect, useRef, useState } from 'react';
import { contact, profile, workWithMe } from '../data/site.js';
import Reveal from './Reveal.jsx';
import {
  ArrowUpRight,
  Check,
  Copy,
  Doc,
  Github,
  Linkedin,
  Mail,
  Scholar,
} from './Icons.jsx';

const CHANNELS = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/nafiul-islam',
    note: 'Notes and updates',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Nafiuli131',
    note: 'Code and experiments',
    href: profile.github,
  },
  {
    icon: Scholar,
    label: 'Google Scholar',
    value: '4 publications',
    note: 'Peer-reviewed research',
    href: profile.scholar,
  },
  {
    icon: Doc,
    label: 'Résumé',
    value: 'PDF · 2 pages',
    note: 'Full work history',
    href: profile.resume,
  },
];

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="btn-ghost w-full sm:w-auto"
      aria-label={copied ? 'Email address copied' : 'Copy email address'}
    >
      {copied ? <Check width={14} height={14} /> : <Copy width={14} height={14} />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <Reveal className="panel ticks ticks-on relative overflow-hidden shadow-soft">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(115% 105% at 4% 0%, rgb(var(--accent-fill) / 0.09), transparent 58%)',
            }}
          />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-[4.5rem]">
            {/* --- pitch --- */}
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="min-w-0 lg:col-span-7">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-accent">
                    [ 07 ]
                  </span>
                  <span className="eyebrow">{contact.eyebrow}</span>
                  <span className="hair max-w-[180px] flex-1" aria-hidden="true" />
                </div>

                <h2 className="h-section mt-8 max-w-[16ch] text-balance">{contact.title}</h2>

                <p className="lede mt-7 max-w-[56ch]">{contact.lede}</p>

                <ul className="mt-9 flex flex-wrap gap-2">
                  {workWithMe.tags.map((t) => (
                    <li key={t} className="tag-accent">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0 lg:col-span-5">
                <div className="border border-line bg-canvas p-6 sm:p-7">
                  {profile.available && (
                    <p className="flex items-center gap-2.5 pb-5">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-signal">
                        {profile.availabilityNote}
                      </span>
                    </p>
                  )}
                  <dl className="border-t border-line">
                    {workWithMe.facts.map((f) => (
                      <div
                        key={f.label}
                        className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                      >
                        <dt className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                          {f.label}
                        </dt>
                        <dd className="text-right text-[13px] text-body">{f.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="eyebrow mt-7">Worth including</p>
                  <ul className="mt-4 space-y-2.5">
                    {contact.include.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-[13px] leading-relaxed text-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- who this tends to be --- */}
            <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
              {workWithMe.fit.map((f) => (
                <div key={f.title} className="bg-paper px-5 py-6">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="body-sm mt-2.5">{f.body}</p>
                </div>
              ))}
            </div>

            {/* --- the actual ask --- */}
            <div className="mt-12 border border-line bg-paper p-6 sm:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="min-w-0">
                  <p className="eyebrow">{contact.prompt}</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group mt-3 inline-flex max-w-full items-center gap-3"
                  >
                    <span className="truncate font-display text-[1.4rem] font-semibold tracking-tight text-ink underline decoration-line2 decoration-1 underline-offset-[6px] transition-colors duration-300 group-hover:text-accent-ink group-hover:decoration-accent sm:text-[1.9rem]">
                      {profile.email}
                    </span>
                  </a>
                  <p className="body-sm mt-4 max-w-[62ch]">{contact.promptNote}</p>
                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={`mailto:${profile.email}`} className="btn-primary w-full sm:w-auto">
                    <Mail width={14} height={14} />
                    Email me
                  </a>
                  <CopyEmail />
                </div>
              </div>
            </div>

            {/* --- everywhere else --- */}
            <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full items-start gap-4 bg-paper px-5 py-5 transition-colors duration-500 hover:bg-canvas"
                  >
                    <span className="mt-0.5 text-muted transition-colors duration-500 group-hover:text-accent">
                      <c.icon width={17} height={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                        {c.label}
                      </span>
                      <span className="mt-1 block truncate text-[14px] font-medium text-ink">
                        {c.value}
                      </span>
                      <span className="mt-1 block text-[12px] text-muted">{c.note}</span>
                    </span>
                    <ArrowUpRight
                      width={15}
                      height={15}
                      className="shrink-0 text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
