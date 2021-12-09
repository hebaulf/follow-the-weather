import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from '../styles/index.module.scss';
import Layout from '../components/Layout/Layout';
import { motion } from 'framer-motion';
import { navLinks } from '../utils/navLinks';


const Home = () => {
  const animateFrom = {opacity: 0, y: -40};
  const animateTo = {opacity: 1, y: 0};

  return (
    <Layout>
      <div className={style.content}>
        <div className={style.icon}>
          <Image src="/icons/weather-icons/weathericon.svg" alt="decorative weather icon" height={330} width={330} />
        </div>
        <h3>Follow</h3>
        <div className={style.pushedcontent}>
          <div className={style.heading}>
            <div className={style.arrow}>
              <Image src="/icons/arrow.svg" alt="decorative arrow" height={30} width={129} />
            </div>
            <h1 className={`display`}>the Weather</h1>
          </div>
          <h4 className={`sans-text`}>Be mentally prepaired for the ever changing icelandic weather.</h4>
        
          <div className={style.pagelinks}>
            {navLinks.map((link, index) => {
              return (
                <motion.div
                  key={index}
                  initial={animateFrom}
                  animate={animateTo} >
                  <p className={style.linktext}>{link.text}</p>
                  <Link href={link.path} passHref>
                    <a className={style.link}>
                      <p>{link.name}</p>
                      <Image
                        className={style.icon}
                        src="/icons/circle-arrow.svg"
                        alt="weather icon sun and clouds"
                        height={48}
                        width={71}
                      />
                    </a>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home;