import {call, put} from "redux-saga/effects";


export const createSagaApiCall = (endpoint,method,success,fail) => {
  return function* (action) {
    try {
      const data = yield call(fetch, endpoint, {
        method: method,
        body: JSON.stringify(action.payload)
      });

      const json = yield data.json();

      if (json.success) {
        yield put(success(json.data));
      } else {
        yield put(fail(json.userMessage));
      }

    } catch(error) {
      yield put(fail(error.message))
    }
  }
}