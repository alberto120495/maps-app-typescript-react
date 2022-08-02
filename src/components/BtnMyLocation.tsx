import { useContext } from "react";
import { PlacesContext } from "../contexts";
import { useStateMapContext } from "../contexts/map/MapContext";

function BtnMyLocation() {
  const { isMapReady, map } = useStateMapContext();
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Map is not ready");
    if (!userLocation) throw new Error("There is NOT User Location");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 100 }}
    >
      My Ubicacion
    </button>
  );
}

export { BtnMyLocation };
