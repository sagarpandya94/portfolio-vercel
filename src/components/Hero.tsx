import { siteConfig, stats, industryTags } from '@/lib/data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id='about'>
      <div className={styles.label}>{siteConfig.tagline}</div>

      <h1 className={styles.name}>
        {siteConfig.name.split(' ')[0]}
        <br />
        <span>{siteConfig.name.split(' ')[1]}</span>
      </h1>

      <div className={styles.title}>{siteConfig.role}</div>

      <p className={styles.desc}>{siteConfig.description}</p>

      <div className={styles.tags}>
        {industryTags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.actions}>
        <a href='#projects' className={styles.btnPrimary}>
          View Projects
        </a>
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className={styles.btnGhost}>
          Download CV
        </a>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className={styles.statNum}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
