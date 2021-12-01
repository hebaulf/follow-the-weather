import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[64.972,-18.057]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}>
      <Marker 
        position={[64.972,-18.057]}
        draggable={true}
        animate={true}
      >
        <Popup>
          Hey, this works.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map