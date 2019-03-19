
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const mapCenter = {lat: 47.3645066, lng: -1.1823906};

export default class SimpleHoverMap extends Component {
  static defaultProps = {
    
  };

  render() {
    var center =  mapCenter;
    var zoom =  16;
    return (
      <div style={{ height: '45vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >
        <Marker lat={mapCenter.lat} lng={mapCenter.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}


const Marker = () => {
    return <div className="SuperAwesomePin">On est ICI </div>
  }