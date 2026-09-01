import { useCallback, useEffect, useState } from 'react';

const KEY = 'theme';

function resolve() {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* storage can be blocked; fall through to the system preference */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function apply(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#080A10' : '#FFFFFF');
}

export default function useTheme() {
  const [theme, setTheme] = useState(resolve);

  useEffect(() => {
    apply(theme);
  }, [theme]);

  /* Follow the OS until the visitor makes an explicit choice. */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      let stored = null;
      try {
        stored = window.localStorage.getItem(KEY);
      } catch {
        /* ignore */
      }
      if (!stored) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
    /* Only animate colour changes for a deliberate switch, never on load. */
    const root = document.documentElement;
    root.classList.add('theme-anim');
    window.setTimeout(() => root.classList.remove('theme-anim'), 500);
    setTheme(next);
  }, [theme]);

  return { theme, toggle };
}
