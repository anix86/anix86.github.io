import '../styles/globals.css'
import React from 'react'
import SiteHeader from './components/SiteHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://anix86.github.io/myblog'),
  title: {
    default: 'Aneesh Nair - Developer Portfolio',
    template: '%s | Aneesh Nair'
  },
  description: 'Personal portfolio and blog of Aneesh Nair, a passionate web developer specializing in modern web technologies.',
  keywords: ['developer', 'portfolio', 'blog', 'web development', 'Next.js', 'React'],
  authors: [{ name: 'Aneesh Nair' }],
  creator: 'Aneesh Nair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anix86.github.io/myblog',
    siteName: 'Aneesh Nair Portfolio',
    title: 'Aneesh Nair - Developer Portfolio',
    description: 'Personal portfolio and blog of Aneesh Nair',
    images: [{
      url: '/aneesh.jpeg',
      width: 1200,
      height: 630,
      alt: 'Aneesh Nair Profile Photo'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aneesh Nair - Developer Portfolio',
    description: 'Personal portfolio and blog of Aneesh Nair',
    images: ['/aneesh.jpeg']
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: 'https://anix86.github.io/myblog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body>
        <div className="site-wrapper">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} Aneesh Nair. All rights reserved.</p>
            <p>
              <a href="https://github.com/anix86" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span className="footer-sep">·</span>
              <a href="https://x.com/anix86" target="_blank" rel="noopener noreferrer">Twitter / X</a>
              <span className="footer-sep">·</span>
              <a href="https://linkedin.com/in/anix86" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span className="footer-sep">·</span>
              <a href="/about">About</a>
              <span className="footer-sep">·</span>
              <a href="/blog">Blog</a>
              <span className="footer-sep">·</span>
              <a href="/gallery">Gallery</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
