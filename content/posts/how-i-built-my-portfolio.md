---
title: "How I built my portfolio"
date: "2025-07-20"
excerpt: "Step-by-step guide to building my portfolio site with Next.js."
author: "Aneesh Nair"
tags: ["nextjs", "portfolio", "web development"]
featured: false
recommended: true
coverImage: "https://picsum.photos/seed/portfolio/400/300"
readingTime: "5 min read"
---

# How I Built My Portfolio

Building a portfolio website is an essential step for any developer. In this post, I'll walk you through how I built mine using Next.js 15, the App Router, and modern web technologies.

## Why Next.js?

Next.js offers several advantages for building a portfolio:

- **Static Site Generation (SSG)** for blazing-fast performance
- **App Router** for modern React patterns
- **Built-in optimizations** for images and fonts
- **Easy deployment** to platforms like Vercel or GitHub Pages

## The Tech Stack

Here's what I used to build my portfolio:

1. **Next.js 15** - The React framework
2. **TypeScript** - For type safety
3. **CSS Modules** - For component-scoped styling
4. **GitHub Pages** - For free hosting

## Getting Started

First, I created a new Next.js project:

```bash
npx create-next-app@latest my-portfolio --typescript --app
```

## Structuring the Project

I organized my project with the following structure:

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── blog/
│   ├── page.tsx    # Blog listing
│   └── [slug]/
│       └── page.tsx # Individual blog posts
└── projects/
    └── page.tsx    # Projects showcase
```

## Key Features

### 1. Responsive Design
The portfolio is fully responsive, ensuring a great experience on all devices.

### 2. Dark Mode Support
I implemented a dark mode toggle for better user experience.

### 3. SEO Optimization
Each page has proper meta tags for better search engine visibility.

## Lessons Learned

Building this portfolio taught me:
- The importance of performance optimization
- How to structure a scalable Next.js application
- The value of clean, maintainable code

## Conclusion

Creating your own portfolio is a rewarding experience that showcases your skills while teaching you new ones. I encourage every developer to build their own!
