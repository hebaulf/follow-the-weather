import Link from 'next/link'

export default function WeatherElements() {
    return (
        <div>
            <h1>Weather Elements</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/weather-now">Weather Today</Link><br/>
            <Link href="/weather-months">Weather by Months</Link>
        </div>
    )
}