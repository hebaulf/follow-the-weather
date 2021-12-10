import { createContext, useState } from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(true)
  const [loading, setLoading] = useState(false)
  
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        loading,
        setLoading
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider