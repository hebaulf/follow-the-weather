import { useState, useRef, useEffect, useContext, useCallback } from 'react'
import { useRouter } from 'next/router'
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
/*utils*/
import * as ActivityState from '../../state/activityState'
import { WeatherContext } from '../../state/WeatherContext'
import { MapboxContext } from '../../state/MapboxContext'
import { getWeather } from '../../pages/api/weather-now'
/*components*/
import style from './map.module.scss'
//import SideBar from '../WeatherPageLayout/Sidebar/Sidebar'
//import Grid from '../WeatherPageLayout/Grid/grid'
import LOCATIONS from '../../data/locations.json'

const MAPBOX_TOKEN = "pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
const MAP_STYLE = "mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
const MAP_PLACE_URL = ""

const Map = ({ mapRef, geoCoder, places, setPlaceClicked, weatherData }) => {
  // MAP VIEWPORT
  const { viewport, setViewport } = useContext(MapboxContext)
  const handleViewportChange = useCallback(
    (newViewport) =>  {
        setViewport(newViewport);
    },
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  // PlACE DATA
  //set variables with states to render activities and selected cat if within viewport
  const activityState = ActivityState.useGlobalState();
  const activities = activityState.getActivitiesSelectedCategory();
  const selectedCategory = activityState.getSelectedCategory();
  const router = useRouter();
  const { slug } = router.query || ['swimming']

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${selectedCategory}`);
      const data = await r.json();
      activityState.setActivities(data.data.ServiceProviders.ServiceProviders, selectedCategory)
    }
    selectedCategory && getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]) //don't pass in activityState, because it continues to reload
  //console.log('activity list', activities)

   const points = activities.map(activity => ({
    type: "Feature",
    properties: {
      id: activity.id,
      name: activity.translations[1].name,
      description: activity.translations[1].description,
      website: activity.website,
      latitude: parseFloat(activity.location.coordinates[1]),
      longitude: parseFloat(activity.location.coordinates[0])
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(activity.location.coordinates[1]),
        parseFloat(activity.location.coordinates[0])
      ]
    },
  }));
 
  // ACTIVITY MARKERS
  const pinSize = (6 * 1.5);
  const pinStyle = {
    width: `${pinSize}px`,
    height: `${pinSize}px`
  };

  const activityMarkers = points?.map(
    (point) => (
      <Marker
        key={point.id}
        pinStyle={pinStyle}
        className={style.activityMarker}
        longitude={parseFloat(point.geometry.coordinates[1])}
        latitude={parseFloat(point.geometry.coordinates[0])}
        offsetLeft={`${-pinSize}` / 2}
        offsetTop={`${-pinSize}` / 2}
      />
    )
  );

  // PLACES MARKERS - LOCATIONS
  
  
  return (
    <Grid >
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
        mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
        onViewportChange={handleViewportChange}
        attributionControl={false}
        marker={true}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
          position='bottom-right'
          placeholder="Search for city"
          zoom="14"
          value=""
          queryParams={locParams}
        />

        {activityMarkers}
       
      </ReactMapGL>
    </Grid>
  )
}

export default Map



  
  

  
 * /

 /*  const ActivityMarker = {points.map(point => (
          <LocationMarker
            key={point.id}
            pinStyle={pinStyle}
            longitude={parseFloat(point.geometry.coordinates[1])} 
            latitude={parseFloat(point.geometry.coordinates[0])} 
            offsetLeft={`${-pinSize}`/ 2}
            offsetTop={`${-pinSize}` / 2}
          />
        ))} */