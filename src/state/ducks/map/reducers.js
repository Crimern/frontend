import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  coordinates: {
    
  }
};

const actionHandlers = {
  MAP_COORDS_CHANGE: (state, action) => {
   const {lat,lng} = action.payload;
   return R.evolve(R.__, state)({
      coordinates: R.always({lat,lng}),
    })
  }
};

export default createReducer(initialState, actionHandlers);
