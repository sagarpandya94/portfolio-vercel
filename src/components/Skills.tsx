import { skillGroups } from '@/lib/data'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id='skills' className={styles.section}>
      <div className={styles.sectionLabel}>Technical Toolkit</div>
      <h2 className={styles.sectionHeading}>SKILLS</h2>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <div className={styles.groupTitle}>{group.title}</div>
            {group.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.barBg}>
                  <div className={styles.barFill} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
