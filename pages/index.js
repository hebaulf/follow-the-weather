import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/pageWrapper/pageWrapper';



const Home = () => {
  // const [weather, setWeather] = useState([])
  return (
    <>
      <PageWrapper>
        <Head>
          <title>Follow the Weather</title>
        </Head>
        <div>map</div>
      </PageWrapper>
     
    </>
  )
}

export default Home;