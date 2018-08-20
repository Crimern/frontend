import React, {Component} from "react";
import Routes from "../../Routes";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import OSMap from './../OSMap/index'
import Loadable from "../LoadableComponent";

const FilterList = Loadable({
  loader: () => import("./../FilterList")
})

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <main>
        <OSMap coordinateX={53.0184484} coordinateY={18.5722981} />
        <FilterList />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
