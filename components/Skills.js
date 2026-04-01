import styles from './Card.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.card}>
      <h2>Skills</h2>
      <h3>Soft Skills</h3>
      <ul>
        <li>
          Strong communication, customer service skills, and empathy in
          educational settings.
        </li>
        <li>
          Ability to work under pressure, meet deadlines, and coordinate teams.
        </li>
        <li>Skilled in delegating tasks and delivering quality service.</li>
        <li>Detail-oriented with a strong commitment to excellence.</li>
      </ul>

      <h3>Technical Skills</h3>
      <ul>
        <li>
          Troubleshooting hardware and software issues for Apple desktop and
          mobile computers.
        </li>
        <li>
          Training and development for technical support teams and sales staff.
        </li>
        <li>Remote client technical support and training.</li>
        <li>Proficient in mobile app and website development.</li>
      </ul>
    </section>
  )
}
