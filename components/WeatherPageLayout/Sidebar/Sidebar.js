import React, { useContext } from 'react'
import { WeatherContext } from '../../../state/WeatherContext';
import style from './sidebar.module.scss'
import Dashboard from '../Dashboard/DashBoard';
import Form from '../Form/Form';

// eslint-disable-next-line react/display-name
const SideBar = ({children}) => {
  const { data } = useContext(WeatherContext);
  
  return (
    <div className={style.sidebar}>
      {children}
    </div>
  )
}
  
export default SideBar
