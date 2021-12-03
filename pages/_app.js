import { IdProvider } from '@radix-ui/react-id';
import { motion } from 'framer-motion';
import '../styles/globals.scss';

function App({ Component, pageProps, router }) {
  return (

    <IdProvider>
      <motion.div initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </IdProvider>
  )
}

export default App