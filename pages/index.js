import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import HowIWork from '../components/HowIWork'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'
import styles from './index.module.css'

// The page title and description, used for search results and link previews.
const meta = {
  title: 'David Solis',
  description:
    'I make technology easier to use. I trained Apple staff, supported Bloomberg clients, and taught teens to code. I build iPhone and iPad apps in Swift and SwiftUI.',
  url: 'https://www.davidsolis.me/',
  image: 'https://www.davidsolis.me/images/webpage.png'
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <ThemeToggle />
      <Header />
      <Nav />
      <AboutMe />
      <HowIWork />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}
