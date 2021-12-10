import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Slider from "@radix-ui/react-slider";
import { stations } from "../../../data/stations";
import style from "./weather.module.scss";
import React, { useEffect, useState } from "react";

const Dropdown = () => {
  const [id, setID] = useState();
   const [weatherData, setWeatherData] = useState({});
  // API params
  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const API_KEY = `c44f77911579d2cbc82efc379374400c`;

  // To set the station already on a selected city
  useEffect(() => {
    getWeather("Reykjavik");
  }, []);

  // API call to get coords to pass it into another API to get the weather
  const getWeather = async (id) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${API_KEY}`
    );
    const data = await res.json();
    const latLon = data.coord;
    const res2 = await fetch(
      `${URL}?lat=${latLon?.lat}&lon=${latLon?.lon}&exclude=minutely&appid=${API_KEY}&units=metric`);
    
    const weatherData = await res2.json();
    console.log(weatherData);
    setWeatherData(weatherData);
    setID(id);
  };

  const [valueSlider, setValueSlider] = React.useState([1638968400]);
  const handleValueChange = (valueSlider) => {
    setValueSlider(valueSlider);
  };

 

  return (
    <>
      <div className={style.main}>
        <div>
          <h3>{id}</h3>
          <div>
            <p>
              {new Date(meteo.current?.dt * 1000).toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <form>
              <select onChange={(e) => getStation(e.target.value)}>
                {stations.map((station, index) => (
                  <option key={index} value={station.name}>{station.name}</option>
                ))}
              </select>
            </form>
            
          </div>
          <div>
            <h2>Current weather</h2>
            {meteo.current?.weather.map((description, index) => (
              <p key={index}>Description: {description.main}</p>
            ))}
            <p>Feels like: {meteo.current?.feels_like} °C </p>
            <p>
              Sunrise:{" "}
              {new Date(meteo.current?.sunrise * 1000).toLocaleTimeString(
                "en-GB",
                { hour: "2-digit", minute: "2-digit" }
              )}
            </p>
            <p>
              Sunset:{" "}
              {new Date(meteo.current?.sunset * 1000).toLocaleTimeString(
                "en-GB",
                { hour: "2-digit", minute: "2-digit" }
              )}
            </p>
            <p>Temperature: {meteo.current?.temp} °C </p>
            <p>Wind speed: {meteo.current?.wind_speed} m/s </p>
          </div>
        </div>
        <div>
          <h2>Daily weather</h2>
          <p>Value: {valueSlider}</p>

          {/* {meteo.daily?.map((dailyWeather) => (
            <p>Description: {dailyWeather.dt}</p>
          ))} */}

    

          <div className={style.returnDiv}>
            <form>
              <Slider.Root
                className={style.slider}
                step={86400} // HERE
                min={1638968400}
                max={1639141200}
                value={valueSlider}
                onValueChange={handleValueChange}
              >
                <Slider.Track className={style.sliderTrack}>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb className={style.sliderThumb} />
              </Slider.Root>
            </form>
          </div>
        </div>
        <div>
          <h2>Hourly weather</h2>
          <ScrollArea.Root className={style.ScrollArea}>
            <ScrollArea.Viewport className={style.Viewport}>
              <div className={style.Box}>
                <div className={style.tag}>
                  <div className={style.Box}>
                    {meteo.hourly?.map((hours, index) => (
                      <div key={index} className={style.tag} data-index={index}>
                        <tag>
                          {new Date(hours.dt * 1000).toLocaleString("en-GB", {
                            timeZone: "UTC",
                          })}
                        </tag>
                        {hours.weather.map((description, index) => (
                          <tag key={index}>Description: {description.main}</tag>
                        ))}
                        <tag>{Math.round(hours.temp)} °C</tag>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="horizontal"
              className={style.Scrollbar}
            >
              <ScrollArea.Thumb className={style.Thumb} />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;