import React, {Component} from "react";
import {withRouter} from "react-router";
import Map from "../../container/Map";
import Loadable from "../LoadableComponent";

const FilterList = Loadable({
  loader: () => import("../../container/FilterListContainer")
});

function Home() {
  return (
    <div>
      <main>
        <Map coordinateX={53.0184484} coordinateY={18.5722981} />
        <FilterList />
      </main>
    </div>
  );
}

export default withRouter(Home);
