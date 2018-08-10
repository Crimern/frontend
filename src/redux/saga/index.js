import {all} from "redux-saga/effects";
import crimeFetchSaga from './crimeFetchSaga';
import crimeTypeFetchSaga from './crimeTypeFetchSaga'; 

export default function* rootSaga() {
  yield all([
    crimeFetchSaga(),
    crimeTypeFetchSaga()
  ])
}
