import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/pageWrapper/pageWrapper';



const WeatherNow = () => {
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Weather now in Reykjavík</title>
        </Head>
        <div>
          <div>
            <h2>GeoLocation City weather condition</h2>
            <p>Description</p>
            <button>view activities</button>
          </div>
          <section>
            <h3>Recommended activities</h3>
            <div className={style.cardList}>
              <div className={style.activityCard}>
                <div>image</div>
                <h4>Activity name</h4>
                <p>Short Description</p>
              </div>
            </div>
          </section>
        </div>
      </PageWrapper>
     
    </>
  )
}

export default WeatherNow;