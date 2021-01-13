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

function TextBox() {

  return (
      <div>
        <h1>Your current location</h1>
        <button>YES</button>
        <p></p>
        <button>NO</button>
      </div>
  );
  
}

function ButtonBox(){
  return (
      <div >
        <button> <img src="/home.png" alt="home" width="50px" height="50px"/></button>
        <button> <img src="/user.png" alt="user" width="50px" height="50px"/></button>
        <button> <img src="/add.png" alt="add" width="50px" height="50px"/></button>
        <button> <img src="/settings.png" alt="setting" width="50px" height="50px"/></button>
      </div>
  );
  

}

function InputBox() {
  return (
    <form >
      name <input type="text" name="name" />
      <p></p>
      age <input type="text" name="age" />
      <p></p>
      Maximum allowable distance <input type="text" name="distance" />
      <p></p>
      <button>save</button>
    </form>
);
}



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

class App extends React.Component {
  render() {
    return (
      <div>
      <ButtonBox />
      <MyComponent />
      <TextBox />
      <InputBox />
      </div>
    );
  }
  
}

export default React.memo(App) 
