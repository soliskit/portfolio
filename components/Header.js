import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>David Solis</h1>
      <p className={styles.tagline}>
        Fluent in Swift, English, and Spanish. English compiles now.
      </p>
      <img
        src="/images/maya.png"
        alt="David Solis"
        className={styles.profilePhoto}
      />
      <p>Los Angeles, CA</p>
      <p>
        Email: <a href="mailto:hello@davidsolis.me">hello@davidsolis.me</a>
      </p>
    </header>
  )
}
