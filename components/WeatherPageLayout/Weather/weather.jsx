import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Slider from "@radix-ui/react-slider";
import { stations } from "../../../data/stations";
import React, { useEffect, useContext, useState } from "react";
import { getWeather } from '../../../pages/api/data'
import { WeatherContext } from "../../../state/WeatherContext";
import style from "./weather.module.scss";
import { MainCard } from "./MainCard/MainCard";

const WeatherWidget = () => {
  const [id, setID] = useState();
  const [meteo, setMeteo] = useState({});

  // API params
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `c44f77911579d2cbc82efc379374400c`;

  // To set the station already on a selected city
  useEffect(() => {
    getStation("Reykjavik");
  }, []);

  // API call to get coords to pass it into another API to get the weather
  const getStation = async (id) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`
    );
    const data = await res.json();
    const latLon = data.coord;
    const res2 = await fetch(
      `${URL}?lat=${latLon?.lat}&lon=${latLon?.lon}&exclude=minutely&appid=${API_KEY}&units=metric`
    );
    const weatherRender = await res2.json();
    console.log(weatherRender);
    setMeteo(weatherRender);
    setID(id);
  };

  // Slider to get daily weather
  const [valueSlider, setValueSlider] = React.useState([1638968400]);
  const handleValueChange = (valueSlider) => {
    setValueSlider(valueSlider);
  };

  return (
    <div className={style.main}>
      <MainCard meteo={meteo} id={id} onChange={(e) => getStation(e.target.value)} />
    </div>
  );
};

export default WeatherWidget;