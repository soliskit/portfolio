import styles from './Card.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.card}>
      <h2>Experience</h2>

      <div className="job">
        <h3>Distributor Support at Enagic</h3>
        <span>2024 - Present</span>
        <ul>
          <li>
            Monitored and recorded reliability issues reported by end users,
            escalating them to management for review and resolution to uphold
            product and service quality.
          </li>
          <li>
            Employed SAP, a custom Customer Relationship Management (CRM)
            system, and Zendesk to manage customer and distributor accounts,
            process support requests, and ensure prompt issue resolution.
          </li>
          <li>
            Developed and maintained Excel-based sales and performance reports
            for accounting, operations, and sales teams, ensuring data accuracy
            and consistency across departments.
          </li>
          <li>
            Collaborated with cross-functional teams to verify distributor
            information, review commission reports, and support account
            reconciliation processes.
          </li>
          <li>
            Provided responsive and high-quality support via email, phone, and
            live chat, fostering trust and strong relationships with both
            customers and distributors.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Site Instructor at Girls Who Code</h3>
        <span>Summer 2019 - 2021</span>
        <ul>
          <li>
            Led an in-person classroom of over twenty aspiring computer
            scientists, covering Python, HTML, CSS, GitHub, JavaScript & Arduino
            C over seven weeks.
          </li>
          <li>
            Developed core skills such as Agile development, debugging & the
            importance of collaboration within a software team while offering
            college preparedness.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Developer at Peaking Software</h3>
        <span>2016 - 2021</span>
        <ul>
          <li>
            Learned to build iPhone apps using Swift Playgrounds. Embraced
            Apple’s latest framework SwiftUI for building my latest iPhone &
            iPad apps.
          </li>
          <li>
            Developed databases, servers, websites and iPhone apps for clients.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Client Support at Bloomberg LP</h3>
        <span>2015 - 2016</span>
        <ul>
          <li>
            Provided training & technical support for PC and mobile software,
            coordinated field service visits, and performed troubleshooting.
          </li>
          <li>
            Steered the initiative to create a wiki for the San Francisco
            technical support team, ensuring clear, concise, and accurate
            documentation of systems and procedures.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Genius Technician at Apple</h3>
        <span>2013 - 2015</span>
        <ul>
          <li>
            Supplied leadership with support including providing overrides for
            the Redzone, relief for Leader on the Floor for breaks and conducted
            One to One trainings.
          </li>
          <li>
            Provided exceptional customer service and offered complete solutions
            to customers, as reflected by my high NPS score as a technician in a
            Training Store.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>In Store Guest Trainer at Apple</h3>
        <span>2013</span>
        <ul>
          <li>
            Developed & facilitated training for employee on-boarding, ongoing
            sales training, technical training, & train the trainer workshops as
            In Store Guest Trainer.
          </li>
          <li>
            Increased product & technical knowledge at the market level with my
            employee mentorship initiative, which earned the market Q2 2013 Most
            Improved Net Promoter Score.
          </li>
        </ul>
      </div>

      <div className="job">
        <h3>Sales Specialist at Apple</h3>
        <span>2011 - 2013</span>
        <ul>
          <li>
            Led in store workshop team which earned the store Net Promoter Score
            of 98 for three quarters.
          </li>
          <li>
            Participated in overnight shifts as part of the Visual Merchandising
            Team, preparing products and visuals, ensuring their presentation
            adhered to exact measurements based on guidelines.
          </li>
        </ul>
      </div>
    </section>
  )
}
