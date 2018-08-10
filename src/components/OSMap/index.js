import React, {Component}  from 'react';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {crimeFetchRequest} from "../../redux/actions/crimeActions"

import SearchBar from './../GeoSearchBar'
class OSMap extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 50
    }
  }

  render() {
    const position = [this.props.coordinateX, this.props.coordinateY];
    const moveFnc = (e) => {
      const { lat, lng } = e.target.getCenter();
      this.props.crimeFetch(lng,lat)
    }
    return (
      <Map style={{height: '90vh'}} center={position} onMoveend={moveFnc} zoom={this.state.zoom}>
        <SearchBar/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Circle center={position} color="red" radius={20}/>
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        {
          this.props.crimes.map(object => {
            return <Circle center={[object.location.coordinates[1],object.location.coordinates[0]]} color="red" radius={20} key={object._id} />
          })
        }
      </Map>
     
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    crimeFetch: (lng,lat) => {
      dispatch(crimeFetchRequest(lng,lat));
    }
  };
};

const mapStateToProps = state => {
  return {
    crimes: state.crimeStore.crimes
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OSMap)