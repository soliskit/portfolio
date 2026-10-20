import styles from './Card.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.card}>
      <h2>Experience</h2>

      <div>
        <h3>Distributor Support at Enagic</h3>
        <span>2024 – Present</span>
        <ul>
          <li>
            Track reliability problems reported by customers and give management
            the information needed to address them.
          </li>
          <li>
            Support customers and distributors by email, phone, and live chat,
            managing their accounts and requests across ERP, CRM, and ticketing
            systems.
          </li>
          <li>
            Build and maintain sales and performance reports for the accounting,
            operations, and sales teams.
          </li>
          <li>
            Work with teams across the company to verify distributor
            information, review commission reports, and reconcile accounts.
          </li>
        </ul>
      </div>

      <div>
        <h3>Site Instructor at Girls Who Code</h3>
        <span>Summers 2019 – 2021</span>
        <ul>
          <li>
            Taught Python, HTML, CSS, JavaScript, Arduino C, and version control
            to an in-person class of more than 20 high school students over
            seven weeks.
          </li>
          <li>
            Coached students in Agile development, debugging, and teamwork, made
            asking for help feel welcome, and helped them prepare for college.
          </li>
        </ul>
      </div>

      <div>
        <h3>Software Developer at Peaking Software</h3>
        <span>2016 – 2021</span>
        <ul>
          <li>
            Created iPhone and iPad apps in Swift and SwiftUI.
          </li>
          <li>
            Developed databases, servers, websites, and iPhone apps for clients.
          </li>
        </ul>
      </div>

      <div>
        <h3>Client Support at Bloomberg LP</h3>
        <span>2015 – 2016</span>
        <ul>
          <li>
            Trained clients on the Bloomberg Terminal and supported its PC and
            mobile software, troubleshooting issues and coordinating field
            service visits.
          </li>
          <li>
            Started a wiki to document the San Francisco support team&apos;s
            systems and procedures.
          </li>
        </ul>
      </div>

      <div>
        <h3>Genius Technician at Apple</h3>
        <span>2013 – 2015</span>
        <ul>
          <li>
            Supported store leaders by handling sales-floor overrides, covering
            floor leadership during breaks, and leading One to One training
            sessions.
          </li>
          <li>
            Earned a Net Promoter Score (NPS) of 97 as a technician in a
            Training Store by listening first and solving customer problems from
            start to finish.
          </li>
        </ul>
      </div>

      <div>
        <h3>In-Store Guest Trainer at Apple</h3>
        <span>2013</span>
        <ul>
          <li>
            Built and delivered training for new-hire onboarding, sales,
            technical skills, and train-the-trainer workshops.
          </li>
          <li>
            Started an employee mentorship program that raised product and
            technical knowledge market-wide, helping the market win the Q2 2013
            Most Improved NPS.
          </li>
        </ul>
      </div>

      <div>
        <h3>Sales Specialist at Apple</h3>
        <span>2011 – 2013</span>
        <ul>
          <li>
            Led the in-store workshop team, earning the store an NPS of 98 for
            three quarters.
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
