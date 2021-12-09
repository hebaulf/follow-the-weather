import React, { useContext } from 'react'
import { WeatherContext } from '../../../state/WeatherContext';
import style from './sidebar.module.scss'
import Dashboard from '../Dashboard/DashBoard';

import Form from '../Form/Form';
import { Searchbar } from '../SearchBar/SearchBar';
import ActivityList from '../../ActivityList/ActivityList';

const SideBar = ({children}) => {
  const { data } = useContext(WeatherContext);
  
  return (
    <div className={style.sidebar}>
      <h2>Reykjavík</h2>
      <ActivityList />
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
      */