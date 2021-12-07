import { Marker } from 'react-map-gl'
import style from './map.module.scss'
import Image from 'next/image'

const TodoMarker = ({ latitude, longitude}) => {

  return (
    <Marker
      className={style.marker}
      latitude={latitude}
      longitude={longitude}
    >
      <button className={style.btn}>
        <Image className={style.icon} alt='marker' src='../../public/Pin.png'/>
     </button>
    </Marker>
  )
}

export default TodoMarker;