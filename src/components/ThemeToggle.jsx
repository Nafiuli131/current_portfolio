import useTheme from '../hooks/useTheme.js';

/** Two states, one control. The icon rotates through the switch rather than swapping. */
export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
      className={`group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden border border-line bg-paper text-muted transition-colors duration-300 hover:border-line2 hover:text-ink ${className}`}
    >
      <span className="sr-only">{isDark ? 'Light theme' : 'Dark theme'}</span>

      <span
        aria-hidden="true"
        className="relative block h-[18px] w-[18px] transition-transform duration-[520ms]"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.4, 0.5, 1)',
          transform: isDark ? 'rotate(-135deg)' : 'rotate(0deg)',
        }}
      >
        {/* sun */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          className="absolute inset-0 h-full w-full transition-opacity duration-300"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6" />
        </svg>

        {/* moon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute inset-0 h-full w-full transition-opacity duration-300"
          style={{ opacity: isDark ? 1 : 0, transform: 'rotate(135deg)' }}
        >
          <path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.6 8.6 0 1 0 10.9 10.9Z" />
        </svg>
      </span>
    </button>
  );
}
