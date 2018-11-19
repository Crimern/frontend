import "./index.css";

import React, {Component} from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker
} from "react-leaflet";
import {connect} from "react-redux";
import {crimesActions} from "../../state/ducks/crimes";
import {mapActions} from "../../state/ducks/map";

class AddCrimeForm extends Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="" />
          <input type="text" />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCrimeForm);
