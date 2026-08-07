# Ali Hassan — AI Engineer

Personal site for Ali Hassan (`alihassanml`), AI Engineer in Lahore, Pakistan.
Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, GSAP and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

```
/            Hero, capabilities, featured work
/projects    Filterable catalogue of the open-source work
/services    What is on offer and how an engagement runs
/about       Biography, principles and stack
/contact     Contact form and profile links
```

## Structure

```
app/
  layout.tsx            fonts, global metadata, Person + WebSite JSON-LD
  page.tsx              home
  {projects,services,about,contact}/page.tsx
  sitemap.ts robots.ts  generated SEO routes
  opengraph-image.png   static social card (1200x630)
  icon.svg              favicon
  components/
    Hero.tsx            the detection-frame hero and its GSAP timeline
    SmoothScroll.tsx    Lenis, driven by the GSAP ticker
    Reveal.tsx          scroll-triggered rise
    SplitHeading.tsx    line-by-line masked heading reveal
    SiteHeader.tsx SiteFooter.tsx
    ProjectCard.tsx ProjectsExplorer.tsx ContactForm.tsx
lib/
  site.ts               profile, links, stats, SEO keywords
  projects.ts           the project catalogue
public/
  portrait.jpg          cropped portrait used across the site
  image.jpeg            original uncropped source
```

## Design system

Tokens live in the `@theme` block of `app/globals.css` and are consumed as Tailwind
utilities. Warm paper (`bg-paper`), oat panels (`bg-oat`), ink text (`text-ink`,
`text-ink-soft`, `text-ink-mute`) and a single pine accent (`text-pine`).

Rules the design holds to: no gradients, no borders on cards, one accent colour,
one primary action per section. Type is Bricolage Grotesque for display,
Instrument Sans for body and JetBrains Mono for labels and metrics.

Motion is GSAP with a Lenis smooth-scroll layer, and every animation is skipped
under `prefers-reduced-motion`.

## Editing content

Projects, stats and profile links are data, not markup. Edit `lib/projects.ts`
and `lib/site.ts`; the pages, the sitemap and the JSON-LD follow.
