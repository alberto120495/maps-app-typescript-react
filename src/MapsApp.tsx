import { MapProvider, PlacesProvider } from "./contexts";
import { HomePage } from "./pages";

function MapsApp() {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomePage />
      </MapProvider>
    </PlacesProvider>
  );
}

export default MapsApp;
