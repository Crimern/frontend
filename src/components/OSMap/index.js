import React, {Component}  from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

 import SearchBar from './../GeoSearchBar/index'

class OSMap extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 12
    }
  }
  render() {
    const position = [this.props.coordinateX, this.props.coordinateY];
    return (
      <Map style={{height: '100vh'}} center={position} zoom={this.state.zoom}>
        <SearchBar/>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
     
    );
  }
}


export default OSMap;