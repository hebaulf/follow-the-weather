import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState } from 'react';
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Follow the Weather</Link>
            </div>
            <nav className={styles.navigation}>
                <div 
                    className={`${styles.hamburger} ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {open && 
                    <ul className={styles.menu}>
                        <li className={router.pathname == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={router.pathname == "/weather-elements" ? "active" : ""}><Link href="/weather-elements">Weather Elements</Link></li>
                        <li className={router.pathname == "/weather-now" ? "active" : ""}><Link href="/weather-now">Weather Today</Link></li>
                        <li className={router.pathname == "/weather-months" ? "active" : ""}><Link href="/weather-months">Weather by Months</Link></li>
                    </ul>
                }
            </nav>
        </div>
    )
}

export default Navbar;