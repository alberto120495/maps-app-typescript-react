import { useEffect, useReducer } from "react";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import placesReducer from "./placesReducer";
import { searchApi } from "../../apis";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: false,
  userLocation: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((ubicacion) =>
      dispatch({
        type: "SET_USER_LOCATION",
        payload: ubicacion,
      })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) return [];
    if (!state.userLocation) throw new Error("No hay ubicacion del usuario");

    const resp = await searchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });

    console.log(resp.data);
    return resp.data;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
