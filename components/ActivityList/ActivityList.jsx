import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'// 
import * as ActivityState from '../../state/activityState'
import ActivityCard from '../ActivityCard/ActivityCard'

import style from './activityList.module.scss'
import Image from 'next/image'


const ActivityList = () => {

  const activityState = ActivityState.useGlobalState(); // with hooks
  const activities = activityState.getActivitiesSelectedCategory();

  return (
    <div className={style.list}>
      <h4 className={style.list__title}>Things to do</h4>
      <div className={style.form}>
        <button className={style.buttons} value='swimming' onClick={() => ActivityState.accessGlobalState().setSelectedCategory('swimming')}>Swimming Pools</button>
        <button className={style.buttons} value='hiking' onClick={() => ActivityState.accessGlobalState().setSelectedCategory('hiking')}>Hiking Tours</button>
        <button className={style.buttons} value='horse riding' onClick={() => ActivityState.accessGlobalState().setSelectedCategory('horse-riding')}>Geothermal Baths</button>
      </div>
      <div className={style.list} >
        {activities.map((activity, id) =>
          <ActivityCard key={id} activity={activity} />
        )};
      </div>
    </div>
  )
}

export default ActivityList


