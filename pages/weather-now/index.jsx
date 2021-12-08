import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Image from 'next/image'
import Grid from '../../components/WeatherPageLayout/Grid/grid';
import Content from '../../components/WeatherPageLayout/Content/content';
import Sidebar from '../../components/WeatherPageLayout/Sidebar/sidebar';
// import Map from '../../components/Map/map';
// import DropdownMenuDemo from '../../components/Dropdown/dropdown';


const WeatherNow = () => {
	const [settings, setSettings] = useState({});
 
  return (
    <Grid>
      <Content>

      </Content>
			<Sidebar>

      </Sidebar>
    </Grid>
  )
}

export default WeatherNow;
