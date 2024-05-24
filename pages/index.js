import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About Me - David Solis</title>
        <meta name="description" content="David Solis' personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="neumorphismCard header">
        <h1>David Solis</h1>
        <p>Carson, CA</p>
        <p>Email: <a href="mailto:hello@davidsolis.me">hello@davidsolis.me</a></p>
      </header>

      <nav className="neumorphismCard nav">
        <a href="#about-me">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#mentorship">Mentorship</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about-me" className="neumorphismCard">
        <h2>About Me</h2>
        <p>Passionate educator with a background in technology, dedicated to inspiring students through engaging, digitally enhanced learning experiences using interactive tools.</p>
      </section>

      <section id="skills" className="neumorphismCard">
        <h2>Skills</h2>
        <h3>Technical Skills</h3>
        <ul>
          <li>Troubleshooting hardware and software issues for Apple desktop and mobile computers</li>
          <li>Training and development for technical support teams and sales staff</li>
          <li>Remote client technical support and training</li>
          <li>Proficient in mobile app and website development</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Strong communication, customer service skills, and empathy in educational settings</li>
          <li>Ability to work under pressure, meet deadlines, and coordinate teams</li>
          <li>Skilled in delegating tasks and delivering quality service</li>
          <li>Detail-oriented with a strong commitment to excellence</li>
        </ul>
      </section>

      <section id="experience" className="neumorphismCard">
        <h2>Experience</h2>
        <div className="job">
          <h3>Software Developer at Peaking Software</h3>
          <span>2016 - Present</span>
          <ul>
            <li>Developed software solutions encompassing databases, servers, websites, and native Apple applications customized to meet individual client needs</li>
            <li>Implemented project roadmaps when available and collaborated with clients and stakeholders to design project specifications as required</li>
          </ul>
        </div>
        <div className="job">
          <h3>Support Trainer at Bloomberg LP</h3>
          <span>2015 - 2016</span>
          <ul>
            <li>Provided training & technical support for PC and mobile software, coordinated field service visits, and performed troubleshooting</li>
            <li>Led the initiative to create a Wikipedia for the San Francisco technical support team, ensuring clear, concise, and accurate documentation of systems and procedures</li>
          </ul>
        </div>
        <div className="job">
          <h3>Training Lead at Apple</h3>
          <span>2011 - 2015</span>
          <ul>
            <li>Developed & facilitated training ranging from employee on-boarding, ongoing sales training, technical training, & train the trainer workshops</li>
            <li>Increased product & technical knowledge at the market level with my employee mentorship initiative, which earned the market Q2 2013 Most Improved Net Promoter Score</li>
          </ul>
        </div>
      </section>

      <section id="education" className="neumorphismCard">
        <h2>Education</h2>
        <p>University of California, Riverside – Bachelors of Arts in History</p>
      </section>

      <section id="mentorship" className="neumorphismCard">
        <h2>Mentorship</h2>
        <p>Site Instructor at Girls Who Code • Summer 2019 & 2020</p>
        <ul>
          <li>Led an in-person classroom of over twenty aspiring computer scientists, covering Python, HTML, CSS, Github, JavaScript & Arduino C over seven weeks</li>
          <li>Summer immersion program develops core skills such as Agile development, debugging & the importance of collaboration within a software team while offering college preparedness</li>
        </ul>
      </section>

      <section id="contact" className="neumorphismCard">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:hello@davidsolis.me">hello@davidsolis.me</a></p>
      </section>

      <footer className="neumorphismCard footer">
        <p>&copy; 2024 David Solis. All rights reserved.</p>
      </footer>
    </div>
  );
}