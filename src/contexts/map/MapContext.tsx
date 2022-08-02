import { Map } from "mapbox-gl";
import { createContext, useContext, useState } from "react";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;

  //Methods
  setMapaD?: (payload: Map) => void;
}

const initialState: MapContextProps = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MapContext = createContext<MapContextProps>({} as MapContextProps);

const useStateMapContext = () => useContext(MapContext);

function MapProvider({ children }: Props) {
  const [mapa, setMapa] = useState(initialState);

  const setMapaD = (payload: Map) => {
    setMapa({
      ...mapa,
      isMapReady: true,
      map: payload,
    });
  };
  return (
    <MapContext.Provider
      value={{
        ...mapa,
        setMapaD,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useStateMapContext };
