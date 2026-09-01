import { useEffect, useState } from 'react';
import { ArrowRight } from './Icons.jsx';

/** Keeps the primary conversion action one tap away on small screens. */
export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const past = window.scrollY > window.innerHeight * 0.85;
      const target = document.getElementById('contact');
      const nearEnd = target
        ? target.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setShow(past && !nearEnd);
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
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      aria-hidden={!show}
    >
      <a href="#contact" className="btn-primary w-full" tabIndex={show ? 0 : -1}>
        Work With Me
        <ArrowRight width={14} height={14} />
      </a>
    </div>
  );
}
