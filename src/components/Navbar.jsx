import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';
import { navLinks, profile } from '../data/portfolio.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/70'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between">
          <a href="#home" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 font-display text-sm font-bold text-white shadow-glow">
              {profile.initials}
            </span>
            <span className="hidden sm:flex sm:flex-col sm:leading-tight">
              <span className="font-display text-sm font-semibold tracking-wide text-ink-900 dark:text-white">
                {profile.name}
              </span>
              <span className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
                Senior Software Engineer
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`nav-link ${active === l.id ? 'active' : ''}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-primary hidden sm:inline-flex"
            >
              <FiDownload size={16} />
              Resume
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="btn-icon md:hidden"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-950/60 backdrop-blur"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col gap-2 border-l border-ink-200 bg-white p-6 dark:border-white/10 dark:bg-ink-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="block font-display text-lg font-semibold">{profile.name}</span>
                  <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
                    Senior Software Engineer
                  </span>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="btn-icon"
                >
                  <FiX size={20} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition ${
                        active === l.id
                          ? 'bg-brand-500/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200'
                          : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5'
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => setOpen(false)}
                className="btn-primary mt-6"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
