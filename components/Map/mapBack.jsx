import { useState, useRef, useEffect, useContext, useCallback } from 'react'
import * as ActivityState from '../../state/activityState'
import { useRouter } from 'next/router'
import ReactMapGL, {Marker, GeolocateControl} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import style from './map.module.scss'
import LocationMarker from '../MapMarkers/locationMarker'
import Dashboard from '../WeatherPageLayout/Dashboard/DashBoard'


import { WeatherContext } from '../../state/WeatherContext'
import { MapboxContext } from '../../state/MapboxContext'
import { getWeather } from '../../pages/api/weather-now'

import SideBar from '../WeatherPageLayout/Sidebar/Sidebar'
import Grid from '../WeatherPageLayout/Grid/grid'

const Map = () => {
  // MAP VIEWPORT
  const mapRef = useRef(null);
  const { data } = useContext(WeatherContext);
  //set variables with states to render activities and selected cat if within viewport
  const activityState = ActivityState.useGlobalState();
  const activities = activityState.getActivitiesSelectedCategory();
  const selectedCategory = activityState.getSelectedCategory();
  // initiate router for finding queries
  const router = useRouter();
  const { slug } = router.query || ['swimming']

  // get data from the local API
  useEffect(() => {
    const getPlaces = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${selectedCategory}`);
      const places = await r.json();
      activityState.setActivities(places.data.ServiceProviders.ServiceProviders, selectedCategory)
    }
    selectedCategory && getPlaces();
  }, [selectedCategory]) //don't pass in activityState, because it continues to reload 
  //console.log('activities', activities)

  
 // Hook for viewport state change - set initial state
  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
  };
  const positionOptions = {enableHighAccuracy: true};

  const geocoderContainerRef = useRef();  // create a REF for the geocoder so it can be placed outside of MAP cont
 const handleViewportChange = useCallback(  
    (newViewport) => setViewport(newViewport),
    []
  );

  // Create a geojson datatype for the activities from the API
  const activityCollection = activities.map(activity => ({
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


  const points = activityCollection;
  const pinSize = (6 * 1.5);
  const pinStyle = {
    backgroundColor: 'red',
    zIndex: '10',
    border: 'none',
    borderRadius: `${pinSize}px`,
    stroke: 'none',
    cursor: 'pointer',
    width: `${pinSize}px`,
    height: `${pinSize}px`
  };  
//console.log('these are the activities', points);
 
    

  const [city, setCity] = useState('')
  const { viewport, setViewport } = useContext(MapboxContext)
  const { setData, setLoading } = useContext(WeatherContext)
  const [error, setError] = useState(false)
  
  const getWeather = (data) => {
    setViewport({
      ...viewport,
      
    });
    setData({
      data
    });
  };
  console.log(data)

  // input city search
  const onChangeHandler = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    
  }


 /*  const submitHandler = async (e) => {
    setLoading(true);
    const data = await getWeather(city);
    if (data.cod !== 200) {
      setError(data);
      //console.log(data)
    } else {
      setWeather(data)
      setError(false);
    }
    setLoading(false)
  }; */

  // Limit query in search to Iceland

  const locParams = {
    country: 'is',
  };

  return (
    <Grid >
      <SideBar style={{zIndex: 1}}>
        <div ref={geocoderContainerRef} />
      </SideBar>
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
     { /*   <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      /> */}
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onSelected={setWeatherHandler}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
          position='bottom-right'
          placeholder="Search for city"
          zoom="14"
          value=""
          viewport={viewport}
          hideOnselect={true}
          queryParams={locParams}
        />
        {points.map(point => (
          <LocationMarker
            key={point.id}
            pinStyle={pinStyle}
            longitude={parseFloat(point.geometry.coordinates[1])} 
            latitude={parseFloat(point.geometry.coordinates[0])} 
            offsetLeft={`${-pinSize}`/ 2}
            offsetTop={`${-pinSize}` / 2}
          />
        ))}
      </ReactMapGL>
    </Grid>
  )
}

export default Map