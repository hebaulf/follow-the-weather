import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../components/Layout/Grid/grid';
import Content from '../../components/Layout/Content/content';
import Sidebar from '../../components/Layout/Sidebar/sidebar';
import Map from '../../components/Map/map';
import DropdownMenuDemo from '../../components/Dropdown/dropdown_radix';


const WeatherNow = ({swim}) => {
	
 
  return (
    <Grid>
      <Content>
        <Map activities={swim} />
        
      </Content>
			<Sidebar>
        <DropdownMenuDemo />
  
        <button>hello</button>
      </Sidebar>
    </Grid>
  )
}



export default WeatherNow;

