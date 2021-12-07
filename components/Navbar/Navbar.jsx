import Link from 'next/link';
import styles from './navbar.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useDetectClickOutside } from 'react-detect-click-outside';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const closeMobileMenu = () => setOpen(false);

    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Follow the Weather</Link>
        </div>
        <nav className={styles.navigation}>
          <div
            className={`${styles.hamburger} ${open ? styles.active : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {open && <Menu onClose={closeMobileMenu} />}
        </nav>
      </div>
    );
}

const Menu = ({onClose}) => {
    const ref = useDetectClickOutside({ onTriggered: onClose });
    const router = useRouter();
    const animateFrom = {opacity: 0, y: -40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <ul ref={ref} className={styles.menu}>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0}}
                onClick={onClose} 
                className={router.pathname == "/weather-elements" ? styles.active : ""} >
                <Link href="/weather-elements">Weather Elements</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.1}}
                onClick={onClose} 
                className={router.pathname == "/weather-now" ? styles.active : ""} >
                <Link href="/weather-now">Weather Today</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.2}}
                onClick={onClose} 
                className={router.pathname == "/weather-months" ? styles.active : ""} >
                <Link href="/weather-months">Weather by Months</Link>
            </motion.li>
        </ul>
    )
}  

export default Navbar;