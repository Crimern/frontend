import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";

import {HashRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import App from "./components/App";
import registerServiceWorker from "./workers/ServiceWorker";

import rootReducer from "./redux/reducers";
import rootSaga from "./redux/saga";
// Redux Stuff
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter
      onUpdate={() => {
        window.scrollTo(0, 0);
      }}
    >
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
