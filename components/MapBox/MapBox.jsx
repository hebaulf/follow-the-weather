import { useState, useEffect, useMemo } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
//replace icons
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './mapbox.module.scss'

const MapBox = ({ isMapbox, setIsMapbox, location, getWeather }) => {
  // is location clicked, then zoom
  const [clicked, setClicked] = useState(null);
  
  // set the viewport state
  // if clicked the lon/lat location changes in viewport
  // if clicked then zoomed to that lon/lat
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: location.latitude || (clicked && clicked.lngLat && clicked.lngLat[1]),
    longitude: location.longitude || (clicked && clicked.lngLat && clicked.lngLat[0]),
    zoom: clicked ? clicked.zoom : 10,
  });

  useEffect(() => {
    setViewport({
      width: '100%',
      height: '100%',
      latitude: clicked && clicked.lngLat ? clicked.lngLat[1] : location.latitude,
      longitude: clicked && clicked.lngLat ? clicked.lngLat[0] : location.longitude,
    })
  }, [clicked, isMapbox, location.latitude, location.longitude]); // is this needed ? useReducer?

  const marker = useMemo(
    () => (
      <Marker
        latitude={
          clicked && clicked.lngLat ? clicked.lngLat[1] : location.latitude
        }
        longitude={
          clicked && clicked.lngLat ? clicked.lngLat[0] : location.longitude
        }
      >
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          width={viewport.zoom * 4}
          height={viewport.zoom * 4}
          color={'#ccaf09'}
        />
      </Marker>
    ), [clicked, location.latitude, location.longitude, viewport.zoom]
  );

  return (
    <div className={style.modal} style={{ transform: isMapbox ? "translateY(0)" : "translateY(-60rem)" }}>
      <ReactMapGl
        {...viewport}
        mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
        mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport);
          setClicked({ ...clicked, zoom: nextViewport.zoom });
        }}
        onClick={(e) => {
          
        }}
      >
      {marker}
      </ReactMapGl>
    
    </div>
  )
}

export default MapBox;