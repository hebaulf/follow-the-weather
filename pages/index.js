import React from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.scss';


const Home = () => {

  return (
    <>
      <div className={styles.content}>
        <div className={styles.icon}>The icon</div>
        <div className={styles.text}>
          <span>Follow</span>
          <h1>the Weather</h1>
          <p>Be mentally prepaired for the ever changing icelandic weather.</p>
        </div>
        <div className={styles.pagelinks}>
          <Link href="/weather-elements">Weather today</Link>
          <Link href="/weather-elements">Weather by month</Link>
          <Link href="/weather-elements">Weather Culture</Link>
        </div>
      </div>
    
    </>
  )
}

export default Home;