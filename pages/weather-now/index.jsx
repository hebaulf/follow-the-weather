import { useState, useEffect } from 'react'
import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import Sidebar from '../../components/WeatherPageLayout/Sidebar/sidebar';
import Dropdown from '../../components/Dropdown';
import Hourly from '../../components/WeatherPageLayout/Weather/Hourly/Hourly';
import Map from '../../components/Map/map';
import MapSlider from '../../components/MapSlider/mapSlider';



const WeatherNow = () => {
  const [meteo, setMeteo] = useState({});

  return (
    <Grid>
      <Content>
        <Map />
      </Content>
      <Sidebar/>
    </Grid>
  )
}
export default WeatherNow;
