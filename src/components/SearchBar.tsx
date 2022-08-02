import { ChangeEvent, useRef } from "react";
import "../styles.css";

function SearchBar() {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      //TODO: search for places
      console.log(event.target.value);
    }, 500);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Lugar"
        onChange={onQueryChange}
      />
    </div>
  );
}

export { SearchBar };
