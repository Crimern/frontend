import {call, put, takeLatest} from "redux-saga/effects";

import {crimeFetchSuccess, crimeFetchFail} from "../actions/crimeActions";
import {CRIME_FETCH_RADIUS} from "../endpoints";


function* fetchCrimesRadius(action) {
  try {
    const data = yield call(fetch, CRIME_FETCH_RADIUS, {
      method: "POST",
      body: JSON.stringify(action.payload)
    });
    
    const json = yield data.json();
    if (json.success) {
      yield put(crimeFetchSuccess(json.data));
    } else {
      yield put(crimeFetchFail(json.error));
    }
  } catch (error) {
    yield put(crimeFetchFail(error.message));
  }
}

export default function* checkAuthSaga() {
  yield takeLatest("CRIME_FETCH_REQUEST", fetchCrimesRadius);
}