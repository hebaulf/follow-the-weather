import React, { useState, useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'
import style from './map.module.scss'


const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;



const Map = () => {

  useEffect(() => {
    const weatherData = async () => {

    }
  })

  // Set coordinates to points to work with mapbox
  const cityPoints = locations.map(location => ({
    type: "Feature",
    properties: {
      id: location.id,
      name: location.name,
      region: location.region,
    },
    geometry: {
      type: "Point",
      coordinates: [
        location.lng,
        location.lat
      ]
    },
    
  }));
  console.log(cityPoints)

  // set viewport to new locations
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 6,
    longitude:  -21.827774,
    latitude: 64.128288,
  });

  const bounds = [
    [66, 6, -25, 6], // NorthWest
    [62.9, -12.9] // Southeast coordinates
  ];
  
  
  const pinSize = (`${viewport.zoom}` * 1.5) ;


  const pinStyle = {
    border: 'none',
    stroke: 'none',
    cursor: 'pointer',
    width:`${pinSize}px`,
    height:`${pinSize}px`
  }
 
  return (
    <ReactMapGL 
      {...viewport}
      maxZoom={20}
      minZoom={4}
      mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
      mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {points.map(point => (
        <Marker offsetLeft={`${-pinSize}`/2} offsetTop={`${-pinSize}`/2} key={point.id} longitude={parseFloat(point.geometry.coordinates[1])} latitude={parseFloat(point.geometry.coordinates[0])} >
          <div className={style.icon} style={{ ...pinStyle }}/>
       </Marker>
      ))}
      
 
    </ReactMapGL>
  )
}

export default Map;
