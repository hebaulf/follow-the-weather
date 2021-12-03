import Link from 'next/link'

const Home = () => {
  // const [weather, setWeather] = useState([])
  return (
    <div>
      <h1>This is the Landing page</h1>
      <Link href="/weather-now">Weather Today</Link><br/>
      <Link href="/weather-months">Weather by Month</Link>
    </div>
  )
}

export default Home;