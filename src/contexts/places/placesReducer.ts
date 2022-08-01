import { PlacesState } from "./PlacesProvider"

type placesAction = {
    type:"SET_USER_LOCATION", payload: [number, number]
}

function placesReducer(state:PlacesState, action:placesAction):PlacesState {

  switch (action.type) {
    case "SET_USER_LOCATION":
        return {...state, isLoading:false, userLocation:action.payload}
     
    default:
        return state;
  }
}

export default placesReducer