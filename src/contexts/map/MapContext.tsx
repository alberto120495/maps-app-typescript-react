import { Map, Marker, Popup } from "mapbox-gl";
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
    const myLocationPopup = new Popup().setHTML(
      "<h4>You are here</h4> <p>En algun lugar del mundo</p>"
    );

    new Marker({ color: "#61DAFB" })
      .setLngLat(payload.getCenter())
      .setPopup(myLocationPopup)
      .addTo(payload);
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
