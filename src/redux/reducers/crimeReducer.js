import * as R from "ramda";
import createReducer from "../../helpers/reducerHelper";

const initialState = {
  crimes: []
};

const actionHandlers = {
  CRIME_FETCH_SUCCESS: (state, action) => {
   return R.evolve(R.__, state)({
      crimes: R.always(action.data)
    })
  }
};

export default createReducer(initialState, actionHandlers);
