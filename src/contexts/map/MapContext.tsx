import { Map, Marker, Popup } from "mapbox-gl";
import { createContext, useContext, useEffect, useState } from "react";
import { PlacesContext } from "../places/PlacesContext";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];

  //Methods
  setMapaD?: (payload: Map) => void;
}

const initialState: MapContextProps = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MapContext = createContext<MapContextProps>({} as MapContextProps);

const useStateMapContext = () => useContext(MapContext);

function MapProvider({ children }: Props) {
  const [mapa, setMapa] = useState(initialState);

  const { places } = useContext(PlacesContext);

  useEffect(() => {
    mapa.markers.forEach((marker) => marker.remove());
    const newMarkers: Marker[] = [];
    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(
        `
        <h6>${place.text}</h6>
        <p>${place.place_name}</p>
        `
      );
      const newMarker = new Marker({ color: "#61DAFB" })
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(mapa.map!);
      newMarkers.push(newMarker);
    }

    //todo:limpiar polylines

    setMarkers(newMarkers);
  }, [places]);

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

  function setMarkers(markers: Marker[]) {
    setMapa({
      ...mapa,
      markers: markers,
    });
  }

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
