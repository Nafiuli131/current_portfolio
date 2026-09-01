/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        paper: v('--paper'),
        canvas: v('--canvas'),
        mist: v('--mist'),
        line: v('--line'),
        line2: v('--line2'),
        ink: v('--ink'),
        body: v('--body'),
        muted: v('--muted'),
        accent: {
          DEFAULT: v('--accent'),
          ink: v('--accent-ink'),
          soft: v('--accent-soft'),
          tint: v('--accent-tint'),
          fill: v('--accent-fill'),
        },
        signal: v('--signal'),
      },
      maxWidth: { shell: '1180px' },
      letterSpacing: { tightest: '-0.045em' },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
        press: 'var(--shadow-press)',
      },
      screens: { xs: '420px' },
    },
  },
  plugins: [],
};
