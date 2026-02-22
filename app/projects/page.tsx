import type { Metadata } from 'next'
import styles from './projects.module.css'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Open-source and personal projects built by Aneesh Nair, including web apps and developer tools.',
  alternates: {
    canonical: 'https://anix86.github.io/myblog/projects',
  },
  openGraph: {
    type: 'website',
    url: 'https://anix86.github.io/myblog/projects',
    title: 'Projects | Aneesh Nair',
    description: 'Open-source and personal projects built by Aneesh Nair, including web apps and developer tools.',
    images: [{ url: '/aneesh.jpeg', width: 1200, height: 630, alt: 'Aneesh Nair' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Aneesh Nair',
    description: 'Open-source and personal projects built by Aneesh Nair, including web apps and developer tools.',
    images: ['/aneesh.jpeg'],
  },
}

const projects = [
  {
    name: 'Project Alpha',
    link: 'https://github.com/anix86/project-alpha',
    description: 'A web app for visualizing data.',
  },
  {
    name: 'Blog Engine',
    link: 'https://github.com/anix86/blog-engine',
    description: 'A simple markdown-based blog platform.',
  },
]

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles.projectList}>
        {projects.map(project => (
          <li key={project.name} className={styles.projectItem}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>{project.name}</a>
            <p className={styles.projectDescription}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
