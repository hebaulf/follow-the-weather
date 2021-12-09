import { Marker } from 'react-map-gl'
import style from './markers.module.scss'


const LocationMarker = ({ key, latitude, longitude, offsetLeft, offsetTop, pinStyle}) => {

  
  return (
    <Marker
      key={key}
      latitude={latitude}
      longitude={longitude}
      offsetLeft={offsetLeft}
      offsetTop={offsetTop}
    >
       <button className={style.icon} style={pinStyle}/>
    </Marker>
  )
}

export default LocationMarker