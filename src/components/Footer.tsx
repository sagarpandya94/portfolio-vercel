import { siteConfig } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>{siteConfig.name.toUpperCase()}</div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} · BUILT WITH NEXT.JS · DEPLOYED ON VERCEL
      </div>
    </footer>
  )
}
