'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './SiteHeader.module.css'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Desktop: brand with hover dropdown */}
        <div className={styles.brandWrapper}>
          <Link href="/" className={styles.brand}>
            <span className={styles.name}>Aneesh Nair</span>
            <span className={styles.chevron} aria-hidden="true">&#x25BE;</span>
          </Link>
          <nav className={styles.dropdown} aria-label="Site navigation">
            <div className={styles.dropdownInner}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className={styles.dropdownLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile: hamburger button */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

