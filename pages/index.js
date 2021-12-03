import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  // const [weather, setWeather] = useState([])
  return (
    <>
      <Head>
        <title>Follow the Weather</title>
      </Head>
      <div>
        <h1>Follow the Weather</h1>
        <Link href="/weather-now">Weather Today</Link><br/>
        <Link href="/weather-months">Weather by Month</Link>
      </div>
      
    </>
  )
}

export default Home;