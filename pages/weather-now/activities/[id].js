import Link from 'next/link';

export default function Activities() {
    return (
        <div>
            <h1>Activies</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/weather-now">Weather Today</Link>
            <Link href="/weather-months">Weather by Month</Link>
        </div>
    )
}