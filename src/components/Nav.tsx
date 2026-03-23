'use client'

import { siteConfig } from '@/lib/data'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>{siteConfig.initials}</div>
      <ul className={styles.links}>
        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className={styles.cta}>
        Resume
      </a>
    </nav>
  )
}
