import type { Metadata } from 'next'
import { getAboutContent } from '@/lib/about'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Aneesh Nair — IT professional, AI explorer, and tech blogger.',
  alternates: {
    canonical: 'https://anix86.github.io/myblog/about',
  },
  openGraph: {
    type: 'profile',
    url: 'https://anix86.github.io/myblog/about',
    title: 'About Me | Aneesh Nair',
    description: 'Learn more about Aneesh Nair — IT professional, AI explorer, and tech blogger.',
    images: [{ url: '/aneesh.jpeg', width: 1200, height: 630, alt: 'Aneesh Nair' }],
  },
}

export default async function AboutPage() {
  const about = await getAboutContent()

  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.name}>{about.name}</h1>
          {about.headline && <p className={styles.headline}>{about.headline}</p>}
        </section>

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: about.htmlContent }}
        />

        {about.skills.length > 0 && (
          <section className={styles.skillsSection}>
            <h2>Skills</h2>
            <ul className={styles.skills}>
              {about.skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>

        
    </>
  )
}
