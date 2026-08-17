'use client'

import { useState } from 'react'
import styles from './contact.module.scss'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const formData = new FormData(event.currentTarget)

    try {
      // Posts to the static file Netlify scanned at deploy time, not to this route.
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error(`Netlify responded ${response.status}`)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className={styles.sent}>
        Thanks — your message is on its way. I&apos;ll get back to you.
      </p>
    )
  }

  return (
    <form name="contact" className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className={styles.honeypot}>
        <label>
          Leave this empty
          <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className={styles.field}>
        <span>Name</span>
        <input type="text" name="name" required autoComplete="name" />
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input type="email" name="email" required autoComplete="email" />
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>

      {status === 'error' && (
        <p className={styles.error}>
          Something went wrong. Email me directly at{' '}
          <a href="mailto:abdullahmorrison@gmail.com">abdullahmorrison@gmail.com</a>.
        </p>
      )}
    </form>
  )
}
