# Bryan Tan — Portfolio

A single-page portfolio built with Next.js 16, React 19, and TypeScript. It brings selected projects, career experience, skills, services, and contact information into one responsive page with light and dark themes.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

## Updating content

- `src/data/portfolio.ts`: projects, career, skills, services, and contact links.
- `src/app/page.tsx`: introduction and personal information.
- `src/app/globals.css`: layout, colors, responsive styles, and reduced-motion support.
- `src/assets`: existing photographs, logos, and project screenshots.
- `public/resume.pdf`: downloadable résumé.

Navigation uses section anchors. Permanent redirects preserve `/about`, `/experience`, and `/contact`. The existing `isDarkMode` preference is retained; first visits use the dark theme. A generated social preview, canonical URL, sitemap, and robots file support sharing and indexing. Vercel Analytics remains enabled.

The production domain is https://bthk2151.dev. Deployment continues through the existing Vercel setup.
