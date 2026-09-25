import { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

function readStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }

    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      if (!document.documentElement.hasAttribute('data-theme')) {
        setTheme(query.matches ? 'dark' : 'light');
      }
    };
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {}
  }

  if (!theme) return null;

  return (
    <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
