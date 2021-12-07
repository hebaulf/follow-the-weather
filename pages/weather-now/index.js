import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Grid from '../../components/Layout/Grid/grid';
import Content from '../../components/Layout/Content/content';
import Sidebar from '../../components/Layout/Sidebar/sidebar';
import Map from '../../components/Map/map';
import DropdownMenuDemo from '../../components/Dropdown/dropdown_radix';
import Weather from '../../components/Weather/weather';
import * as ActivityState from '../../state/activityState'
import ActivityCard from '../../components/ThingsToDo/ServiceListByCategory/ActivityCard/activityCard';

const WeatherNow = () => {
	const activityState = ActivityState.useGlobalState(); //with hooks
	// const activityState = ActivityState.accessGlobalState(); // without hooks
	const activities = activityState.getActivitiesSelectedCategory()
  return (
    <Grid>
      <Content>
				<Map />
      </Content>
			<Sidebar>
				<button onClick={() => ActivityState.accessGlobalState().setSelectedCategory('swimming')}>Swimming</button>
				<button onClick={() => ActivityState.accessGlobalState().setSelectedCategory('hiking')}>Hiking</button>
				{activities.map(activity =>
					<ActivityCard activity={activity}/>)}
			</Sidebar>
			
    </Grid>
  )
}



export default WeatherNow;

