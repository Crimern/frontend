import {combineReducers} from "redux";
import crimeReducer from './crimeReducer'
export default combineReducers({
  crimeStore: crimeReducer
});
