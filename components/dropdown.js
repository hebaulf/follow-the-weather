import { useState } from "react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { stations } from '../data/stations';

export default function Dropdown() {
    const [station, setStation] = useState([]);
    
    const getStation = async (id) => {
        const latLon = data.coord;
        const res = await fetch (`${process.env.API_URL}/onecall?lat=${latLon.lat}&lon=${latLon.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`);
        const data = await res.json();

        if (!data) {
            return {
                notFound: true,
            }
        }
        
        console.log(data)
        setStation(latLon)
    }

    const onChangeStation = (e) => {
        getStation(e.target.value)
    }

    return (
        <>
        
            <h3>You have selected {station.name} with the latitude:{station.lat} and logitude:{station.lon}</h3>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger onChange={onChangeStation}>
                    <h4>Dropdown</h4>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                    {stations.map(station => (
                        <DropdownMenu.Item key={station.name}  value={station.name}>{station.name}</DropdownMenu.Item>
                    ))}    
                </DropdownMenu.Content>
            </DropdownMenu.Root>

            
        </>
    )
}