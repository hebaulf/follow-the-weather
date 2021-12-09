/* eslint-disable react/jsx-key */
import React from 'react'
import * as ScrollArea from "@radix-ui/react-scroll-area";
import style from './hourly.module.scss'

const Hourly = ({ meteo }) => {
  return (
    <div>
      <h4>Hourly weather</h4>
      <ScrollArea.Root className={style.scrollArea}>
        <ScrollArea.Viewport className={style.viewport}>
          <div className={style.box}>
            <div className={style.tag}>
              <div className={style.box}>
                 {meteo.hourly?.map((hours, index) => (
                      <div className={style.tag} data-index={index}>
                        <tag>
                          {new Date(hours.dt * 1000).toLocaleString("en-GB", {
                            timeZone: "UTC",
                          })}
                        </tag>
                        {hours.weather.map((description) => (
                          <tag>Description: {description.main}</tag>
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
          className={style.scrollbar}
        >
          <ScrollArea.Thumb className={style.thumb} />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </div>
  )
}

export default Hourly;