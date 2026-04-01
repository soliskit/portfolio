import styles from './Nav.module.css';

export default function Nav() {
  return (
	<nav className={styles.nav}>
	  <a href="#experience">Experience</a>
	  <a href="#skills">Skills</a>
	  <a href="#education">Education</a>
	</nav>
  );
}
