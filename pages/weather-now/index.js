import React from 'react';
import Link from 'next/link';
import Dropdown from '../../components/dropdown';



export default function WeatherNow() {
    
    return (
        <div>
            <h1>Weather Today</h1>
            <Link href="/">Home</Link><br/>
            <Link href="/weather-elements">Weather Elements</Link><br/>
            <Link href="/weather-months">Weather by Month</Link>
            <br /><br /><br />
            <Dropdown />
        </div>
    )
}