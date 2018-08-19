import { takeLatest } from "redux-saga/effects";
import { createSagaApiCall } from "../../helpers/reduxHelper";

import { crimeTypeFetchSuccess, crimeTypeFetchFail } from "../actions/crimeTypeActions";
import { CRIME_TYPE_FETCH } from "../endpoints";


const apiCall = createSagaApiCall(CRIME_TYPE_FETCH, "GET", crimeTypeFetchSuccess, crimeTypeFetchFail)

export default function* crimeTypesFetchSaga() {
  yield takeLatest("CRIME_TYPE_FETCH_REQUEST", apiCall);
}
