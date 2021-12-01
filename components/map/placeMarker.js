import { Marker } from 'react-map-gl'

const PlaceMarker = ({ latitude, longitude }) => {
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      id={id}
    >
      <div>weather</div>
      <p>Reykjavik</p>
    </Marker>
  )
}

export default PlaceMarker