import { useRef, useState, useEffect, useContext } from 'react'
import * as ActivityState from '../../../state/activityState'
import MapboxContextProvider from '../../../state/MapboxContext';
import WeatherContext from '../../../state/WeatherContext';
/*components*/
import Grid from '../../../components/WeatherPageLayout/Grid/grid';
import Content from '../../../components/WeatherPageLayout/Content/content';
import SideBar from '../../../components/WeatherPageLayout/Sidebar/Sidebar';
import Map from '../../../components/Map/map';

import { MainCard } from '../../../components/WeatherPageLayout/Weather/MainCard/MainCard';
import WeatherWidget from '../../../components/WeatherPageLayout/Weather/weather';
import { getWeather } from '../../api/data';


const WeatherNow = () => {
  const mapRef = useRef();
  const geocoderContainerRef = useRef();
  const activityState = ActivityState.useGlobalState(); // with hooks
  const activities = activityState.getActivitiesSelectedCategory();

  const [id, setID] = useState('Reykjavik')
  const [setWeatherData] = useState();


  /* const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placeClicked, setPlaceClicked] = useState([]);
  const [search, setSearch] = useState(false);

  const mapRef = useRef();
  const geocoderContainerRef = useRef(); */

  return (
    <MapboxContextProvider>
      <WeatherContext>
        <Grid>
          <Content>
            <Map
              mapRef={mapRef}
              geoCoder={geocoderContainerRef}
              weatherData={getWeather}
            />
          </Content>
          <SideBar geoCoder={geocoderContainerRef}>
            <WeatherWidget weatherData={getWeather} />
          </SideBar>
        </Grid>
      </WeatherContext>
    </MapboxContextProvider>
  )
}
export default WeatherNow;
