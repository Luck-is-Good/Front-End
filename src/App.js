import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { firestore } from './firebase';


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

/*
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
*/




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


//username (name -> error)
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: '', distance: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('User Name:' + this.state.username + ', Age:' + this.state.age + ', Distance:' + this.state.distance);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        User Name:
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <br></br>
        Age:
        <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
        <br></br>
        Maximum allowable distance:<br></br>
        <input type="text" name="distance" value={this.state.distance} onChange={this.handleChange} />km
        <br></br>
        <input type="submit" value="Save" onClick={this.handleSubmit}/>
      </form>
    );
  }
}


/*
function InputBox() {
  return (
    <form >
      name <input type="text" name="name" />
      <p></p>
      age <input type="text" name="age" />
      <p></p>
      Maximum allowable distance <input type="text" name="distance" />
      <p></p>
      <input type="submit" value="Save" />
    </form>
);
}
*/



class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  //if yes click -> Input Box
  handleClick() {
    <h1>inputbox</h1>
  }

  render() {
    return (
      <div>
        <h1>Your current location</h1>
        <button onClick={this.handleClick}>YES</button>
        <p></p>
        <button>NO</button>
      </div>
    );
  }
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
      <InputForm />
      
      </div>
    );
  }
  
}

export default React.memo(App) 
