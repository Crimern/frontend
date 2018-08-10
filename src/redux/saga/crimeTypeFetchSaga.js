import {call, put, takeLatest} from "redux-saga/effects";

import {crimeTypeFetchSuccess, crimeTypeFetchFail} from "../actions/crimeTypeActions";
import {CRIME_TYPE_FETCH} from "../endpoints";


function* crimeTypesFetch(action) {
  try {
    const data = yield call(fetch, CRIME_TYPE_FETCH);
    const json = yield data.json();
    if (data.status === 200) {
      yield put(crimeTypeFetchSuccess(json.data));
    } else {
      yield put(crimeTypeFetchFail(json.error));
    }
  } catch (error) {
    yield put(crimeTypeFetchFail(error.message));
  }
}


export default function* crimeTypesFetchSaga() {
  yield takeLatest("CRIME_TYPE_FETCH_REQUEST", crimeTypesFetch);
}
