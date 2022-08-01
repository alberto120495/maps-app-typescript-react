import React from "react";
import { PlacesProvider } from "./contexts";
import { HomePage } from "./pages";

function MapsApp() {
  return (
    <PlacesProvider>
      <HomePage />
    </PlacesProvider>
  );
}

export default MapsApp;
