import { useState, useRef, useEffect, useCallback } from 'react'
import * as ActivityState from '../../state/activityState'
import { useRouter } from 'next/router'
import ReactMapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import style from './map.module.scss'


const Map = () => {
  // MAP VIEWPORT
  const mapRef = useRef(null);
  //set variables with states to render activities and selected cat if within viewport
  const activityState = ActivityState.useGlobalState();
  const activities = activityState.getActivitiesSelectedCategory();
  const selectedCategory = activityState.getSelectedCategory();
  // initiate router for finding queries
  const router = useRouter();
  const { slug } = router.query || ['swimming']

  // get data from the local API
  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${selectedCategory}`);
      const data = await r.json();
      activityState.setActivities(data.data.ServiceProviders.ServiceProviders, selectedCategory)
    }
    selectedCategory && getData();
  }, [selectedCategory]) //don't pass in activityState, because it continues to reload 
  //console.log('activities', activities)

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
  //console.log('these are the activities', points);
  
  // Set coordinates to points to work with mapbox
  


  // Hook for viewport state change - set initial state
  const [viewport, setViewport] = useState({
    zoom: 6,
    longitude: -18.5,
    latitude: 65,
    bearing: 0,
    pitch: 0
  });
   // create a REF for the geocoder Search input to the Map - so it can be placed outside
  const geocoderContainerRef = useRef();
  // useRef() because we need to 

  // Callback function for setting the newViewport
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const [weather, setWeather] = useState({});
  const [allData, setAllData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('Reykjavik');
  const [isHighLighted, setIsHighLighted] = useState()
  
  // fetch data from location geojson locally
  useEffect(() => {
    /* global fetch */
    fetch(
      '../../data/locations.geojson'
    )
      .then(resp => resp.json())
      .then(json => setAllData(json));
  }, []);

  // LOCATION POINTS - interactive: onClick => 
  // triggers getWeatherData for the selected location 
  // sets new weather info in sidebar
  // viewport changes and moves to selected location on map

  //hook state - takes array [lon,lat]
  const [interactivePlaceIds, setInteractivePlaceIds] = useState([])
 
 

    //locations arnavala.ckwx0vs2j19ts20p8is3rgqd5-3aeaa
  
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: 'relative', top: 100, right: 20, zIndex: 10 }}
      />
        <ReactMapGL
        ref={mapRef}
        {...viewport}
        width='100%'
        height='100%'
        mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
        mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
        onViewportChange={handleViewportChange}
        attributionControl={false}
      >
          <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
          position='top-left'
          
        />
      </ReactMapGL>
    </div>
  )
}

export default Map