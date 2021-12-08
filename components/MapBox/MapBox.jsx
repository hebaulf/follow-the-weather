import { useState, useEffect, useMemo } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
//replace icons
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './mapbox.module.scss'

const Mapbox = ({ isMapbox, setIsMapbox, location, getWeather }) => {
  const [clicked, setClicked] = useState(null);

  const [closePopup, setClosedPopup] = useState(true);

  const [showPopup, togglePopup] = useState(false);

  useEffect(() => {
    setViewport({
      width: "100%",
      height: "100%",
      latitude:
        clicked && clicked.lngLat ? clicked.lngLat[1] : location.latitude,
      longitude:
        clicked && clicked.lngLat ? clicked.lngLat[0] : location.longitude,
      zoom: clicked ? clicked.zoom : 10,
    });
  }, [clicked, isMapbox, location.latitude, location.longitude]);

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
          width={viewport.zoom * 5}
          height={viewport.zoom * 5}
          color={"#f53357"}
        />
      </Marker>
    ),
    [clicked, location.latitude, location.longitude, viewport.zoom]
  );

  return (
    <div
      style={{ transform: isMapbox ? "translateY(0)" : "translateY(-80rem)" }}
    >
      <div>
        <button onClick={() => setIsMapbox(false)}>Close</button>
      </div>
      <ReactMapGl
        {...viewport}
        onViewportChange={(nextViewport) => {
          setViewport(nextViewport);
          setClicked({ ...clicked, zoom: nextViewport.zoom });
        }}
        mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
        mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
        onClick={(e) => {
          !showPopup && setClicked({ ...clicked, lngLat: e.lngLat });
          togglePopup(!showPopup);
        }}
      >
        {marker}
        {showPopup && (
          <Popup
            latitude={clicked && clicked.lngLat && clicked.lngLat[1]}
            longitude={clicked && clicked.lngLat && clicked.lngLat[0]}
            closeButton={false}
            closeOnClick={closePopup ? true : false}
            onClose={() => togglePopup(false)}
          >
         
              <div>
                <button
                  onFocus={() => setClosedPopup(false)}
                  onBlur={() => setClosedPopup(true)}
                  onClick={() => setTimeout(() => togglePopup(false), 333)}
                >
                  No
                </button>
                <button
                  onFocus={() => setClosedPopup(false)}
                  onBlur={() => setClosedPopup(true)}
                  onClick={() => {
                    setTimeout(() => togglePopup(false), 333);
                    setIsMapbox(false);
                    getWeather(
                      [clicked.lngLat[1], clicked.lngLat[0]],
                      "coords"
                    );
                  }}
                >
                  Yes
                </button>
              </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  );
};

export default Mapbox;