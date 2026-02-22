import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/markdown'

export const dynamic = 'force-static'

const BASE_URL = 'https://anix86.github.io/myblog'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const postEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...postEntries,
  ]
}
