import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { photos, getPhotoDetail } from '@/lib/gallery'
import SiteHeader from '../../components/SiteHeader'
import styles from './photo.module.css'

export function generateStaticParams() {
  return photos.map(p => ({ id: String(p.id) }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const photo = await getPhotoDetail(Number(id))
  if (!photo) return { title: 'Photo Not Found' }
  return {
    title: photo.title,
    description: photo.description.slice(0, 160),
  }
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const photo = await getPhotoDetail(Number(id))
  if (!photo) notFound()

  return (
    <>
      <SiteHeader />
      <div className={styles.container}>
        <Link href="/gallery" className={styles.back}>
          ← Back to Gallery
        </Link>

        <h1 className={styles.title}>{photo.title}</h1>

        <p className={styles.meta}>
          <span>{photo.location}</span>
          <span className={styles.sep}>·</span>
          <time dateTime={photo.date}>{photo.date}</time>
        </p>

        <div className={styles.imageWrap}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 860px) 100vw, 800px"
            className={styles.image}
            priority
          />
        </div>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: photo.htmlDescription }}
        />
      </div>
    </>
  )
}
