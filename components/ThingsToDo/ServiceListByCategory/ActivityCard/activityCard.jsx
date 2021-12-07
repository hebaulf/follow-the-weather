import { useState, useEffect } from 'react'
import style from './activityCard.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'


const ActivityCard = () => {
  
  const router = useRouter()
  const { slug } = router.query || ['swimming']
  const [activities, setActivities] = useState([])
  // How to use createContext & useContext for this API FETCH
  // Is it possible to change 'categories' without changing pages?

  // Create markers for each 'activity' on mapbox
  // Create a filter in mapbox to show only activities that are inside the viewport
  // Create a dropdown to choose other categories and show markers on the map
  // Save/Store viewport state, so it doesn't change on page change
  
  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${slug}`);
      const data = await r.json();
      setActivities(data.data.ServiceProviders.ServiceProviders)
    }
    slug && getData();
  }, [slug]);

  return (
  <>
    {activities.map(activity => (
      <div className={style.card} key={activity.id}>
        <Image
          alt={activity.legalName}
          src={activity.photos[0] ? activity.photos[0].src : "https://res.cloudinary.com/itb-database/image/upload/s--_BCUaEbG--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/ServiceProviders/b1261387c65f57ba6ca4fc3e55d66d06" }
          height={200}
          width={300}
        />
        <h3>{activity.translations[1].name}</h3>
        <p>Category: {slug}</p>
          </div>
      ))}
    </>
  ) 
}

export default ActivityCard;
