import { useContext } from "react";
import { PlacesContext } from "../contexts";

function SearchResults() {
  const { places, isLoadingPlaces } = useContext(PlacesContext);

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
        <li key={place.id} className="list-group-item list-group-item-action  ">
          <h6>{place.text}</h6>
          <p
            className="text-muted"
            style={{
              fontSize: "12px",
            }}
          >
            {place.place_name}
          </p>
          <button className="btn btn-outline-primary btn-sm">
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
}

export { SearchResults };
