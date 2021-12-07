import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from "./stations";
import React, { useEffect, useState } from "react";


export const DropdownMenuDemo = () => {

  const [id, setID] = useState();
  const [station, setStation] = useState([]);
  const [meteo, setMeteo] = useState({});

  const URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  console.log(`${URL}/weather?q=${id}&appid=${API_KEY}`)
  const getStation = async (id) => {
    const res = await fetch(`${URL}/weather?q=${id}&appid=${API_KEY}`)
    const data = await res.json();
    const latLon = data.coord
    const res2 = await fetch(`${URL}?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
    const weatherRender = await res2.json();
    console.log(`weatherRender: ${weatherRender}`)
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
            {stations.map((station, index)  => (
              <DropdownMenu.Item key={index} onSelect={(e) => getStation(e.target.innerText)} value={station.name} >
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