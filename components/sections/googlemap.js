
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
      <div class="mapouter">
      <div class="gmap_canvas">
      <iframe width="100%" height="400" id="gmap_canvas" 
      src="https://maps.google.com/maps?q=13%20rue%20des%20grands%20champs%20ancenis&t=&z=15&ie=UTF8&iwloc=&output=embed" 
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0">
      </iframe>
      </div>
      </div>
    );
  }
}


const Marker = () => {
    return <div className="SuperAwesomePin">On est ICI </div>
  }