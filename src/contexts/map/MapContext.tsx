import { Map } from "mapbox-gl";
import { createContext, useContext, useState } from "react";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
}

const initialState: MapContextProps = {
  isMapReady: false,
  map: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MapContext = createContext<MapContextProps>({} as MapContextProps);

const useStateContext = () => useContext(MapContext);

function MapProvider({ children }: Props) {
  const [data, setData] = useState(initialState);
  return (
    <MapContext.Provider
      value={{
        ...data,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export { MapProvider, useStateContext };
