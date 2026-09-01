# Nafiul Islam — Personal Site

Personal brand and professional portfolio for a Senior Software Engineer & Technical Leader
working across backend systems, applied AI, and cloud infrastructure.

**Positioning:** _I build scalable software systems, AI-powered solutions, and cloud
infrastructure that solve real-world problems._

Built with **React 18 + Vite + Tailwind CSS**. No animation library, no icon package, no
charting library — scroll reveals run on one shared `IntersectionObserver`, every icon is
inline SVG, and every diagram is hand-drawn SVG. That keeps the bundle around **72 kB
gzipped including React**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve dist/ on :4173
```

---

## Source of truth for content

Every fact on this site comes from two places and nowhere else:

1. **`public/Nafiul_Islam_Resume.pdf`** — the CV. All employers, titles, dates,
   responsibilities, project work, technologies, metrics, and education.
2. The previous portfolio, for items the CV omits — the four publications, the scholarship
   and Magna Cum Laude awards, and Toolora.

Nothing is inferred beyond those. When you update the CV, update
[`src/data/site.js`](src/data/site.js) to match — it is the only file that holds copy.

---

## Theming

Light and dark are both first-class. One set of role tokens is defined as CSS variables on
`:root` and redefined under `html.dark`; every Tailwind colour resolves through them, so
components never branch on theme.

| Role                     | Light     | Dark      | Used for                          |
| ------------------------ | --------- | --------- | --------------------------------- |
| `paper`                  | `#FFFFFF` | `#0E1119` | cards, raised surfaces            |
| `canvas`                 | `#F4F6FA` | `#080A10` | page ground, tinted bands         |
| `mist`                   | `#EDF1F7` | `#141824` | inset panels, diagram fills       |
| `line` / `line2`         | hairlines | hairlines | borders, dividers, diagram stroke |
| `ink` / `body` / `muted` | text ramp | text ramp | headings → body → labels          |
| `accent`                 | `#1B4DE4` | `#93B4FF` | accent **text** (contrast-safe)   |
| `accent-fill`            | `#1B4DE4` | `#2E6BFF` | button and marker **fills**       |
| `signal`                 | `#0B7A54` | `#3DDC97` | status only — live, available     |

`accent` and `accent-fill` are separate on purpose: a blue readable as text on near-black
is too light to carry white button text, so each theme picks the right value for each job.

- The theme is applied by a tiny inline script in `index.html` **before first paint**, so
  there is no flash.
- With no stored choice the site follows `prefers-color-scheme` and keeps following it;
  the first click on the toggle pins the choice in `localStorage`.
- Colour transitions are enabled only for a deliberate switch (`html.theme-anim`), never
  on load or during scrolling.

Type roles: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (eyebrows,
labels, metrics, diagram annotations), and **Instrument Serif** _italic_ used only where a
human opinion is being stated — the engineering principles and the About pull quote.

---

## Diagrams

Every major system gets its own drawing rather than a stock illustration. They live in
[`ProjectVisual.jsx`](src/components/ProjectVisual.jsx) and paint entirely from `.dg-*`
role classes defined in `index.css`, so they follow the theme with no JS.

| Key          | System                       | What it draws                                     |
| ------------ | ---------------------------- | ------------------------------------------------- |
| `industrial` | Vault (IoT)                  | sensors → live chart with threshold → time series  |
| `clinical`   | CloudlyCare                  | FastAPI → LangGraph agents → stores, CI test gate  |
| `travel`     | Travel Booking Platform      | auth → cached localisation → on-demand suppliers   |
| `aviation`   | Aircraft Management System   | four modules over one MS SQL core                  |
| `realtime`   | Convay                       | clients → gateway → microservices → MySQL          |
| `privacy`    | Toolora                      | in-browser processing, upload path cut             |
| `ai`         | RAG chatbot                  | query → retrieve → ground → answer, pgvector       |
| `agents`     | LangGraph multi-agent        | agents over one shared graph state, follow-up loop |
| `ml`         | Weather prediction           | dataset → preprocess → 3 regressions → evaluation  |
| `social`     | Facebook Group clone         | interface sketch: feed, events, chat               |
| `crud`       | Foodie                       | interface sketch: menu table + order panel         |

Add one by writing the component, registering it in the `VISUALS` map with a `min` width
for the mobile scroll container, and setting `accent: '<key>'` on the project in
`site.js`. Every diagram carries `role="img"` and a plain-language `aria-label`.

The hero's [`SystemTopology.jsx`](src/components/SystemTopology.jsx) is the signature
piece: the shape most of these systems take, with packets actually travelling the edges.

---

## Structure

```
index.html                    SEO, JSON-LD, fonts, pre-paint theme script
public/
  og.png                      1200x630 social card
  favicon.svg  robots.txt  sitemap.xml  site.webmanifest
  profile.png  Nafiul_Islam_Resume.pdf
src/
  data/site.js                every word on the site
  hooks/
    useTheme.js               light/dark with system fallback
    useReveal.js              shared IntersectionObserver scroll reveal
    useScrollSpy.js  useScrollPast.js  useReducedMotion.js
  components/
    Nav.jsx  ThemeToggle.jsx  MobileCTA.jsx  Backdrop.jsx
    Hero.jsx  SystemTopology.jsx  TrackRail.jsx
    About.jsx                 story, portrait, education, recognition, research
    Services.jsx              backend / AI / cloud
    Experience.jsx            all five organisations as case studies
    Projects.jsx  ProjectVisual.jsx
    Stack.jsx  Insights.jsx   principles + engineering notes
    Contact.jsx               merged Work With Me + contact
    Footer.jsx  SectionHeader.jsx  Reveal.jsx  Icons.jsx
```

---

## Editing content

**Add a job** — push onto `experience.companies` with `{ id, company, location, period,
roles[], context, responsibilities[], projects[] }`. Each project takes
`{ name, role, problem, work[], architecture, impact, outcomes[], stack[], accent }`.

**Add a project** — `projects.featured` for a full case study (needs `problem`,
`approach`, `solution`), `projects.more` for a compact card. Both use `accent` to pick a
diagram.

**Publish an insight** — set `href` on the note in `insights.posts`. With `href: null` the
card renders as a self-contained note; with a URL it becomes a link and grows a "Read full
note" affordance.

**Toggle availability** — `profile.available` shows or hides the status pill;
`profile.availabilityNote` is the wording (kept short so it fits on a phone).

---

## Contact

There is deliberately **no contact form**. The contact section leads with the email
address — one click to open a mail client, one to copy — alongside LinkedIn, GitHub,
Google Scholar, and the résumé, plus response time and timezone. Nothing to submit,
nothing to break, no backend to keep alive.

---

## Accessibility & performance

- One `h1`, one `h2` per section, `h3`/`h4` for items; landmarks and a skip link
- Keyboard focus visible everywhere; the theme control is a real `role="switch"` with
  `aria-checked` and a label that describes the action
- Text meets WCAG AA on its background in **both** themes; white button text clears AA
  against `accent-fill` in each
- `prefers-reduced-motion` disables reveals, SVG packet motion, and smooth scrolling
- Diagrams scroll horizontally rather than shrinking below legibility on phones
- No horizontal overflow from 320px up; verified at 320 / 390 / 768 / 1024 / 1440 / 1920

## SEO

Title, description, canonical, Open Graph and Twitter cards, `robots.txt`, `sitemap.xml`,
plus JSON-LD for `Person` and `ProfessionalService`.

If the domain changes, update the absolute URLs in `index.html`, `public/sitemap.xml`,
`public/robots.txt`, and `profile.siteUrl` in `src/data/site.js`.

## Deploy

Netlify, configured in `netlify.toml`: `npm run build` → `dist`, SPA redirect, security
headers, and immutable caching for fingerprinted assets.
