import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  filters: new Map()
};

const actionHandlers = {
  FILTER_ADD: (state, action) => {
   const {id,name} = action.payload;
   return R.evolve(R.__, state)({
      filters: R.always(state.filters.set(id, name))
    })
  },
  FILTER_REMOVE: (state,action) => {
    const {id} = action.payload;
    let newMap = state.filters.delete(id)
    if(newMap === true) newMap = new Map() 
    
    return R.evolve(R.__,state)({
      filters: R.always(newMap)
    })
  }
};

export default createReducer(initialState, actionHandlers);
