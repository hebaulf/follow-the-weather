import { AnimatePresence } from 'framer-motion';
import { IdProvider } from '@radix-ui/react-id';
import Layout from '../components/Layout/Layout';

import '../styles/globals.scss';

function App({ Component, pageProps, router }) {

  //on page load
  
  return (
    <IdProvider>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </IdProvider>
  )
}

export default App;