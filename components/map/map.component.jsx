import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={containerStyle}
        initialCenter={{ lat: 21.914291012862716, lng: -102.31107144683601 }}
      >
        <Marker
          position={{ lat: 21.914291012862716, lng: -102.31107144683601 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY,
})(MapContainer);

console.log(process.env.NEXT_PUBLIC_GOOGLE_KEY)