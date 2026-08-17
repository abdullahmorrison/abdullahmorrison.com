import type { Metadata } from 'next'
import styles from './contact.module.scss'
import Nav from '../components/nav/nav'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Contact | Abdullah Morrison',
  description: 'Get in touch with Abdullah Morrison.',
}

export default function Contact() {
  return (
    <main className={styles.contact}>
      <Nav/>

      <div className={styles.body}>
        <h2 className={styles.title}>Contact</h2>
        <ContactForm/>
      </div>
    </main>
  )
}
