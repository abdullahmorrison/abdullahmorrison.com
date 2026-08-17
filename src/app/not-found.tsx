import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './not-found.module.scss'
import Nav from '@/components/nav/nav'

export const metadata: Metadata = {
  title: 'Page not found | Abdullah Morrison',
}

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <Nav/>

      <div className={styles.body}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>That page does not exist.</p>
        <Link href="/" className={styles.home}>Back home</Link>
      </div>
    </main>
  )
}
