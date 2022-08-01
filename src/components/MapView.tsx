import { useContext } from "react";
import { PlacesContext } from "../contexts";
import { Loading } from "./";

function MapView() {
  const { isLoading, userLocation } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }

  return <div>{userLocation?.join(",")}</div>;
}

export { MapView };
