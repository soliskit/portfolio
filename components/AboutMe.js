import styles from './Card.module.css'

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.card}>
      <h2>About Me</h2>
      <p>
        I started on the sales floor at Apple, leading workshops that helped
        people get comfortable with their devices. That led to training Apple
        staff, solving customer issues as a Genius, and training clients on the
        Bloomberg Terminal. Then I started building technology too, making
        iPhone and iPad apps in Swift and SwiftUI and teaching teens to code at
        Girls Who Code. Today I support customers and distributors at Enagic. I
        work in English and Spanish, and in every role I build trust and grow
        relationships, one interaction at a time.
      </p>
    </section>
  )
}
