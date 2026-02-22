import Image from 'next/image'
import Link from 'next/link'
import styles from './SiteHeader.module.css'

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <Image
          src="/aneesh.jpeg"
          alt="Aneesh Nair"
          width={36}
          height={36}
          className={styles.avatar}
          priority
        />
        <span className={styles.name}>Aneesh Nair</span>
      </Link>
    </header>
  )
}
