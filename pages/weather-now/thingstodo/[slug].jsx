import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../../components/Layout/Grid/grid';
import Content from '../../../components/Layout/Content/content';
import Sidebar from '../../../components/Layout/Sidebar/sidebar';
import Map from '../../../components/Map/map';
import ActivityCard from '../../../components/ThingsToDo/ServiceListByCategory/ActivityCard/activityCard';

const Activities = () => {
 
  return (
    <Grid>
      <Content>
          <Map/>
      </Content>
     
      <Sidebar>
        <ActivityCard />
      </Sidebar>
      
    </Grid>
  )
}


export default Activities;


/* <div>
        {activities.map((activity) => (
          <div key={activity.id}>
            <h2>{activity.translations[0].name}</h2>
            <p>{activity.location.coordinates[0]},{' '}{activity.location.coordinates[1]}</p>
            <p>{activity.website}</p>
          </div>
        ))}
       
      </div> */