import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Footer from '../components/Footer';

export default function Home() {
  return (
	<div className="container">
	  <Head>
		<title>David Solis</title>
		<meta name="description" content="David Solis' personal portfolio" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <Header />
	  <Nav />
	  <AboutMe />
	  <Experience />
	  <Skills />
	  <Education />
	  <Footer />
	</div>
  );
}
