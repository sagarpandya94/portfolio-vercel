'use client'

import { siteConfig } from '@/lib/data'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id='contact' className={styles.section}>
      <div className={styles.sectionLabel}>Get In Touch</div>
      <div className={styles.inner}>
        <div>
          <div className={styles.big}>
            LET&apos;S
            <br />
            <span>TALK.</span>
          </div>
          <p className={styles.sub}>{siteConfig.contactBlurb}</p>
          <div className={styles.links}>
            <a href={siteConfig.contact.github} target='_blank' rel='noopener noreferrer' className={styles.link}>
              <div className={styles.linkIcon}>GH</div>
              <span>{siteConfig.contact.githubHandle}</span>
            </a>
            <a href={siteConfig.contact.linkedin} target='_blank' rel='noopener noreferrer' className={styles.link}>
              <div className={styles.linkIcon}>LI</div>
              <span>{siteConfig.contact.linkedinHandle}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className={styles.link}>
              <div className={styles.linkIcon}>@</div>
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type='text' placeholder='Your name' />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type='email' placeholder='your@email.com' />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} placeholder='Tell me about the role or project...' />
          </div>
          <button type='submit' className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
