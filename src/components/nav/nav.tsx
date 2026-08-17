import Link from 'next/link'
import styles from './nav.module.scss'

export default function nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <h4 className={styles.logo}>My Portfolio</h4>
      </Link>
      <ul>
        <li>
          <h5><Link href="/">Home</Link></h5>
        </li>
        <li>
          <h5><Link href="/contact">Contact</Link></h5>
        </li>
      </ul>
    </nav>
  )
}
