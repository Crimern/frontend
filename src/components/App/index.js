import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Routes from "../../Routes";

class App extends Component {

  componentDidMount() { }

  render() {
    const childProps = {
      isLoggedIn: false
    };

    return (
      <div>
        <Routes props={childProps} />
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
