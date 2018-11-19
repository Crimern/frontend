import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./components/App";
import configureStore from "./state/store";
import registerServiceWorker from "./workers/ServiceWorker";

const store = configureStore();

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
