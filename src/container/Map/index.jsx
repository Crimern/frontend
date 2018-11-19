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

import SearchBar from "../GeoSearchBar";
class OSMap extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 50
    };
  }

  render() {
    const position = [this.props.coordinateX, this.props.coordinateY];
    const moveFnc = e => {
      const {lat, lng} = e.target.getCenter();
      const types = Array.from(this.props.types.keys());
      this.props.changeCoords(lat, lng);
      this.props.crimeFetch(lng, lat, types);
    };

    return (
      <Map
        className="map"
        center={position}
        onMoveend={moveFnc}
        zoom={this.state.zoom}
      >
        <SearchBar />
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Circle center={position} color="red" radius={20} />

        {this.props.crimes.map(crime => {
          return (
            <Circle
              center={[
                crime.location.coordinates[1],
                crime.location.coordinates[0]
              ]}
              color="red"
              radius={20}
              key={crime._id}
            />
          );
        })}
      </Map>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    crimeFetch: (lng, lat, types) => {
      dispatch(crimesActions.fetchRequest(lng, lat, types));
    },
    changeCoords: (lat, lng) => {
      dispatch(mapActions.changeCoords(lat, lng));
    }
  };
};

const mapStateToProps = state => {
  return {
    crimes: state.crimesStore.crimes,
    types: state.filtersStore.filters
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OSMap);
