import Link from 'next/link';
import style from './header.module.scss';
import NavLinks from '../Header/NavLinks/navlinks';
import { useState } from 'react';
import { homeLink } from '../../utils/navLinks';


const Header = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  
  return (
    <header className={style.header}>
      <Link href={homeLink.path} className={style.title}>{homeLink.name}</Link>
      <nav className={style.nav}>
      <div
        className={`${style.hamburger} ${open ? style.active : ""}`}
        onClick={() => setOpen(!open)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {open && <NavLinks onClose={closeMobileMenu} />}
      </nav>
    </header>
)
}

export default Header;