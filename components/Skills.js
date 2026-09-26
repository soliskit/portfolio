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
        <li>Quick to adopt new tools and teach others to use them</li>
        <li>Ownership of customer issues, from first contact to resolution</li>
      </ul>

      <h3>Technical Skills</h3>
      <ul>
        <li>Swift, SwiftUI, JavaScript, Python, HTML, and CSS</li>
        <li>Node.js, REST APIs, and JSON</li>
        <li>Xcode, Git, GitHub, TestFlight, and App Store Connect</li>
        <li>SAP, Salesforce, and Zendesk</li>
        <li>Excel (formulas and macros) and Google Workspace</li>
        <li>Troubleshooting Mac, iPhone, and iPad hardware and software</li>
      </ul>
    </section>
  )
}
