import { ScrollArea } from "@radix-ui/react-scroll-area";
import * as Slider from "@radix-ui/react-slider";
import { stations } from "./stations";
import styles from "./dropdown.module.scss";
import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [id, setID] = useState('');
  const [lat, setLatitude] = useState();
  const [lon, setLongitude] = useState();
  const [station, setStation] = useState([]);
  const [meteo, setMeteo] = useState({});

  // API params
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `c44f77911579d2cbc82efc379374400c`;

  // To set the station already on a selected city
 useEffect(() => {
   const getStation = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`);
    const data = await res.json();
    const latLon = data.coord;
    const res2 = await fetch(
      `${URL}?lat=${latLon?.lat}&lon=${latLon?.lon}&exclude=minutely&appid=${API_KEY}&units=metric`);
    
     const weatherRender = await res2.json();
     setMeteo(weatherRender)
     setID(id)
   }
  
   getStation();
  }, [API_KEY, URL, id]); 


  const [valueSlider, setValueSlider] = useState([1638968400]);
  const handleValueChange = (valueSlider) => {
    setValueSlider(valueSlider);
  };

  return (
    <div>
      Hello
    </div>
  );
};

export default Dropdown;