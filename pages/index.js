import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>David Solis</title>
        <meta
          name="description"
          content="I make technology easier to use. I trained Apple staff, supported Bloomberg clients, and taught teens to code. I build iPhone and iPad apps in Swift and SwiftUI."
        />
      </Head>

      <ThemeToggle />
      <Header />
      <Nav />
      <AboutMe />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}
