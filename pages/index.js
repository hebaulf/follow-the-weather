import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/pageWrapper/pageWrapper';
import Map from '../components/map/map';
import 'mapbox-gl/dist/mapbox-gl.css';


const Home = () => {
  // const [weather, setWeather] = useState([])
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Follow the Weather</title>
        </Head>
        <section>
          <Map/>
        </section>
        
      </PageWrapper>
    </>
  )
}

export default Home;