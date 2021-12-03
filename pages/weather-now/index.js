import Link from 'next/link';

export default function WeatherNow() {
    return (
        <div>
            <h1>Weather Today</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/weather-elements">Weather Elements</Link><br/>
            <Link href="/weather-months">Weather by Month</Link>
        </div>
    )
}