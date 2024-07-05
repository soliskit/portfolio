import Head from 'next/head';

export default function Home() {
  return (
	<div className="container">
	  <Head>
		<title>David Solis</title>
		<meta name="description" content="David Solis' personal portfolio" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>
	
	  <header className="neumorphismCard header">
		<h1>David Solis</h1>
		<img src="/images/maya.png" alt="David Solis" className="profile-photo"/>
		<p>Carson, CA</p>
		<p>Email: <a href="mailto:hello@davidsolis.me">hello@davidsolis.me</a></p>
	  </header>
	
	  <nav className="neumorphismCard nav">
		<a href="#experience">Experience</a>
		<a href="#skills">Skills</a>
		<a href="#education">Education</a>
	  </nav>
	
	  <section id="about-me" className="neumorphismCard">
		<h2>About Me</h2>
		<p>Self taught developer with a background in sales, education & technical support.</p>
	  </section>
	
	  <section id="experience" className="neumorphismCard">
		<h2>Experience</h2>
		
		<div className="job">
		  <h3>Site Instructor at Girls Who Code</h3>
		  <span>Summer 2019 - 2021</span>
		  <ul>
			<li>Led an in-person classroom of over twenty aspiring computer scientists, covering Python, HTML, CSS, GitHub, JavaScript & Arduino C over seven weeks.</li>
			<li>Developed core skills such as Agile development, debugging & the importance of collaboration within a software team while offering college preparedness.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Software Developer at Peaking Software</h3>
		  <span>2016 - 2021</span>
		  <ul>
			<li>Learned to build iPhone apps using Swift Playgrounds. Embraced Apple’s latest framework SwiftUI for building my latest iPhone & iPad apps.</li>
			<li>Developed databases, servers, websites and iPhone apps for clients.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Remote Client Support at Bloomberg LP</h3>
		  <span>2015 - 2016</span>
		  <ul>
			<li>Offered training & technical support for PC and mobile software, coordinated field service visits, and performed troubleshooting.</li>
			<li>Steered the initiative to create a wiki for the San Francisco technical support team, ensuring clear, concise, and accurate documentation of systems and procedures.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Genius at Apple</h3>
		  <span>2013 - 2015</span>
		  <ul>
			<li>Supplied leadership with support including providing overrides for the Redzone, relief for Leader on the Floor for breaks and conducted One to One trainings.</li>
			<li>Provided exceptional customer service and offered complete solutions to customers, as reflected by my high NPS score as a technician in a Training Store.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>In Store Guest Trainer at Apple</h3>
		  <span>2013</span>
		  <ul>
			<li>Developed & facilitated training for employee on-boarding, ongoing sales training, technical training, & train the trainer workshops as In Store Guest Trainer.</li>
			<li>Increased product & technical knowledge at the market level with my employee mentorship initiative, which earned the market Q2 2013 Most Improved Net Promoter Score.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Specialist at Apple</h3>
		  <span>2011 - 2013</span>
		  <ul>
			<li>Led in store workshop team which earned the store Net Promoter Score of 98 for three quarters.</li>
			<li>Participated in overnight shifts as part of the Visual Merchandising Team, preparing products and visuals, ensuring their presentation adhered to exact measurements based on guidelines.</li>
		  </ul>
		</div>
	  </section>
	  
	  <section id="skills" className="neumorphismCard">
		<h2>Skills</h2>		
		<h3>Soft Skills</h3>
		<ul className="skills-list">
		  <li>Strong communication, customer service skills, and empathy in educational settings.</li>
		  <li>Ability to work under pressure, meet deadlines, and coordinate teams.</li>
		  <li>Skilled in delegating tasks and delivering quality service.</li>
		  <li>Detail-oriented with a strong commitment to excellence.</li>
		</ul>
		
		<h3>Technical Skills</h3>
		<ul className="skills-list">
		  <li>Troubleshooting hardware and software issues for Apple desktop and mobile computers.</li>
		  <li>Training and development for technical support teams and sales staff.</li>
		  <li>Remote client technical support and training.</li>
		  <li>Proficient in mobile app and website development.</li>
		</ul>
	  </section>
	
	  <section id="education" className="neumorphismCard">
		<h2>Education</h2>
		<p>University of California, Riverside – Bachelors of Arts in History</p>
		<p>Adult & Pediatric First Aid/CPR/AED</p>
	  </section>
	
	  <footer className="neumorphismCard footer">
		<p>&copy; 2024 David Solis. All rights reserved.</p>
	  </footer>
	</div>
  );
}