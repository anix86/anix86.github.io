import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '../components/SiteHeader'
import { photos } from '@/lib/gallery'
import styles from './gallery.module.css'

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <div className={styles.container}>
        <h1 className={styles.heading}>Gallery</h1>
        <div className={styles.grid}>
          {photos.map(photo => (
            <Link
              key={photo.id}
              href={`/gallery/${photo.id}`}
              className={styles.tile}
              aria-label={photo.alt}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.tileImg}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
