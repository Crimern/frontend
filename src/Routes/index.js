import React from "react";
import {Route, Switch} from "react-router-dom";
import Applied from "./AppliedRoute";

import Loadable from "../LoadableComponent";

const NotFound = Loadable({
  loader: () => import("../components/NotFound")
});

const Home = Loadable({
  loader: () => import("../components/Home")
});

const AddCrime = Loadable({
  loader: () => import("../components/AddCrime")
});

export default ({props}) => (
  <Switch>
    <Applied path="/" exact component={Home} props={props} />
    <Applied path="/addCrime" exact component={AddCrime} props={props} />
    <Route component={NotFound} />
  </Switch>
);
