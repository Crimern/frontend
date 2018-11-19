import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import Routes from "../../Routes";

class App extends Component {
  componentDidMount() {}

  render() {
    return <Routes />;
  }
}

export default withRouter(App);
