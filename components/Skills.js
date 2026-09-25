import styles from './Card.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.card}>
      <h2>Skills</h2>
      <h3>Soft Skills</h3>
      <ul>
        <li>
          Clear communication and empathy, from support desks to classrooms
        </li>
        <li>Calm under pressure and able to coordinate a team</li>
      </ul>

      <h3>Technical Skills</h3>
      <ul>
        <li>Swift, SwiftUI, JavaScript, Python, HTML, and CSS</li>
        <li>Mobile app and website development</li>
        <li>Troubleshooting Mac, iPhone, and iPad hardware and software</li>
        <li>Training technical support teams and sales staff</li>
        <li>Remote technical support and client training</li>
      </ul>
    </section>
  )
}
