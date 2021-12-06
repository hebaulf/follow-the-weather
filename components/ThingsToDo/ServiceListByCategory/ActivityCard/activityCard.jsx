import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import style from './activityCard.module.scss'
import Image from 'next/image'

const ActivityCard = () => {
  
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
          </div>
      ))}
    </>
  ) 
}

export default ActivityCard;
/* https://res.cloudinary.com/itb-database/image/upload/s--_BCUaEbG--/c_fill,dpr_auto,f_auto,q_auto:eco,w_1280/v1/ServiceProviders/b1261387c65f57ba6ca4fc3e55d66d06 */