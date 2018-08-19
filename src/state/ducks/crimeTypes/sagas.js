import { takeLatest} from "redux-saga/effects";
import {createSagaApiCall} from "../../../helpers/reduxHelper";

import {fetchSuccess, fetchFail } from "./actions";
import { CRIME_TYPE_FETCH } from "./endpoints";


const apiCall = createSagaApiCall(CRIME_TYPE_FETCH, "GET", fetchSuccess, fetchFail)

export default function* crimeTypesFetchSaga() {
  yield takeLatest("CRIME_TYPE_FETCH_REQUEST", apiCall);
}
