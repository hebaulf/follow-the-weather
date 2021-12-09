import React, { useContext } from 'react'
import { WeatherContext } from '../../../state/WeatherContext';
import style from './dashboard.module.scss'
import Hourly from '../Weather/Hourly/Hourly';
// eslint-disable-next-line react/display-name
const Dashboard = React.memo(({ data }) => {
  const { loading } = useContext(WeatherContext);
  const { name : city } = data
  const { temp } = data.main
  const { country } = data.sys
  const { description, icon, main: weather } = data.weather[0]


  if (loading) {
    return (
      <div className={style.sidebar__spinner}> 
        spinning
      </div>
    )
  }

  return (
    <div className={style.sidebar}>
      <div>
      
        <h3>{city}</h3>
        <p>{temp}</p>
        <p>{description}</p>
      </div>
    </div>
  )
});
  
export default Dashboard
