/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Sora"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bfd2ff',
          300: '#93b3ff',
          400: '#608aff',
          500: '#3b66ff',
          600: '#2447ec',
          700: '#1c36c4',
          800: '#1c309b',
          900: '#1e2f7a',
        },
        ink: {
          50: '#f7f8fb',
          100: '#eef0f5',
          200: '#dadde6',
          300: '#b8bcc9',
          400: '#8a8fa1',
          500: '#666b7e',
          600: '#4d5263',
          700: '#3a3f4d',
          800: '#23262f',
          900: '#13151b',
          950: '#0a0b10',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,102,255,0.25), 0 18px 50px -12px rgba(59,102,255,0.45)',
        card: '0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 32px -12px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(59,102,255,0.18) 0%, transparent 70%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
