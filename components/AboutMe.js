import styles from './Card.module.css'

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.card}>
      <h2>About Me</h2>
      <p>
        I started on the sales floor at Apple, helping people get comfortable
        with their devices. That grew into training Apple staff and Bloomberg
        clients, then into building iPhone and iPad apps and teaching teens to
        code. I support customers and teach in English and Spanish.
      </p>
    </section>
  )
}
