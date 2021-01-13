import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1600px',
  height: '900px'
};

const knucenter = {
  lat: 12.935504285297199,
  lng: 77.60565231958368
};

const icons = {
  home: {
    url: `/home.png`,
  },
};

function MyComponent() {
  return (
      <LoadScript
        googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={knucenter}
          zoom={17}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <Marker
            position = {knucenter}
            icon = {icons.home}
          />
        </GoogleMap>
      </LoadScript>
   )
 }

export default React.memo(MyComponent)