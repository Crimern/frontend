import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  crimeTypes: []
};

const actionHandlers = {
  CRIME_TYPE_FETCH_SUCCESS: (state, action) => {
   return R.evolve(R.__, state)({
      crimeTypes: R.always(action.data)
    })
  }
};

export default createReducer(initialState, actionHandlers);
