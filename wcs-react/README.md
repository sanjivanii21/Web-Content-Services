# WCS — React (Vite) version

Your static site converted to a React single-page app using **Vite + React Router**.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What changed from the static site

- **Routing**: each of your original pages is now a route handled by `react-router-dom`
  (`/`, `/about`, `/solutions`, `/consulting`, `/technology`, `/branding`, `/learning`,
  `/careers`, `/apply`, `/contact`, `/insights`, `/media-gallery`). Internal links
  (`<a href="...">`) were converted to `<Link to="...">` so navigation is client-side
  (no full page reloads).
- **Components**: `src/pages/*.jsx` — one component per original HTML page, built
  directly from your original markup (same classes, same ids, same structure).
- **Styles**: your four CSS files (`style.css`, `components.css`, `responsive.css`,
  `inline.css`) are copied as-is into `src/styles/` and imported globally in
  `src/main.jsx`. The Tailwind CDN script and Google Fonts links used on the homepage
  are kept in `index.html` so the existing Tailwind utility classes keep working.
- **Assets**: images copied as-is into `public/assets/images/`.
- **JavaScript behavior**: `js/common.js` and every `js/pages/*.js` file were ported
  into `src/hooks/usePageEffects.js`, a React hook that reproduces the same DOM
  behavior (scroll-triggered nav styling, mobile menu, dropdown taps, scroll-reveal
  animations, the homepage portfolio filter, the careers job board, the insights case
  study modal, the apply/contact form handling, etc.) on each page mount, with proper
  cleanup on unmount. This keeps the site working exactly like the original rather
  than requiring a full behavioral rewrite.

## Known things worth reviewing

- The homepage contact form still submits to `http://localhost:8080/api/contact`
  (unchanged from the original) — point this at your real backend when ready.
- A couple of pages (`about.html`, `contact.html`, `careers.html`) used slightly
  different header markup in the original site (a `<header id="siteHeader">` variant
  vs. the standard `<nav>` block) — this was preserved per-page rather than forced
  into one shared `<Navbar>` component, to avoid changing behavior. If you'd like a
  single shared `Navbar`/`Footer` component instead, that's a good next iteration
  once you've confirmed everything renders correctly.
- No `node_modules` are included — run `npm install` first (this environment has no
  network access, so the install could not be verified here; the dependency versions
  in `package.json` are current stable releases as of writing).
