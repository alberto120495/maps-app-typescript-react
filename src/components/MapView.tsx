import { useContext, useLayoutEffect, useRef } from "react";
import { Map } from "mapbox-gl";
import { PlacesContext } from "../contexts";
import { Loading } from "./";
import { useStateMapContext } from "../contexts/map/MapContext";

function MapView() {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMapaD } = useStateMapContext();

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMapaD?.(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100vw",
      }}
    >
      {/* {userLocation?.join(",")} */}
    </div>
  );
}

export { MapView };
