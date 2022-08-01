import { PlacesState } from "./PlacesProvider"

type placesAction = {
    type:"setUserLocation", payload: [number, number]
}

function placesReducer(state:PlacesState, action:placesAction):PlacesState {

  switch (action.type) {
    case "setUserLocation":
        return {...state, isLoading:false, userLocation:action.payload}
     
    default:
        return state;
  }
}

export default placesReducer