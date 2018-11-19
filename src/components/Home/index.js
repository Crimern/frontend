import React, {Component} from "react";
import {withRouter} from "react-router";
import Map from "../../container/Map";
import Header from "../Header";
import Loadable from "../LoadableComponent";
import "./index.css";

const FilterList = Loadable({
  loader: () => import("../../container/FilterListContainer")
});

function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <Map coordinateX={53.0184484} coordinateY={18.5722981} />
        <FilterList />
      </main>
    </div>
  );
}

export default withRouter(Home);
