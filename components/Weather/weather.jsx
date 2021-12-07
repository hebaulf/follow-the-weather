import { useState, useEffect } from 'react'
import axios from 'axios'
import Map from '../Map/map';


const Weather = ({ settings, setSettings }) => {
  //const [isSearching, setIsSearching] = useState(false);
  const [isMapbox, setIsMapbox] = useState(false);
  const [location, setLocation] = useState({
    latitude: 64.5,
    longitude: -18.5,
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
  }, []);

  const successLocation = (position) => {
    const {
      coords: { latitude, longitude },
    } = position;

    setLocation({ latitude, longitude });

    getWeather([latitude, longitude], "coords");
  };

  const getWeather = async (location, type) => {
    setIsLoading(true);
    if (type === "coords") {
      try {
        const { data } = await axios.get(
          `api/weather?type=coords&lat=${location[0]}&lon=${location[1]}`
        );

        setWeather(data);
      } catch (err) {}
      setIsLoading(false);
    }

    if (type === "city") {
      try {
        const { data } = await axios.get(
          `api/weather?type=city&city=${location}`
        );

        setLocation({
          latitude: data.location.lat,
          longitude: data.location.lon,
        });

        setWeather(data);

        setIsLoading(false);

        return true;
      } catch (err) {
        setIsLoading(false);

        return false;
      }
    }
  };

  const errorLocation = () => {
    getWeather("Reykjavik", "city");
  };

  return (
    <>
      <Map />
    </>
  );
};

export default Weather;