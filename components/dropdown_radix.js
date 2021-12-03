import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from "../components/Stations";
import React, { useEffect, useState } from "react";


export const DropdownMenuDemo = () => {

  const [id, setID] = useState();
  const [station, setStation] = useState([]);
  const [meteo, setMeteo] = useState({});

  const URL = `https://api.openweathermap.org/data/2.5/onecall`
  const API_KEY = `c44f77911579d2cbc82efc379374400c`

  const getStation = async (id) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`)
    const data = await res.json();
    const latLon = data.coord
    const res = await fetch(`${URL}?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
    const weatherRender = await res.json();
    console.log(weatherRender)
    setMeteo(weatherRender)
    setStation(latLon)
    setID(id)
  }

  return (
    <>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Trigger </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {stations.map(station => (
              <DropdownMenu.Item onSelect={(e) => getStation(e.target.innerText)} value={station.name} >
                {station.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <h3>You have selected {id}</h3>
      </div>

      <div>
        <h3>Render the Weather! 🎵</h3>
        <h2>Clouds: </h2> {meteo.current?.clouds}
      </div>
    </>

  )
};

export default DropdownMenuDemo;
