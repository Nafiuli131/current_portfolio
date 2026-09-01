const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Github = (p) => (
  <svg {...base} {...p}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const Linkedin = (p) => (
  <svg {...base} {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5A6 6 0 0 1 16 8z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);

export const Scholar = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5Z" />
    <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
  </svg>
);

export const Doc = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z" />
    <path d="M13.5 3v5h5" />
  </svg>
);

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Copy = (p) => (
  <svg {...base} {...p}>
    <rect x="9" y="9" width="11.5" height="11.5" rx="1.6" />
    <path d="M15 5.5A1.5 1.5 0 0 0 13.5 4H5a1.5 1.5 0 0 0-1.5 1.5V14a1.5 1.5 0 0 0 1.5 1.5" />
  </svg>
);

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

/* ---- service glyphs: drawn to read as schematics, not decoration ---- */

export const GlyphSystems = (p) => (
  <svg {...base} width="30" height="30" strokeWidth={1.15} {...p}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeDasharray="1.6 1.8" />
  </svg>
);

export const GlyphAI = (p) => (
  <svg {...base} width="30" height="30" strokeWidth={1.15} {...p}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="4" cy="6" r="1.7" />
    <circle cx="4" cy="18" r="1.7" />
    <circle cx="20" cy="6" r="1.7" />
    <circle cx="20" cy="18" r="1.7" />
    <path d="M5.4 7.1 9.6 10.4M5.4 16.9l4.2-3.3M18.6 7.1l-4.2 3.3M18.6 16.9l-4.2-3.3" />
  </svg>
);

export const GlyphCloud = (p) => (
  <svg {...base} width="30" height="30" strokeWidth={1.15} {...p}>
    <path d="M6.5 18a4 4 0 0 1-.4-8A6 6 0 0 1 17.7 9.4 3.9 3.9 0 0 1 17.5 18H6.5Z" />
    <path d="M9.5 13.6 12 11l2.5 2.6" strokeDasharray="1.6 1.8" />
  </svg>
);
