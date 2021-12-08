import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import style from '../styles/index.module.scss';
import { motion } from 'framer-motion';
import { navLinks } from '../utils/navLinks';


const Home = () => {
  const animateFrom = {opacity: 0, y: -40};
  const animateTo = {opacity: 1, y: 0};

  return (
    <>
      <div className={style.content}>
        <div className={style.icon}>
          <Image src="/svg/weathericon.svg" alt="weather icon sun and clouds" height={330} width={330} />
        </div>
        <div className={style.text}>
          <span>Follow</span>
          <div className={style.heading}>
            <div className={style.arrow}>
              <Image src="/svg/arrow.svg" alt="decorative arrow" height={30} width={129} />
            </div>
            <h1 className={`display`}>the Weather</h1>
          </div>
          <h4 className={`sans-text`}>Be mentally prepaired for the ever changing icelandic weather.</h4>
        </div>
        <div className={style.pagelinks}>
          {navLinks.map((link, index) => {
            return (
              <motion.div 
                key={index} 
                className={style.link} 
                initial={animateFrom}
                animate={animateTo}>
                <p>{link.text}</p>
                <Link href={link.path}>{link.name}</Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    
    </>
  )
}

export default Home;