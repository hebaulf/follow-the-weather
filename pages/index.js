
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.h1 initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transiiton: {
            delay: .4
          }
        }
      }}>
        Animated text
      </motion.h1>

      <div>
        <motion.div key="1" className="card" whileHover={{
          position: 'relative',
          zIndex: 1,
          background: 'white',
          scale: 1.2,
          transition: {
            duration: .3
          }
        }}>
          <img height="200" width="200" src="/images/kamil-kalbarczyk.jpg" alt="" />
          <h3>Title</h3>
        </motion.div>
        <motion.div key="3" className="card" whileHover={{
          scale: 1.2,
          transition: {
            duration: .3
          }
        }}>
          <img height="200" width="200" src="/images/joshua-earle.jpg" alt="" />
          <h3>Title</h3>
        </motion.div>
        <motion.div key="2" className="card" whileHover={{
          scale: 1.2,
          transition: {
            duration: .3
          }
        }}>
          <img height="200" width="200" src="/images/jose-llamas.jpg" alt="" />
          <h3>Title</h3>
        </motion.div>
      </div>

    </>
  )
}
