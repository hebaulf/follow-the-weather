import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../components/Layout/Grid/grid';
import Content from '../../components/Layout/Content/content';
import Sidebar from '../../components/Layout/Sidebar/sidebar';
import Map from '../../components/Map/map';

const WeatherNow = () => {
 
  return (
    <Grid>
      <Content>
          <Map/>
      </Content>
			<Sidebar>
				Weather Info
      </Sidebar>
    </Grid>
  )
}

export default WeatherNow;
