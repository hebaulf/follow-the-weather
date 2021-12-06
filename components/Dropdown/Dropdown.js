import { useState } from "react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from '../../data/stations';

export default function Dropdown () {
    const [id, setID] = useState();
    const [station, setStation] = useState([]);
    const [meteo, setMeteo] = useState({});

    const getStation = async (id) => {
        const res = await fetch (`${process.env.API_URL}/onecall?lat=${latLon.lat}&lon=${latLon.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`);
        const data = await res.json();
        const latLon = data.coord;
        const res2 = await fetch(`${URL}?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&appid=${API_KEY}`)
        const weatherRender = await res2.json();
        console.log(weatherRender);
        setMeteo(weatherRender);
        setStation(latLon);
        setID(id);
    }

    return (
        <>
            <h1>Dropdown</h1>

            <h3>You have selected {station.name} with the latitude:{station.lat} and logitude:{station.lon}</h3>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger>Trigger </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    {stations.map((station, index) => (
                    <DropdownMenu.Item key={index} onSelect={(e) => getStation(e.target.innerText)} value={station.name} >
                        {station.name}
                    </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            <div>
                <h3>Render the Weather! 🎵</h3>
                <h2>Clouds: </h2> {meteo.current?.clouds}
            </div>
        </>
    )
}