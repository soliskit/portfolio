import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#how-i-work" className={styles.link}>
        How I Work
      </a>
      <a href="#experience" className={styles.link}>
        Experience
      </a>
      <a href="#skills" className={styles.link}>
        Skills
      </a>
      <a href="#education" className={styles.link}>
        Education
      </a>
    </nav>
  )
}
