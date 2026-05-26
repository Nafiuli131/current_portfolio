# Nafiul Islam — Portfolio

A production-ready personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.
Dark mode by default, light mode toggle, fully responsive, accessible, and SEO-tagged.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (opens http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The built site lands in `dist/`.

---

## Folder structure

```
nafiul-portfolio/
├── public/
│   ├── Nafiul_Islam_Resume.pdf   # served at /Nafiul_Islam_Resume.pdf
│   ├── profile.png               # hero portrait
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx
│   │   ├── Card.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillBadge.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx      # dark/light theme + localStorage
│   ├── data/
│   │   └── portfolio.js          # ALL content lives here — edit this
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## Editing content

All copy, projects, experience, and skills live in **`src/data/portfolio.js`** — change them there
and the whole site updates. Profile photo: `public/profile.png`. Resume: `public/Nafiul_Islam_Resume.pdf`.

---

## Deployment — Netlify

You have two options. Both work — pick whichever fits your workflow.

### Option A — drag-and-drop (fastest, no GitHub needed)

1. Build locally:
   ```bash
   npm run build
   ```
2. Open [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the **`dist/`** folder into the drop zone.
4. Netlify gives you a live URL within seconds. Done.

### Option B — connect GitHub (recommended for ongoing updates)

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nafiul-portfolio.git
   git push -u origin main
   ```
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**.
3. Pick your repo. Netlify auto-detects Vite, but confirm:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**. Every `git push` to `main` triggers a fresh deploy.

A `netlify.toml` is already committed with the correct build settings and SPA redirect, so the
auto-detection works out of the box.

### Custom domain

Once deployed: Netlify dashboard → **Domain settings → Add custom domain** → follow the DNS
instructions. SSL is provisioned automatically.

---

## Theming

- Default: **dark mode** (preset in `index.html` via a tiny pre-paint script to avoid flash).
- Toggle in the navbar (top-right).
- Selection persists in `localStorage` under key `theme`.

---

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`, `section`, `ol`/`li`).
- All buttons have `aria-label`s; icon-only controls included.
- `prefers-reduced-motion` respected.
- Google Fonts preconnected; images lazy-loaded where appropriate.
- SEO meta + Open Graph + Twitter Card tags in `index.html`.

---

## Tech stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | React 18 + Vite 5                       |
| Styling      | Tailwind CSS (dark mode via `class`)    |
| Animation    | Framer Motion 11                        |
| Icons        | react-icons (Feather set)               |
| Fonts        | Sora (display), Inter (body), JetBrains Mono |
| Hosting      | Netlify                                 |
# current_portfolio
# current_portfolio
# current_portfolio
