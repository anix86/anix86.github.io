# Aneesh Nair — Developer Portfolio & Blog

A personal portfolio and blog built with **Next.js 16**, **React 19**, and **TypeScript**. Statically generated, mobile-friendly, and deployed on GitHub Pages.

🔗 **Live:** [anix86.github.io/myblog](https://anix86.github.io/myblog)

## Features

- **Blog** — Markdown-powered posts with reading time, tags, excerpts, and syntax highlighting
- **Gallery** — Photo gallery with individual photo pages
- **Projects** — Showcase of development projects
- **SEO** — Open Graph, Twitter cards, JSON-LD structured data, sitemap, and robots.txt
- **Responsive** — Mobile-first layout with optimised padding, flex-wrap meta rows, and adaptive thumbnails

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Static Export) |
| Language | TypeScript |
| Styling | CSS Modules |
| Content | Markdown + gray-matter + remark |
| Deployment | GitHub Pages via Vercel |

## Project Structure

```
app/            → Pages & components (App Router)
  blog/         → Blog list & [slug] post pages
  gallery/      → Gallery list & [id] photo pages
  projects/     → Projects page
  components/   → Shared components (SiteHeader, JsonLd)
content/        → Markdown content (posts, gallery)
lib/            → Utilities (markdown parser, gallery helpers)
public/         → Static assets (images, favicon, robots.txt)
styles/         → Global CSS
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

© Aneesh Nair. All rights reserved.