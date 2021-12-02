import Head from 'next/head'
import { stations } from "../components/Stations"
import React, { useEffect, useState } from "react";

export default function Select({ weather }) {

    const [id, setID] = useState();
    const [station, setStation] = useState([]); 
  
    const URL = `https://api.openweathermap.org/data/2.5/onecall` 
    const API_KEY = `c44f77911579d2cbc82efc379374400c`

    // const getStation = async (id) => {
    //   const res = await fetch (`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
    //   const data = await res.json();
    //   setStation(data.results)
    //   setID(id)
    // }

    // API to fetch the coordinates
    const getStation = async (id) => {
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`)
    const data = await res.json();
    setStation(data.coord)
    setID(id)
  }


  // API to display the weather 
  // const getWeather = async () => {
  //   const res = await fetch (`${URL}?lat=${station.lat}&lon=${station.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
  //   const weather = await res.json();

  //     return {
  //     props: {
  //     weather
  //     }
  // }
  // }
    
  return (
 
    <>

      <head> 
        <title>Select_vanilla</title>
      </head> 

      <div>
          <form>
              <select onChange={(e)=>getStation(e.target.value)}>
              {stations.map(station => (
                <option value={station.name} >
                  {station.name}
                </option>
              ))}
              </select>
          </form>
          <h3>You have selected {station.lat}</h3>
      </div>
    
      <div>
        
        {weather}

      </div>   

        
    </>
  )
}

