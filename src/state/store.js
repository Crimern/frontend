import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import {crimesSaga} from './ducks/crimes';
import {crimeTypesSaga} from './ducks/crimeTypes';

function* rootSaga() {
  yield all([
    crimeTypesSaga(),
    crimesSaga()
  ])
}

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}