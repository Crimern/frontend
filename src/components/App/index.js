import React, {Component} from "react";
import Routes from "../../Routes";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import OSMap from './../OSMap/index'
import FilterList from './../FilterList'
class App extends Component {

  componentDidMount() {}

  render() {
    const childProps = {
      isLoggedIn: false
    };

    return (
    <div>
      <Routes props={childProps} />
      <OSMap coordinateX={53.0184484} coordinateY={18.5722981} />
      <FilterList/>
    </div>
    )
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
  )(App)
);
