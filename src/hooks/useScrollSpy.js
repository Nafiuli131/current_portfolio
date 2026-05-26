import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds, options = {}) {
  const [active, setActive] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visible = new Map();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visible.set(entry.target.id, entry.intersectionRatio);
          });
          let best = { id: active, ratio: 0 };
          visible.forEach((ratio, key) => {
            if (ratio > best.ratio) best = { id: key, ratio };
          });
          if (best.ratio > 0) setActive(best.id);
        },
        {
          rootMargin: '-30% 0px -55% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1],
          ...options,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return active;
}
