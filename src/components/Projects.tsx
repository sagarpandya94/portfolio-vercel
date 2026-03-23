import { projects, philosophyBlocks } from '@/lib/data'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id='projects' className={styles.section}>
      <div className={styles.sectionLabel}>Selected Work</div>
      <h2 className={styles.sectionHeading}>PROJECTS</h2>

      <div className={styles.philosophyStrip}>
        {philosophyBlocks.map((block) => (
          <div key={block.title} className={styles.philosophyBlock}>
            <div className={styles.philosophyIcon}>{block.icon}</div>
            <div>
              <div className={styles.philosophyTitle}>{block.title}</div>
              <p className={styles.philosophyDesc}>{block.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target={project.active ? '_blank' : undefined}
            rel='noopener noreferrer'
            className={`${styles.card} ${!project.active ? styles.inactive : ''} ${project.tagVariant === 'teal' ? styles.tealAccent : ''}`}
          >
            <span className={`${styles.tag} ${project.tagVariant === 'teal' ? styles.tagTeal : ''}`}>
              {project.tag}
            </span>
            <div className={styles.industry}>{project.industry}</div>
            <div className={styles.title}>{project.title}</div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((s) => (
                <span key={s} className={styles.pill}>
                  {s}
                </span>
              ))}
            </div>
            <span className={styles.arrow}>{project.active ? '↗' : '→'}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
