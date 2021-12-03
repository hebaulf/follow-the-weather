import { IdProvider } from '@radix-ui/react-id';
import { motion } from 'framer-motion';
import '../styles/globals.scss';

function App({ Component, pageProps, router }) {
  return (
  <>
    <Component {...pageProps} />
  </>
  )
}

export default App