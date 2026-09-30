import styles from './Card.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.card}>
      <h2>Skills</h2>
      <ul>
        <li>Swift, SwiftUI, JavaScript, Python, HTML, and CSS</li>
        <li>Node.js, REST APIs, and JSON</li>
        <li>Xcode, Git, GitHub, TestFlight, and App Store Connect</li>
        <li>
          SAP, Salesforce, Zendesk, Excel (formulas and macros), and Google
          Workspace
        </li>
        <li>Troubleshooting Mac, iPhone, and iPad hardware and software</li>
        <li>Teaching new tools to staff, clients, and students</li>
        <li>Staying calm under pressure and coordinating a team</li>
      </ul>
    </section>
  )
}
