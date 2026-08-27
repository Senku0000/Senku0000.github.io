# Mohsin Al-Jaili Ahmed — Portfolio

A premium, dark-themed personal portfolio for an IT student and cybersecurity
enthusiast. Built with plain HTML, CSS, and JavaScript — no build step, no
framework, no dependencies beyond one Google Fonts link.

## 1. Technology stack & why

**HTML + CSS + Vanilla JavaScript.** No React/Vite here — the site is a
single scrolling page with no client-side routing, no complex state, and no
data fetching beyond an optional contact-form POST. A framework would add a
build step, bundle size, and maintenance overhead for zero functional
benefit. Vanilla JS keeps Lighthouse scores easy to hit, keeps the project
runnable by just opening `index.html`, and keeps it trivial to host anywhere
(GitHub Pages, Vercel, Netlify, or literally any static file host).

## 2. Project structure

```
/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   ├── images/        ← profile photo, OG cover image
│   ├── icons/          ← favicon.svg
│   └── cv/              ← your CV PDF goes here
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 3. Run locally

No build tools required. Either:

- Double-click `index.html` to open it directly in a browser, or
- Serve it locally for a closer-to-production experience:
  ```bash
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## 4. GitHub setup

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/[your-username]/[your-repo].git
git push -u origin main
```

## 5. Deploy — GitHub Pages

1. Push the repo to GitHub (see above).
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`.
4. Choose branch `main`, folder `/ (root)`, then **Save**.
5. Your site will be live at `https://[your-username].github.io/[your-repo]/`
   within a few minutes.
6. Update `robots.txt`, `sitemap.xml`, and the canonical/OG URLs in
   `index.html`'s `<head>` with this real domain.

## 6. Deploy — Vercel

1. Install the CLI: `npm i -g vercel` (or use the Vercel dashboard).
2. From the project folder: `vercel`.
3. Accept the defaults — this is a static site, no build command needed.
4. `vercel --prod` to deploy to production.

## 7. Deploy — Netlify

1. Drag-and-drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop), **or**
2. Connect the GitHub repo in the Netlify dashboard with:
   - Build command: *(none)*
   - Publish directory: `/`
3. Deploy.

## 8. Adding your CV

Save your CV as `assets/cv/Mohsin-Al-Jaili-Ahmed-CV.pdf`. The "Download CV"
button in the hero section already points to this exact path — no code
changes needed.

## 9. Adding your profile photo

1. Save your photo to `assets/images/` (e.g. `profile.jpg`).
2. In `index.html`, find the `.photo-frame` div in the About section and
   replace its placeholder text with:
   ```html
   <img src="assets/images/profile.jpg" alt="Mohsin Al-Jaili Ahmed">
   ```
3. Optional: add a 1200×630px `og-cover.jpg` to the same folder for social
   share previews (already referenced in the `<head>` meta tags).

## 10. Updating social links

Search `index.html` for these placeholders and replace them with your real
URLs (each appears in the Cybersecurity, Certifications, and Contact/Footer
sections):

- `[ADD EMAIL]`
- `[ADD GITHUB URL]`
- `[ADD LINKEDIN URL]`
- `[ADD TRYHACKME PROFILE URL]` / `[ADD TRYHACKME URL]`
- `[ADD TELEGRAM URL]`

## 11. Adding projects

Duplicate a `.project-card` block inside the `#projects` section in
`index.html` and update:

- Title, GitHub link, live demo link
- Description, problem, solution
- The `.tags` list of technologies used

## 12. Adding certifications

Duplicate a `.cert-row` block inside the `#certifications` section and fill
in the certification name, issuer, date, and credential URL.

## 13. Updating your TryHackMe profile / stats

The TryHackMe rank and Pre Security status appear in four places: the hero
stats bar, the Cybersecurity Journey cards, the Achievements section, and
the Stats section. Update the numbers and the `[ADD TRYHACKME PROFILE URL]`
/ `[ADD CERTIFICATE URL IF AVAILABLE]` placeholders in each as your profile
changes.

## 14. Updating achievements

Add a new `.achievement-card` inside `#achievements` with a headline
number/result, a title, and a one-sentence description — following the
existing CTF and TryHackMe cards as a pattern.

## 15. Content accuracy

Every placeholder in the site uses the literal format `[ADD ...]` so it's
easy to search-and-replace and impossible to mistake for real content. No
employment history, fabricated certifications, fake statistics, or invented
URLs are included anywhere in this project — fill in placeholders only with
information you can verify.

## 16. Notes on the design

- Dark, near-black theme with a cyan accent, restrained glassmorphism, and a
  terminal-inspired hero visual (typed command lines + an animated network
  diagram) — a nod to the IT/cybersecurity focus without leaning on cliché
  "hacker" imagery.
- Section headers use a monospace `$ command` eyebrow style throughout,
  echoing a command-line/security mindset.
- All animations respect `prefers-reduced-motion`.
- Fully responsive with a mobile hamburger nav, tested down to small phone
  widths — no horizontal scroll.
- Contact form posts to Formspree by default; swap the `action` URL for
  Web3Forms or any other form backend. No API keys live in the frontend code.
