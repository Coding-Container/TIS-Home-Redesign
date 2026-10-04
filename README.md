# Tulas International School (TIS) - Homepage Redesign

An animated, responsive redesign of the [TIS homepage](https://tis.edu.in) that keeps the school's brand (logo, headline, copy, menus, links) in a refined navy and saffron palette and adds modern motion and interaction.

## Live Demo

- Live URL:https://tishome.vercel.app/
- Repository: https://github.com/Coding-Container/TIS-Home-Redesign

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3 (class based dark mode)
- Framer Motion 11
- Lucide React icons
- Fonts: Fraunces + Plus Jakarta Sans (Google Fonts)
- Deployment: Vercel

## Standout Features (all four implemented)

1. **Custom Cursor** - spring-driven ring and dot (`useSpring`, transform only). Uses `mix-blend-difference` so it stays visible on navy, saffron and light. The ring grows over links, buttons and form fields. Disabled on touch devices via `(pointer: fine)`.
2. **Scroll-Triggered Reveals** - `RevealGroup` / `RevealItem` stagger children with `whileInView` and `once: true` (0.5s). Also: self-drawing scribbles, count-up stats, parallax dining banner.
3. **Animated Dark/Light Theme Switcher** - spring-sliding thumb with rotating sun/moon, saved in `localStorage`, follows system preference, no flash on load (inline script in `index.html`).
4. **Scroll Progress Bar** - `useScroll` + `useSpring` driving `scaleX` of a fixed top bar.

## What is on the page (mirrors tis.edu.in)

Helpline bar, nav with all dropdowns, full-screen menu, rotating hero image pairs, enquiry form with validation, student quotes, Sports carousel (16+ sports), dining banner, campus stats, rankings, influential personalities, parent videos, virtual tour, Google reviews, collaborations marquee, footer with map, policies and social links, floating Apply Now tab and WhatsApp button.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Deploy to Vercel

Push to GitHub, import the repo in Vercel. Framework preset **Vite**, build command `npm run build`, output directory `dist`.

## Architecture

```
src/
├── components/
│   ├── ui/          Avatar, Icon, ScrollRow, Scribble, ThemeToggle
│   ├── layout/      Navbar, MenuOverlay, Footer, FloatingActions
│   ├── sections/    Hero, Enquiry, Quote, Sports, Dining, Secret (stats), Rankings,
│   │                Personalities, Parents, Reviews, Collaborations
│   └── animation/   ScrollProgress, CustomCursor, Reveal, Counter
├── hooks/           useTheme, useFinePointer, useScrolled
├── data/            content.js (all copy, links, image paths)
└── index.css        Tailwind layers, focus and reduced-motion rules
```

## Notes

- **Images:** photos in `public/img` were cropped from screenshots of the live site for this assessment. For production, swap them for the original assets (same file names, or edit `data/content.js`).
- **Links:** top-level and footer links come from the live site. Sub-page URLs in the dropdowns are generated from their labels (`slug()` in `data/content.js`); verify any that 404.
- **OTP:** Send/Verify OTP is a front-end demo (any 4 to 6 digit code verifies). Connect your SMS API before going live.
- **Accessibility:** semantic landmarks, keyboard-operable dropdowns and carousels, visible focus, `prefers-reduced-motion` respected, 44px+ touch targets.
