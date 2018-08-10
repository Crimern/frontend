import {combineReducers} from "redux";
import crimeReducer from './crimeReducer'
import crimeTypeReducer from "./crimeTypeReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  crimeStore: crimeReducer,
  crimeTypeStore: crimeTypeReducer,
  filterStore: filterReducer
});
