import { motion } from 'framer-motion';
const Layout = ({children}) => {
    const variants = { // variants for 
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }

    return (
        <motion.main 
            variants={variants} // Passes the variant object into Framer Motion 
            initial="hidden" // Sets the initial state to variants.hidden
            animate="enter" // Animates state to variants.enter
            exit="exit" // Exits state (used later) to variants.exit
            transition={{ type: 'linear' }} // Sets the transition to linear
            className={`main`}>
            {children}
        </motion.main>
    )
}

export default Layout;