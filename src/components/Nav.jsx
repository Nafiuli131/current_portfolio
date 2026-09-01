import { useEffect, useMemo, useState } from 'react';
import { nav, profile } from '../data/site.js';
import useScrollSpy from '../hooks/useScrollSpy.js';
import useScrollPast from '../hooks/useScrollPast.js';
import { ArrowRight, Close, Menu } from './Icons.jsx';
import ThemeToggle from './ThemeToggle.jsx';

export default function Nav() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useScrollSpy(ids);
  const scrolled = useScrollPast(12);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-widest focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'border-b border-line bg-paper/85 backdrop-blur-xl supports-[backdrop-filter]:bg-paper/75'
            : 'border-b border-transparent'
        }`}
        style={{ height: 'var(--nav-h)' }}
      >
        <div className="shell flex h-full items-center justify-between gap-6">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group inline-flex items-baseline font-display text-[17px] font-bold tracking-tight text-ink"
          >
            {profile.wordmark}
            <span className="ml-[1px] text-accent transition-colors duration-300 group-hover:text-accent-soft">
              .
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left bg-accent transition-transform duration-500 ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a href="#contact" className="btn-primary btn-sm hidden sm:inline-flex">
              Work With Me
              <ArrowRight width={14} height={14} />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-paper text-body transition-colors duration-300 hover:border-line2 hover:text-ink lg:hidden"
            >
              {open ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/25 backdrop-blur-sm transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <nav
          aria-label="Mobile"
          className={`absolute inset-x-0 top-[var(--nav-h)] origin-top border-b border-line bg-paper px-5 pb-8 pt-6 shadow-soft transition-all duration-500 sm:px-8 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-[13px] font-display text-[23px] font-semibold tracking-tight text-ink transition-colors duration-300 hover:text-accent"
                >
                  <span className="font-mono text-[10.5px] tracking-[0.2em] text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            Work With Me
            <ArrowRight width={14} height={14} />
          </a>
        </nav>
      </div>
    </>
  );
}
