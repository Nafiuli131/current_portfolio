import { useEffect, useRef } from 'react';

let sharedObserver = null;

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          sharedObserver.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.06 }
  );
  return sharedObserver;
}

/** Adds `.is-in` once the element scrolls into view. Opt-out under reduced motion. */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return undefined;
    }

    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
