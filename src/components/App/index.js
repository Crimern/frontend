import React, {Component} from "react";
import Routes from "../../Routes";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class App extends Component {
  componentDidMount() {}

  render() {
    const childProps = {
      isLoggedIn: false
    };

    return <Routes props={childProps} />;
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
