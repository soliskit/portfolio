import styles from './Card.module.css'

export default function HowIWork() {
  return (
    <section id="how-i-work" className={styles.card}>
      <h2>How I Work</h2>
      <ul>
        <li>
          <strong>Open with respect.</strong> I use your name, ask permission,
          and explain what&apos;s next. When I don&apos;t know, I say,
          &ldquo;Let&apos;s find out together.&rdquo;
        </li>
        <li>
          <strong>Listen, then serve.</strong> I help people feel heard and meet
          the real need without pressure. I offer real options, never
          ultimatums, so the choice stays yours.
        </li>
        <li>
          <strong>Stay honest.</strong> I share unwelcome answers with care and
          turn hard outcomes into learning. My standard is an experience you
          would recommend to friends and family.
        </li>
        <li>
          <strong>Give and seek feedback.</strong> I give it calmly, privately,
          and with permission, about behavior and impact, never character. I ask
          what to stop, start, and continue.
        </li>
        <li>
          <strong>Write clearly.</strong> Brevity respects busy readers and lets
          what matters stand out.
        </li>
        <li>
          <strong>Lead by example.</strong> I show genuine excitement to learn,
          and I understand what I ask my team to do.
        </li>
      </ul>
    </section>
  )
}
