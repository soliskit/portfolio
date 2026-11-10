import Head from 'next/head'

import '../styles/globals.css'

/**
 * @param {{ Component: import('react').ElementType, pageProps: Record<string, unknown> }} props
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
