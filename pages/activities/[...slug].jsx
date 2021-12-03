import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Activities = () => {
  const [activities, setActivities] = useState([])
  const router = useRouter()
  const { slug } = router.query || ['east', 'swimming']
  console.log({slug})

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/activities/${slug[0]}/${slug[1]}`);
      const data = await r.json();
      console.log('this is a json');
      setActivities(data.data.ServiceProviders.ServiceProviders)
    }

    slug&&getData();
    console.log('this got the data')
  }, [slug])
  
  console.log(activities)

  return (
    <>
      <div>
        {activities.map((activity, id) => (
          <div>
            <h2>{activity.legalName}</h2>
          </div>
        ))}
        <h1>hello</h1>
      </div>
    </>
  )

}


export default Activities;