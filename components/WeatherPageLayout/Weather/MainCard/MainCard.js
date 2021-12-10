import React from 'react'
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Slider from "@radix-ui/react-slider";
import { stations } from "../../../../data/stations";
import Image from 'next/image'

import style from "../weather.module.scss";


export function MainCard({ meteo, onChange, id }) {

	const [valueSlider, setValueSlider] = React.useState([1638968400]);
  const handleValueChange = (valueSlider) => {
    setValueSlider(valueSlider);
	};
	
	return (
		<div>
			
				<div className={style.mainCard}>
				

				<div className={style.title}>
					<form className={style.form}>
					<select className={style.form__select} onChange={onChange}>
						{stations.map((station, index) => (
							<option className={style.form__option} key={index} value={station.name}>{station.name}</option>
						))}
					</select>
				</form>
					<p className={style.date}>
					{ new Date(meteo.current?.dt * 1000).toLocaleString("en-GB", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						})};
					</p>
					<h3 className={style.city} id={id}> {id} </h3>
				</div>

				<div className={style.details}>
					<div className={style.iconBig}>
						<Image  src="/../public/icons/weather-icons/cloudy.svg" alt="decorative weather icon" height={180} width={180} />
						{meteo.current?.weather.map((description, index) => (
							<p className={style.description} key={index}>{description.main}</p>
						))}
					</div>
			

					<div className={style.feels__like}>
						<p className={style.feels}>{Math.round(meteo.current?.feels_like)}°c</p>
						<p className={style.text__side}>feels like</p>
					</div>

					<div className={style.details__list}>
						<div className={style.details__item}>
							<Image alt='temperature' src="/../public/icons/weatherInfo-icons/temperature.svg" height='32px' width='32px' fill={'#fff'} />
							<p className={style.item}>{Math.round(meteo.current?.temp)}<span>temp</span></p>
						</div>
						<div className={style.details__item}>
							<Image alt='percipitation' src="/../public/icons/weatherInfo-icons/precipitation.svg" height='32px' width='32px' fill={'#fff'} />
							<p className={style.item}>{meteo.current?.humidity}1<span>mm</span></p>
						</div>
						<div className={style.details__item}>
							<Image alt='wind' src="/../public/icons/weatherInfo-icons/wind.svg" height='32px' width='32px' fill={'#fff'} />
							<p className={style.item}>{meteo.current?.wind_speed}<span>m/s</span></p>
						</div>
					</div>
				</div>
			</div>

				<div className={style.sun}>
					<div className={style.circle} />
					<div className={style.texts}>
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
					</div>
				</div>
			
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
			
			 <ScrollArea.Root className={style.ScrollArea}>
            <ScrollArea.Viewport className={style.Viewport}>
              <div className={style.Box}>
                <div className={style.tag}>
                  <div className={style.Box}>
                    {meteo.hourly?.map((hours, index) => (
											<div className={style.weather} key={index} data-index={index}>
                        <tag className={style}>
                          {new Date(hours.dt * 1000).toLocaleString("en-GB", {
                            timeZone: "UTC",
                          })}
                        </tag>
                        {hours.weather.map((icon, index) => (
                          <Image alt='percipitation' src="/../public/icons/weather-icons/light-cloud.svg" height='24px' width='24px' fill={'#fff'} />
                        ))}
                        <tag className={style.small__temp}>{Math.round(hours.temp)} °C</tag>
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
  )
};

