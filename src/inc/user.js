import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '1600px',
    height: '900px'
};

const knucenter = {
    lat: 12.935504285297199,
    lng: 77.60565231958368
};

const userlocation = {
    lat: 12.94,
    lng: 77.61
};

const icons = {
    home: {
    url: `/home.png`,
    },
    user: {
    url: `/user.png`,
    },
};

function Myperson() {
    return (
        <LoadScript
          googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userlocation}
            zoom={17}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker
              position = {knucenter}
              icon = {icons.home}
            />
            <Marker
              position = {userlocation}
              icon = {icons.user}
            />
          </GoogleMap>
        </LoadScript>
    )
}

class user extends Component {

    render() {
      return (
          <div>
              <Myperson/>
          </div>
      );
    }
  }

  export default user;