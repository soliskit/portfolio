import { Html, Head, Main, NextScript } from 'next/document'

// Applies a saved theme before first paint so the page does not flash the
// system theme while React hydrates.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`

export default function Document() {
  const meta = {
    title: 'David Solis',
    description:
      'I make technology easier to use. I trained Apple staff, supported Bloomberg clients, and taught teens to code. I build iPhone and iPad apps in Swift and SwiftUI.',
    url: 'https://www.davidsolis.me/',
    image: 'https://www.davidsolis.me/images/3-webpage.png'
  }

  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="robots" content="follow, index" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
