import styles from './Card.module.css'

export default function HowIWork() {
  return (
    <section id="how-i-work" className={styles.card}>
      <h2>How I Work</h2>
      <ul>
        <li>
          <strong>Open with respect.</strong> I give everyone my full attention
          and explain each step before I take it.
        </li>
        <li>
          <strong>Listen, then serve.</strong> I lay out the options and let
          people decide, even if they keep what they have.
        </li>
        <li>
          <strong>Stay honest.</strong> I say, &ldquo;I&nbsp;don&apos;t
          know,&rdquo; instead of pretending I do, because credibility is hard
          to win back.
        </li>
        <li>
          <strong>Give and seek feedback.</strong> Done well, it lifts others up
          and holds us all to a higher standard.
        </li>
        <li>
          <strong>Write clearly.</strong> I put myself in the reader&apos;s
          place and cut what they don&apos;t need.
        </li>
        <li>
          <strong>Lead by example.</strong> I&apos;m quick to ask for help, so
          no one on my team has to struggle alone.
        </li>
      </ul>
    </section>
  )
}
