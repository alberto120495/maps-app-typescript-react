import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../contexts";
import "../styles.css";
import { SearchResults } from "./SearchResults";

function SearchBar() {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      //TODO: search for places
      searchPlacesByTerm(event.target.value);
    }, 500);
  };

  return (
    <div className="search-container ">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChange}
      />
      <div className="overflow-auto">
        <SearchResults />
      </div>
    </div>
  );
}

export { SearchBar };
