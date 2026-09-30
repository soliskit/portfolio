import styles from './Card.module.css'

export default function HowIWork() {
  return (
    <section id="how-i-work" className={styles.card}>
      <h2>How I Work</h2>
      <ul>
        <li>
          <strong>Respect the person.</strong> I listen first and help people
          feel heard.
        </li>
        <li>
          <strong>Serve the real need.</strong> I offer useful help and real
          options without pressure.
        </li>
        <li>
          <strong>Stay honest.</strong> I admit what I don&apos;t know and
          handle unwelcome answers with care.
        </li>
        <li>
          <strong>Give and seek feedback.</strong> I focus on behavior and
          impact, and ask how I can improve.
        </li>
        <li>
          <strong>Write clearly.</strong> Brevity respects your time.
        </li>
        <li>
          <strong>Lead by example.</strong> I understand what I ask my team to
          do.
        </li>
      </ul>
    </section>
  )
}
