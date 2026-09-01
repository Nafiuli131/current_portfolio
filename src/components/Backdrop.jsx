/** Page ground. Atmosphere lives with the hero so it scrolls away. */
export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 bg-canvas" aria-hidden="true" />
  );
}
