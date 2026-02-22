import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/markdown'
import styles from './blog.module.css'
import { JsonLd } from '../components/JsonLd'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts about web development, programming, and technology.',
  alternates: {
    canonical: 'https://anix86.github.io/myblog/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://anix86.github.io/myblog/blog',
    title: 'Blog | Aneesh Nair',
    description: 'Read my latest blog posts about web development, programming, and technology.',
    images: [{ url: '/aneesh.jpeg', width: 1200, height: 630, alt: 'Aneesh Nair Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Aneesh Nair',
    description: 'Read my latest blog posts about web development, programming, and technology.',
    images: ['/aneesh.jpeg'],
  },
}

export default function Blog() {
  const posts = getAllPosts()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://anix86.github.io/myblog' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://anix86.github.io/myblog/blog' },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className={styles.container}>
        <h1>Blog Posts</h1>
        <ul className={styles.postList}>
          {posts.map(post => (
            <li key={post.slug} className={styles.postRow}>
              <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                <div className={styles.thumb}>
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      width={96}
                      height={96}
                      className={styles.thumbImg}
                    />
                  ) : (
                    <div className={styles.thumbPlaceholder} aria-hidden="true" />
                  )}
                </div>
                <div className={styles.postInfo}>
                  <span className={styles.postTitle}>{post.title}</span>
                  <span className={styles.postMeta}>
                    <time dateTime={post.date}>{post.date}</time>
                    {post.readingTime && <span>{post.readingTime}</span>}
                  </span>
                  {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
