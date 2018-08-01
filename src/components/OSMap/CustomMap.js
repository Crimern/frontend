import React, {Component}  from 'react';
import { Map, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import SearchBar from './../GeoSearchBar'
class OSMap extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 50
    }
  }

  render() {
    const moveFnc = (a,b,c) => console.log({a,b,c})
    const position = [this.props.coordinateX, this.props.coordinateY];
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
      </Map>
     
    );
  }
}


export default OSMap;