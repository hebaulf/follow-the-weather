import Link from 'next/link';
import style from '../header.module.scss';
import { useRouter } from 'next/router';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { motion } from 'framer-motion';
import { navLinks } from '../../../utils/navLinks';

const NavLinks = ({onClose}) => {
    const ref = useDetectClickOutside({ onTriggered: onClose });
    const router = useRouter();
    const animateFrom = {opacity: 0, y: 40};
    const animateTo = {opacity: 1, y: 0};

    return (
        <ul ref={ref} className={style.menu}>
          {navLinks.map((link, index) => {
            return (
                <motion.li 
                    key={index}
                    className={router.pathname == link.path ? style.active : ""}
                    onClick={onClose}  
                    initial={animateFrom}
                    animate={animateTo} >
                    <Link href={link.path}>{link.name}</Link>
                </motion.li>
            )
            })}
        </ul>
    )
} 

export default NavLinks;