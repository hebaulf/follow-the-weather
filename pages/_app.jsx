import { AnimatePresence } from 'framer-motion';
import { IdProvider } from '@radix-ui/react-id';
import Header from '../components/Header/header';
import '../styles/globals.scss';

function App({ Component, pageProps, router }) {

  //on page load
  
  return (
    <IdProvider>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
      </AnimatePresence>
    </IdProvider>
  )
}

export default App;