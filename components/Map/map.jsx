import { useState, useRef, useCallback } from 'react'
import ReactMapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import style from './map.module.scss'


const Map = () => {
  // MAP VIEWPORT
  // hook for viewport state change - set initial state
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
  const mapRef = useRef();

  // Callback function for setting the newViewport
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // LOCATION POINTS - interactive: onClick => 
  // triggers getWeatherData for the selected location 
  // sets new weather info in sidebar
  // viewport changes and moves to selected location on map

  //hook state - takes array [lon,lat]
  const [interactivePointIds, setInteractivePointIds] = useState([])
  const onInteractivePointsChange = useCallback(layerFilter => {
    setInteractivePoint
  })
 

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