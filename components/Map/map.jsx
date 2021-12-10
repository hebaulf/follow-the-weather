import { useState, useRef, useEffect, useContext, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
/*utils*/
import * as ActivityState from '../../state/activityState'
import { WeatherContext } from '../../state/WeatherContext'
import { MapboxContext } from '../../state/MapboxContext'
import { getWeather } from '../../pages/api/data'
import style from './map.module.scss'


import LOCATIONS from '../../data/locations.json'

const Map = ({ mapRef, geoCoder }) => {
  const { setWeatherData } = useContext(WeatherContext);
  const { viewport, setViewport } = useContext(MapboxContext)
  const [city, setCity] = useState("")

  const activityState = ActivityState.useGlobalState();
  const activities = activityState.getActivitiesSelectedCategory();
  const selectedCategory = activityState.getSelectedCategory();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const r = await fetch(`/api/weather-now/thingstodo/${selectedCategory}`);
      const data = await r.json();
      activityState.setActivities(data.data.ServiceProviders.ServiceProviders, selectedCategory)
    }
    selectedCategory && getData();
  }, [selectedCategory]) //don't pass in activityState
  //console.log('activities', activities)

  // ACTIVITY DATA
  //set variables with states to render activities and selected cat if within viewport
  const activityFeatures = activities.map(activity => ({
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
  }));
  const points = activityFeatures;
  //console.log('these are the location', points)


  const handleViewportChange = useCallback(
    (newViewport) => {
      setViewport(newViewport);
    },
    //setClicked({...clicked, zoom: nextViewport.zoom})
    [setViewport]
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );

  // ACTIVITY MARKERS
  const pinSize = (`${viewport.zoom}` * 1.5);
  const pinStyle = {
    border: 'none',
    stroke: 'none',
    cursor: 'pointer',
    width: `${pinSize}px`,
    height: `${pinSize}px`
  };

  const setWeather = (weatherData) => {
    setViewport({
      ...viewport,
      latitude: weatherData.coord.lat,
      longitude: weatherData.coord.lon
    });
    setWeatherData({
      weatherData
    });
  };

  // input city search
  const onChangeHandler = (e) => {
    setCity(e.input.value);
  }

  console.log(onChangeHandler, setCity)

  // PLACES MARKERS - LOCATIONS - WEATHER
  /*  const weatherMarkers = weatherData?.map(
     (data, i) => (
       <Marker
         key={i}
         latitude={data.coord.lat}
         longitude={data.coord.LinearInterpolator}
       >
         Weather
       </Marker>
     )
   ); */


  return (
    <ReactMapGL
      {...viewport}
      ref={mapRef}
      mapStyle="mapbox://styles/arnavala/ckwseyp3o1te715nqrmf4kro7"
      mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
      maxZoom={8}
      minZoom={4}
      width='100%'
      height='100%'
      onResult={onChangeHandler}
      onViewportChange={handleViewportChange}
      onInteractionStateChange={(extra) => {
        if (!extra.isDragging && mapRef.current) {
          const bounds = mapRef.current.getMap().getBounds();
          //console.log(bounds)
          ActivityState.accessGlobalState().setBoundaries(bounds);
        }
      }}
    >
      <Geocoder
        mapRef={mapRef}
        containerRef={geoCoder}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken="pk.eyJ1IjoiYXJuYXZhbGEiLCJhIjoiY2t3ZjM4Z2wzMGFtcjJ3bnU5ZDdhaHFmeCJ9.i-wJdflLC-HJCWPBXQL0JA"
        placeholder="Choose a location"
        clearOnBlur
        types={'place'}
        countries={'is'}
        marker={true}
        value={city}
        onResult={onChangeHandler}
        updateInputOnSelect={true}
      />
      {points.map(point => (
        <Marker offsetLeft={`${-pinSize}` / 2} offsetTop={`${-pinSize}` / 2} key={point.id} longitude={parseFloat(point.geometry.coordinates[1])} latitude={parseFloat(point.geometry.coordinates[0])} >
          <button className={style.icon} style={{ ...pinStyle }} />
        </Marker>
      ))}
    </ReactMapGL>
  )
}

export default Map

/* <GeolocateControl
          style={{
            top:24,
            left: 24,
            position: 'absolute',
          }}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          auto
        /> */