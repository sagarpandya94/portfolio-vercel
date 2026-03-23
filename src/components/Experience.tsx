import { experience } from '@/lib/data'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id='experience' className={styles.section}>
      <div className={styles.sectionLabel}>Career</div>
      <h2 className={styles.sectionHeading}>EXPERIENCE</h2>
      <div className={styles.list}>
        {experience.map((exp) => (
          <div key={exp.company} className={styles.item}>
            <div className={styles.meta}>
              <div className={styles.company}>{exp.company}</div>
              <div className={styles.period}>{exp.period}</div>
              <span className={styles.industryTag}>{exp.industryTag}</span>
            </div>
            <div>
              <div className={styles.role}>{exp.role}</div>
              <p className={styles.desc}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
