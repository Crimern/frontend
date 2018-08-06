import {all} from "redux-saga/effects";
import crimeFetchSaga from './crimeFetchSaga';
export default function* rootSaga() {
  yield all([
    crimeFetchSaga()
  ])
}
