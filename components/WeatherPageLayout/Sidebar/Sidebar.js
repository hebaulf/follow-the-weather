import React, { useContext } from 'react'
import { WeatherContext } from '../../../state/WeatherContext';
import style from './sidebar.module.scss'
import Dashboard from '../Dashboard/DashBoard';
import ActivityList from '../../ActivityList/ActivityList';

const SideBar = ({geoCoder, children}) => {
  const { data } = useContext(WeatherContext);
  
  return (
    <div className={style.sidebar}>
      <div>
       
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
  
export default SideBar

/* 
 <Form />
      {children}
      {data &&
        <Dashboard {...data} />
      }
     /*  * <div ref={geoCoder}/> */