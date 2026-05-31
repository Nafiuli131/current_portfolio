import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

// Animates a numeric stat (e.g. "99.9%", "553+", "6+", "350+") from 0 → target
// when the element scrolls into view. Respects suffix and decimal precision.
export default function AnimatedNumber({
  value,
  duration = 1.8,
  className = '',
  delay = 0,
}) {
  // Parse "99.9%" → number=99.9, suffix="%", decimals=1
  const match = String(value).match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const decimals =
    match && match[1].includes('.') ? match[1].split('.')[1].length : 0;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, {
      duration,
      delay,
      ease: [0.2, 0.7, 0.2, 1],
    });
    const unsub = mv.on('change', (latest) => {
      setDisplay(latest.toFixed(decimals) + suffix);
    });
    return () => {
      controls.stop();
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
