import { Marker } from 'react-map-gl'
import style from './markers.module.scss'


const PlaceMarker = ({ latitude, longitude, data }) => {

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-12}
      offsetTop={-12}
    >
      <div className={style.markerContainer}>
        <svg viewBox="0 0 24 24" height="24" width="24">
          <rect fill="none" x="0" y="0" width="24" height="24"/>
          <path fill="#000000" transform="translate(2 2)" d="M7.5,0C5.0676,0,2.2297,1.4865,2.2297,5.2703
	C2.2297,7.8378,6.2838,13.5135,7.5,15c1.0811-1.4865,5.2703-7.027,5.2703-9.7297C12.7703,1.4865,9.9324,0,7.5,0z"/>
        </svg>
      </div>
    </Marker>
  )
}

export default PlaceMarker