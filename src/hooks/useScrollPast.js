import { useEffect, useState } from 'react';

/** True once the page has scrolled past `y` pixels. */
export default function useScrollPast(y = 16) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;
    const check = () => {
      frame = 0;
      setPast(window.scrollY > y);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(check);
    };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [y]);

  return past;
}
