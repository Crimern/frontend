import {call, put, takeLatest} from "redux-saga/effects";
import {createSagaApiCall} from "../../helpers/reduxHelper";

import {crimeFetchSuccess, crimeFetchFail} from "../actions/crimeActions";
import {CRIME_FETCH_RADIUS} from "../endpoints";


const apiCall = createSagaApiCall(CRIME_FETCH_RADIUS,"POST",crimeFetchSuccess,crimeFetchFail)

export default function* fetchCrimesRadiusSaga() {
  yield takeLatest("CRIME_FETCH_REQUEST", apiCall);
}