import Head from 'next/head'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { IdProvider } from '@radix-ui/react-id';
import Page from '../layouts/page';
import '../styles/globals.scss';

function App({ Component, pageProps, router }) {

  //on page load
  
  return (
    <>
      <Head>
        <title>Follow the Weather</title>
      </Head>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </AnimatePresence>
  </>
  )
}

export default App