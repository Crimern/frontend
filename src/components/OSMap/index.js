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
    const position = [this.props.coordinateX, this.props.coordinateY];
    const moveFnc = (e) => {
      const { lat, lng } = e.target.getCenter();
      console.log({lat,lng})
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
      </Map>
     
    );
  }
}


export default OSMap;