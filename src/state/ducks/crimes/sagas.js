import { takeLatest} from "redux-saga/effects";
import {createSagaApiCall} from "../../../helpers/reduxHelper";

import {fetchSuccess,fetchFail} from "./actions";
import {CRIME_FETCH_RADIUS} from "./endpoints";


const apiCall = createSagaApiCall(CRIME_FETCH_RADIUS,"POST",fetchSuccess,fetchFail)

export default function* fetchCrimesRadiusSaga() {
  yield takeLatest("CRIME_FETCH_REQUEST", apiCall);
}