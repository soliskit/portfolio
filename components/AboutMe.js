import styles from './Card.module.css'

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.card}>
      <h2>About Me</h2>
      <p>
        I've always been the person who makes tech make sense: training at
        Apple, supporting clients at Bloomberg, teaching teens to code at Girls
        Who Code. Now that AI turns clear descriptions into working software,
        that same skill builds apps. I write Swift and think in English and
        Spanish.
      </p>
    </section>
  )
}
