import { useState, useEffect } from 'react'
import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import SideBar from '../../components/WeatherPageLayout/Sidebar/Sidebar';
import MapboxContextProvider from '../../state/MapboxContext';
import WeatherContext from '../../state/WeatherContext';
import Map from '../../components/Map/map';
const WeatherNow = ({children}) => {
    
  return (
    <MapboxContextProvider>
      <WeatherContext>
        <Map />
      </WeatherContext>
    </MapboxContextProvider>
  )
}
export default WeatherNow;
