import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapControl, withLeaflet } from 'react-leaflet';
class GeoSearchBar extends MapControl {

  createLeafletElement() {
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: false,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'search'
    });
  }
}

export default withLeaflet(GeoSearchBar);