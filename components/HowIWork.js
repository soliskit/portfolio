import styles from './Card.module.css'

export default function HowIWork() {
  return (
    <section id="how-i-work" className={styles.card}>
      <h2>How I Work</h2>
      <ul>
        <li>
          <strong>Open with respect.</strong> I use your name and explain
          what&apos;s next.
        </li>
        <li>
          <strong>Listen, then serve.</strong> I offer real options, never
          ultimatums.
        </li>
        <li>
          <strong>Stay honest.</strong> When I don&apos;t know, I say,
          &ldquo;Let&apos;s find out together.&rdquo;
        </li>
        <li>
          <strong>Give and seek feedback.</strong> I give it privately and ask
          what to stop, start, and continue.
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
