import { useState, useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from './stations';

const Dropdown = () => {
  const [id, setID] = useState();
  const [station, setStation] = useState([]);
  const [meteo, setMeteo] = useState({});
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const API_KEY = 'c44f77911579d2cbc82efc379374400c';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat,long])

  const getStation = async (id) => {
    const res = await fetch(`${API_URL}/weather?q=${id}&appid=${API_KEY}`);
    const data = await res.json();
    const latLon = data.coord;
    
    const res2 = await fetch(`${API_URL}/onecall?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
    const weatherRender = await res2.json();
    
    setMeteo(weatherRender);
    setStation(latLon);
    setID(id);
    
    console.log('WeatherRender:', weatherRender);
    console.log('Data', data);
    console.log(`Latitude: ${latLon.lat}`);
    console.log(`Longitude: ${latLon.lon}`);
  }

  return (
    <>
      <div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>Pick location...</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {stations.map((station, index) => (
              <DropdownMenu.Item key={index} onSelect={(e) => getStation(e.target.innerText)} value={station.name} >
                {station.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <h3>You have selected {id}</h3>
      </div>

      <div>
        <h2>Weather</h2>
        <h4>Clouds: {meteo.current?.clouds}</h4> 
      </div>
    </>

  )
};

export default Dropdown;