import { createContext, useState } from "react";

export const MapboxContext = createContext();

const MapboxContextProvider = ({ children }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 6,
    longitude: -18.5,
    latitude: 65,
    bearing: 0,
    pitch: 0
  })
  return (
    <MapboxContext.Provider
      value={{
        viewport,
        setViewport,
      }}
    >
      {children}
    </MapboxContext.Provider>
  )
}

export default MapboxContextProvider;