import { useState, useEffect } from 'react'
import { Link } from 'next/link';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../../components/Layout/Grid/grid';
import Content from '../../../components/Layout/Content/content';
import Sidebar from '../../../components/Layout/Sidebar/sidebar';
import Map from '../../../components/Map/map';
import ActivityCard from '../../../components/ThingsToDo/ServiceListByCategory/ActivityCard/activityCard';



const Activities = () => {
  const [activities, setActivities] = useState([])

  return (
    <Grid>
      
      <Content>
       
        <Map />
      
      </Content>
      <Sidebar>
        <nav>
       
      </nav>
        
        <ActivityCard activities={activities} />
      </Sidebar>
      
    </Grid>
  )
}


export default Activities;
