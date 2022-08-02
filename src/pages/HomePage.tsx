import { BtnMyLocation, MapView, SearchBar } from "../components";

function HomePage() {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <SearchBar />
    </div>
  );
}

export { HomePage };
