import styles from './Card.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.card}>
      <h2>Experience</h2>

      <div className="job">
        <h3>Distributor Support at Enagic</h3>
        <span>2024 – Present</span>
        <ul>
          <li>
            Track reliability issues reported by end users and escalate them to
            management for resolution.
          </li>
          <li>
            Manage customer and distributor accounts and support requests in
            SAP, a custom CRM, and Zendesk.
          </li>
          <li>
            Build and maintain Excel sales and performance reports for the
            accounting, operations, and sales teams.
          </li>
          <li>
            Work with other teams to verify distributor information, review
            commission reports, and reconcile accounts.
          </li>
          <li>
            Support customers and distributors by email, phone, and live chat.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Site Instructor at Girls Who Code</h3>
        <span>Summers 2019 – 2021</span>
        <ul>
          <li>
            Guided an in-person class of more than 20 aspiring computer
            scientists through seven weeks of Python, HTML, CSS, JavaScript,
            GitHub, and Arduino C.
          </li>
          <li>
            Taught Agile development, debugging, and teamwork on a software
            team, and helped students prepare for college.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Developer at Peaking Software</h3>
        <span>2016 – 2021</span>
        <ul>
          <li>
            Created iPhone and iPad apps in Swift and SwiftUI, starting in Swift
            Playgrounds.
          </li>
          <li>
            Developed databases, servers, websites, and iPhone apps for clients.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Client Support at Bloomberg LP</h3>
        <span>2015 – 2016</span>
        <ul>
          <li>
            Trained clients on the Bloomberg Terminal and supported its PC and
            mobile software, including troubleshooting and scheduling field
            service visits.
          </li>
          <li>
            Spearheaded a wiki that kept the San Francisco support team&apos;s
            systems and procedures clearly documented.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Genius Technician at Apple</h3>
        <span>2013 – 2015</span>
        <ul>
          <li>
            Backed up store leadership: handled Red Zone overrides, covered
            Leader on the Floor breaks, and ran One to One trainings.
          </li>
          <li>
            Solved customer issues end to end, earning a high Net Promoter Score
            as a technician in a Training Store.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>In-Store Guest Trainer at Apple</h3>
        <span>2013</span>
        <ul>
          <li>
            Designed and delivered training for new-hire onboarding, sales,
            technical skills, and train-the-trainer workshops.
          </li>
          <li>
            Started an employee mentorship program that raised product and
            technical knowledge across the market, earning it the Q2 2013 Most
            Improved Net Promoter Score.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Sales Specialist at Apple</h3>
        <span>2011 – 2013</span>
        <ul>
          <li>
            Led the in-store workshop team, earning the store a Net Promoter
            Score of 98 for three quarters.
          </li>
          <li>
            Worked overnight on the Visual Merchandising Team, setting up
            products and displays to exact guideline measurements.
          </li>
        </ul>
      </div>
    </section>
  )
}
