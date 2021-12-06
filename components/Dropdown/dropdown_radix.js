import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from "./stations";
import React, { useEffect, useState } from "react";


export const DropdownMenuDemo = () => {

  const [id, setID] = useState();
  const [station, setStation] = useState([]);
  const [meteo, setMeteo] = useState({});

  const URL = `https://api.openweathermap.org/data/2.5/onecall`
  const API_KEY = `da80dff9846628584a158c4c17eb8ca9`

  const getStation = async (id) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`)
    const data = await res.json();
    const latLon = data.coord
    const res2 = await fetch(`${URL}?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
    const weatherRender = await res2.json();
    console.log(weatherRender)
    setMeteo(weatherRender)
    setStation(latLon)
    setID(id)
  }
  console.log(getStation)

  return (
    <>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Trigger </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {stations.map(station => (
              <DropdownMenu.Item key={id} onSelect={(e) => getStation(e.target.innerText)} value={station.name} >
                {station.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <h3>You have selected {id}</h3>
      </div>

      <div>
        <h3>Weather</h3>
        <h2>Clouds:{' '}{meteo.current?.clouds}</h2>
       
      </div>
    </>

  )
};

export default DropdownMenuDemo;