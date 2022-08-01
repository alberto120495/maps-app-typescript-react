import React from "react";
import { PlacesProvider } from "./contexts";

function MapsApp() {
  return (
    <PlacesProvider>
      <h1>Hola Mundo de Nuevo</h1>
    </PlacesProvider>
  );
}

export default MapsApp;
