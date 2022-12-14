/* eslint import/no-webpack-loader-syntax:off */

import React from "react";
import ReactDOM from "react-dom/client";
import MapsApp from "./MapsApp";

//@ts-ignore
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAP_BOX_TOKEN!;

if (!navigator.geolocation) {
  alert("Tu navegador no soporta la Geolocalización");
  throw new Error("Tu navegador no soporta la Geolocalización");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
