import styles from './Card.module.css'

export default function HowIWork() {
  return (
    <section id="how-i-work" className={styles.card}>
      <h2>How I Work</h2>
      <ul>
        <li>
          <strong>Respect the person.</strong> I build trust so the relationship
          can grow.
        </li>
        <li>
          <strong>Serve the real need.</strong> I offer useful help and real
          options without pressure.
        </li>
        <li>
          <strong>Stay honest.</strong> I am clear about what I know and what I
          still need to learn.
        </li>
        <li>
          <strong>Give and seek feedback.</strong> I value learning from other
          perspectives.
        </li>
        <li>
          <strong>Write clearly.</strong> I keep it clear and concise because I
          value my audience&apos;s time and attention.
        </li>
        <li>
          <strong>Lead by example.</strong> I understand what I ask my team to
          do.
        </li>
      </ul>
    </section>
  )
}
