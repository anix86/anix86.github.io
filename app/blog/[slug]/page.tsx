import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPostSlugs, getPostWithHtml } from '@/lib/markdown'
import styles from './blogpost.module.css'
import { JsonLd } from '../../components/JsonLd'

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = await getPostWithHtml(slug)
    
    return {
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: `https://anix86.github.io/myblog/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        tags: post.tags,
        images: post.coverImage
          ? [{ url: post.coverImage, width: 400, height: 300, alt: post.title }]
          : [{ url: '/aneesh.jpeg', width: 1200, height: 630, alt: post.title }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : ['/aneesh.jpeg'],
      },
    }
  } catch {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const post = await getPostWithHtml(slug)
    
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { '@type': 'Person', name: post.author, url: 'https://anix86.github.io/myblog' },
      image: post.coverImage ?? 'https://anix86.github.io/myblog/aneesh.jpeg',
      url: `https://anix86.github.io/myblog/blog/${slug}`,
      keywords: post.tags.join(', '),
    }

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://anix86.github.io/myblog' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://anix86.github.io/myblog/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://anix86.github.io/myblog/blog/${slug}` },
      ],
    }

    return (
      <>
        <JsonLd data={articleSchema} />
        <JsonLd data={breadcrumbSchema} />
        <article className={styles.blogPostContainer}>
          <header className={styles.postHeader}>
            <h1>{post.title}</h1>
            <div className={styles.postMeta}>
              <time className={styles.blogPostDate} dateTime={post.date}>{post.date}</time>
              <span className={styles.readingTime}>{post.readingTime}</span>
              <span className={styles.author}>by {post.author}</span>
            </div>
            {post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div
            className={styles.blogPostContent}
            dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
          />
        </article>
      </>
    )
  } catch {
    notFound()
  }
}
