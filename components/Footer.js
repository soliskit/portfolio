import { useState, useEffect } from 'react'
import styles from './Footer.module.css'

// The page is prerendered, so it starts with the year it was built. The
// visitor's current year replaces it after load, keeping hydration in sync.
const buildYear = Number(process.env.BUILD_YEAR)

export default function Footer() {
  const [year, setYear] = useState(buildYear)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className={styles.footer}>
      <p>&copy; {year} David Solis. All rights reserved.</p>
    </footer>
  )
}
