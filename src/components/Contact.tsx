'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mkoqlqdr', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type='text' name='name' placeholder='Your name' required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type='email' name='email' placeholder='your@email.com' required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} name='message' placeholder='Tell me about the role or project...' required />
          </div>
          <button type='submit' className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className={styles.successMsg}>Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}