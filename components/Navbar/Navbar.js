import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <Link href="/">Follow the Weather</Link>
            </div>
            <nav className="navigation">
                <div 
                    className={`hamburger ${open ? "active" : ""}`} 
                    onClick={() => setOpen(!open)} >
                    <span>---</span>
                    <span>---</span>
                    <span>---</span>
                </div>

                {open && 
                    <ul>
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