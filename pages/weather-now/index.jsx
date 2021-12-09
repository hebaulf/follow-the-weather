import { useState, useEffect } from 'react'
import * as ActivityState from '../../state/activityState'

import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import SideBar from '../../components/WeatherPageLayout/Sidebar/Sidebar';
import MapboxContextProvider from '../../state/MapboxContext';
import WeatherContext from '../../state/WeatherContext';
import Map from '../../components/Map/map';
import ActivityList from '../../components/ActivityList/ActivityList';

const WeatherNow = () => {
  const activityState = ActivityState.useGlobalState(); // with hooks
  const activities = activityState.getActivitiesSelectedCategory();

  /* const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [placeClicked, setPlaceClicked] = useState([]);
  const [search, setSearch] = useState(false);

  const mapRef = useRef();
  const geocoderContainerRef = useRef(); */

 
    
  return (
    <MapboxContextProvider>
      <WeatherContext>
        <Grid>
          <Content>
           
          </Content>
          <SideBar />
        </Grid>
      </WeatherContext>
    </MapboxContextProvider>
  )
}
export default WeatherNow;
