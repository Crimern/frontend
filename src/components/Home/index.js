import React, {Component} from "react";
import Routes from "../../Routes";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <main />
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
