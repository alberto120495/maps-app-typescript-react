import { useContext, useState } from "react";
import { PlacesContext } from "../contexts";
import { useStateMapContext } from "../contexts/map/MapContext";
import { Feature } from "../interfaces/places";

function SearchResults() {
  const { places, isLoadingPlaces } = useContext(PlacesContext);
  const { map } = useStateMapContext();

  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  if (isLoadingPlaces) {
    return (
      <div className="alert alert-primary mt-2">
        <h6>Buscando</h6>
        <p>Espere por favor</p>
      </div>
    );
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3 ">
      {places.map((place) => (
        <li
          onClick={() => onPlaceClick(place)}
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            place.id === activeId && "active"
          }`}
        >
          <h6>{place.text}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? " btn-outline-light"
                : "btn-outline-primary"
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
}

export { SearchResults };
