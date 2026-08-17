import type { Metadata } from 'next'
import styles from './contact.module.scss'
import Nav from '../components/nav/nav'

export const metadata: Metadata = {
  title: 'Contact | Abdullah Morrison',
  description: 'Get in touch with Abdullah Morrison.',
}

const links = [
  { label: 'Email', value: 'abdullahmorrison@gmail.com', url: 'mailto:abdullahmorrison@gmail.com' },
  { label: 'LinkedIn', value: 'in/abdullah-morrison', url: 'https://linkedin.com/in/abdullah-morrison' },
  { label: 'GitHub', value: 'abdullahmorrison', url: 'https://github.com/abdullahmorrison' },
  { label: 'Resume', value: 'View', url: 'https://abdullahmorrison.github.io/resume/' },
]

export default function Contact() {
  return (
    <main className={styles.contact}>
      <Nav/>

      <div className={styles.body}>
        <h1 className={styles.title}>
          <span><p>Get in</p></span>
          <span className={styles.accent}><p>touch</p></span>
        </h1>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link.label}>
              <h5 className={styles.label}>{link.label}</h5>
              <a
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              >
                {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
