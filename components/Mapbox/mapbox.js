import React, { useState, useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ActivityState from '../../state/activityState'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import style from './mapbox.module.scss'



const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

 

const Mapbox = () => {

  const mapRef = useRef(null);
  const activityState = ActivityState.useGlobalState()
  const activities = activityState.getActivitiesSelectedCategory();
  const selectedCategory = activityState.getSelectedCategory();
  // ACTIVITIES
  //const [activities, setActivities] = useState([])
  const router = useRouter()
  const { slug } = router.query || ['swimming']
  
  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${selectedCategory}`);
      const data = await r.json();
      activityState.setActivities(data.data.ServiceProviders.ServiceProviders, selectedCategory)
      //setActivities(data.data.ServiceProviders.ServiceProviders)
    }

    selectedCategory && getData();
  }, [selectedCategory])

  console.log('activities', activities)

  const newLocal = activities.map(activity => ({
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
  }))
  // Set coordinates to points to work with mapbox
  const points = newLocal;
  console.log('these are the location', points)

  // set viewport to new locations
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 6,
    longitude: -18.5,
    latitude: 65,
  });

  console.log('show the viewport loc', viewport)

  
  const pinSize = (`${viewport.zoom}` * 1.5);
  
    const pinStyle = {
      border: 'none',
      stroke: 'none',
      cursor: 'pointer',
      width: `${pinSize}px`,
      height: `${pinSize}px`
    };

  /* const pointMarker = useMemo(
    () => (
      <Marker
        key={point.id} 
        offsetLeft={`${-pinSize}` / 2}
        offsetTop={`${-pinSize}` / 2}
        longitude={parseFloat(point.geometry.coordinates[1])}
        latitude={parseFloat(point.geometry.coordinates[0])}
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          width={viewport.zoom * 5}
          height={viewport.zoom * 5}
          color={"#f53357"}
        />
      </Marker>
    ),
    [clicked, viewport.zoom]
  ); */

  /* const pointMarkers = useMemo((pinStyle, pinSize) => points.map(point => (
      <Marker offsetLeft={`${-pinSize}`/2} offsetTop={`${-pinSize}`/2} key={point.id} longitude={parseFloat(point.geometry.coordinates[1])} latitude={parseFloat(point.geometry.coordinates[0])} >
          <button className={style.icon} style={{ ...pinStyle }}/>
       </Marker>
    )
  ),[points]) */
 
  return (
    <ReactMapGL 
      {...viewport}
      ref={mapRef}
      maxZoom={20}
      minZoom={4}
      mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
      mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
      onViewportChange={(nextViewport) => {
        setViewport(nextViewport);
        //setClicked({...clicked, zoom: nextViewport.zoom})
      }}
      onInteractionStateChange={(extra) => {
        if (!extra.isDragging && mapRef.current) {
          const bounds = mapRef.current.getMap().getBounds();
          //console.log(bounds)
          ActivityState.accessGlobalState().setBoundaries(bounds);
        }
      }}
    >
      {points.map(point => (
        <Marker offsetLeft={`${-pinSize}`/2} offsetTop={`${-pinSize}`/2} key={point.id} longitude={parseFloat(point.geometry.coordinates[1])} latitude={parseFloat(point.geometry.coordinates[0])} >
          <button className={style.icon} style={{ ...pinStyle }}/>
       </Marker>
      ))}
    </ReactMapGL>
  )
}

export default Mapbox;

/* <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      /> */