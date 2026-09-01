import { useEffect, useState } from 'react';

/** Returns the id of the section currently occupying the top third of the viewport. */
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      // A section counts as current once it crosses the upper third of the viewport.
      const offset = Math.max(140, window.innerHeight * 0.3);
      const line = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }

      const scrollable = document.body.offsetHeight - window.innerHeight;
      const atBottom = scrollable > 200 && window.scrollY >= scrollable - 60;
      if (atBottom) current = ids[ids.length - 1];

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
