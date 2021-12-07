import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../../components/Layout/Grid/grid';
import Content from '../../../components/Layout/Content/content';
import Sidebar from '../../../components/Layout/Sidebar/sidebar';
import Map from '../../../components/Map/map';
import ActivityCard from '../../../components/ThingsToDo/ServiceListByCategory/ActivityCard/activityCard';

const Activities = () => {
  const [activities, setActivities] = useState([])
  const router = useRouter()
  const { slug } = router.query || ['swimming']
  console.log({ slug })

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${slug}`);
      const data = await r.json();
      console.log('this is a json');
      setActivities(data.data.ServiceProviders.ServiceProviders)
    }

    slug && getData();
    console.log('this got the data')
  }, [slug])


  return (
    <Grid>
      <Content>
          <Map/>
      </Content>
     
      <Sidebar>
        <h2>{slug}</h2>
        <ActivityCard activities={activities} />
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