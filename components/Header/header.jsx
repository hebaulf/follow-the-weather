import { homeLink, navLinks } from '../../utils/navLinks'
import Link from 'next/link'
import style from './header.module.scss'


const Header = () => {
  return (
    <header className={style.header}>
      <Link href={homeLink.path} className={style.title}>{homeLink.name}</Link>
      <nav className={style.nav}>
        {navLinks.map((link, index) => {
          return (
              <Link key={index} href={link.path} className={style.link}>
                {link.name}
              </Link>
          )
      })}
      </nav>
    </header>
)
}

export default Header