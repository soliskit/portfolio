import styles from './Card.module.css'

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.card}>
      <h2>About Me</h2>
      <p>
        I make technology easier to use. I've trained Apple staff, supported
        clients at Bloomberg, and taught teens to code at Girls Who Code. I
        build iPhone and iPad apps in Swift and SwiftUI. I work in English and
        Spanish.
      </p>
    </section>
  )
}
