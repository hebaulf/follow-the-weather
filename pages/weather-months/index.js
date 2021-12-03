import Link from 'next/link'

export default function WeatherMonths() {
    return (
        <div>
            <h1>Weather by Months</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/weather-elements">Weather Elements</Link><br/>
            <Link href="/weather-now">Weather Today</Link>
        </div>
    )
}