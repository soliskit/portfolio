import styles from './Card.module.css';

export default function Experience() {
  return (
	<section id="experience" className={styles.card}>
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
  );
}
