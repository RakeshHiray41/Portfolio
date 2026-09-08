# Rakesh Hiray — Portfolio

A multi-page personal portfolio built with React, React Router, Vite and Tailwind CSS.

## Features

- **5 real pages** with routing — Home, About, Experience, Projects, Contact (+ 404)
- **Real profile photo** with automatic initials fallback if the image is ever removed
- **View Resume button** — opens `public/resume.pdf`, wired into the navbar, hero and About page
- **Dark / light mode** — toggle in the navbar, remembers your choice, respects system preference on first visit
- **Multi-hue color system** — each skill category and project gets its own accent color (blueprint, signal/rust, sage, plum, teal) instead of a flat monochrome look
- **Scroll progress bar** at the top of the viewport
- **Back-to-top button** that appears once you scroll down
- **Copy-to-clipboard** on the email contact card
- **Contact form** — opens the visitor's email client with a prefilled message (frontend-only, no backend)
- **GitHub stats card** — live GitHub stats and streak, embedded via github-readme-stats
- **Open Graph / Twitter meta tags + favicon** for clean link previews when shared
- **Fully responsive**, sticky navbar with mobile menu
- **Component-based, industrial-level structure** — see below

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or any static host.

- `vercel.json` and `public/_redirects` are already included so page refreshes on
  `/about`, `/projects`, etc. don't 404.
- Deploying to GitHub Pages instead? Either use a custom 404.html redirect trick or
  switch `BrowserRouter` to `HashRouter` in `src/App.jsx`.

## Change the photo

Replace `public/profile.jpg` with your own image — same filename, any aspect ratio works,
though square photos look best. `Avatar.jsx` picks it up automatically; no code changes needed.
If the file is ever missing, it falls back to an "RH" initials monogram automatically.

## Project structure

```
public/
├── resume.pdf             # served by the "View Resume" buttons
├── profile.jpg              # your photo
├── favicon.svg
└── _redirects               # Netlify SPA routing

src/
├── App.jsx                  # route definitions + theme/scroll providers
├── main.jsx                  # React entry point
├── index.css                 # Tailwind + light/dark CSS variables
├── context/
│   └── ThemeContext.jsx       # dark/light mode state, persisted locally
├── data/                     # all content, separate from UI
│   ├── navigation.js
│   ├── profile.js              # name, bio, contact, quick stats
│   ├── experience.js
│   ├── projects.js
│   ├── skills.js
│   └── education.js
├── pages/                    # one component per route
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
└── components/
    ├── layout/
    │   ├── PageLayout.jsx      # navbar + page + footer shell
    │   ├── Navbar.jsx          # sticky nav, active-route highlight, theme toggle
    │   ├── Footer.jsx
    │   ├── ScrollToTop.jsx     # scrolls to top on route change
    │   ├── ScrollProgress.jsx  # top progress bar
    │   └── BackToTop.jsx       # floating scroll-to-top button
    ├── sections/
    │   ├── ExperienceItem.jsx
    │   ├── ProjectCard.jsx     # colored left-border accent, cycles per project
    │   ├── SkillsTable.jsx     # colored tag per skill category
    │   └── EducationList.jsx
    └── ui/
        ├── Avatar.jsx          # photo with initials fallback
        ├── Button.jsx          # primary/secondary CTA button
        ├── Tag.jsx             # multi-color chip
        ├── SocialLink.jsx
        ├── SectionLabel.jsx
        ├── ThemeToggle.jsx
        └── GithubStatsCard.jsx
```

## Edit content

Nothing about your info is hardcoded inside components — it all lives in `src/data/*.js`.
Add a new job, project, skill category, or update contact info there; pages re-render
automatically.

Colors (light + dark) are defined as CSS variables at the top of `src/index.css`, and
mapped into Tailwind in `tailwind.config.js`.
