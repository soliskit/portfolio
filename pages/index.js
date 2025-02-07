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
		<p>Customer success professional with expertise in sales, education, and technical support, delivering exceptional service, building relationships, and driving product adoption.</p>
	  </section>
	
	  <section id="experience" className="neumorphismCard">
		<h2>Experience</h2>
		
		<div className="job">
		  <h3>Site Instructor at Girls Who Code</h3>
		  <span>Summer 2019 - 2021</span>
		  <ul>
			<li>Guided over twenty students in Python, HTML, CSS, and JavaScript, fostering teamwork and agile development skills, helping students develop problem-solving abilities.</li>
			<li>Emphasized debugging and teamwork while preparing students for higher education in computer science.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Software Developer at Peaking Software</h3>
		  <span>2016 - 2021</span>
		  <ul>
			<li>Developed iPhone and iPad apps using Swift Playgrounds and SwiftUI, improving client workflows and driving satisfaction with tailored solutions.</li>
			<li>Designed and maintained databases, servers, and websites tailored to customer needs, ensuring seamless product integration and functionality.</li>
			<li>Collaborated closely with clients to identify needs, delivering tailored technical solutions that significantly improved user experience and satisfaction, directly contributing to product adoption and long-term retention.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Client Support at Bloomberg LP</h3>
		  <span>2015 - 2016</span>
		  <ul>
			<li>Provided training and remote client support for PC and mobile software, handling troubleshooting inquiries and ensuring swift issue resolution.</li>
			<li>Drove the development of a technical support knowledge base, enhancing team efficiency and offering clients self-service resources that improved resolution times.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Genius Technician at Apple</h3>
		  <span>2013 - 2015</span>
		  <ul>
			<li>Resolved complex hardware and software issues with consistently high customer satisfaction. Contributed to an elevated NPS in a fast-paced, high-volume environment, driving loyalty and retention.</li>
			<li>Provided personalized One to One customer trainings, empowering users to fully leverage their Apple products, increasing product adoption, customer retention, and long-term loyalty. These tailored sessions consistently resulted in positive feedback and repeat customer engagement.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>In Store Guest Trainer at Apple</h3>
		  <span>2013</span>
		  <ul>
			<li>Trained new hires and staff on product knowledge, troubleshooting, and customer service, improving team performance and driving customer success.</li>
			<li>Developed and introduced mentorship programs that directly contributed to a significant increase in customer satisfaction, earning the Market Q2 Most Improved Net Promoter Score.</li>
		  </ul>
		</div>
		
		<div className="job">
		  <h3>Sales Specialist at Apple</h3>
		  <span>2011 - 2013</span>
		  <ul>
			<li>Spearheaded in-store workshops, directly contributing to an exceptional Net Promoter Score of 98 for three consecutive quarters by enhancing customer education and satisfaction through tailored product demonstrations.</li>
			<li>Collaborated with the Visual Merchandising Team during overnight shifts, ensuring products and displays were meticulously prepared to align with company guidelines, ultimately enhancing the customer experience through flawless presentation.</li>
		  </ul>
		</div>
	  </section>
	  
	  <section id="skills" className="neumorphismCard">
		<h2>Skills</h2>		
		<h3>Soft Skills</h3>
		<ul className="skills-list">
		  <li>Exceptional communication and customer service skills, fostering strong relationships and delivering empathetic, customer-first support that drives customer success and satisfaction.</li>
		  <li>Proven ability to work effectively under pressure, manage tight deadlines, and coordinate cross-functional teams to meet customer needs.</li>
		  <li>Strong delegation and organizational skills, ensuring consistent service delivery with a customer-centric approach.</li>
		  <li>Meticulous attention to detail and a deep commitment to customer success and satisfaction.</li>
		</ul>
		
		<h3>Technical Skills</h3>
		<ul className="skills-list">
		  <li>Expertise in troubleshooting hardware and software issues for Apple desktop and mobile devices, swiftly resolving technical problems to enhance the customer experience.</li>
		  <li>Proven ability to train and develop teams, empowering technical support and sales staff to deliver superior customer service and drive customer success by effectively addressing customer needs.</li>
		  <li>Experienced in providing remote technical support and training, ensuring customers can efficiently use products and services.</li>
		  <li>Proficient in mobile app and website development, enabling a comprehensive understanding of technical issues from a customer’s perspective.</li>
		</ul>
	  </section>
	
	  <section id="education" className="neumorphismCard">
		<h2>Education</h2>
		<p>University of California, Riverside – Bachelors of Arts in History</p>
		<p>Adult & Pediatric First Aid/CPR/AED</p>
	  </section>
	
	  <footer className="neumorphismCard footer">
		<p>&copy; 2025 David Solis. All rights reserved.</p>
	  </footer>
	</div>
  );
}