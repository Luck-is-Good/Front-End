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


class Menu extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {showLocation: false};

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    //click add -> your current location
    this.setState({showLocation: true});
  }

  render() {
    return (
      <div >
        <button className="home" onClick={this.handleClick}> <img src="/home.png" alt="home" width="50px" height="50px"/></button>
        <button className="user" onClick={this.handleClick}> <img src="/user.png" alt="user" width="50px" height="50px"/></button>
        <button className="add" onClick={this.handleClick}> <img src="/add.png" alt="add" width="50px" height="50px"/></button>
        {this.state.showLocation ? <Location /> : null}
        <button className="setting" onClick={this.handleClick} style={{float: 'right'}}> <img src="/settings.png" alt="setting" width="50px" height="50px"/></button>
      </div>
    );
  }
}



class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', age: null, distance: null};

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

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showInputForm: false};

    this.handleClickYes = this.handleClickYes.bind(this);
    this.handleClickNo = this.handleClickNo.bind(this);
  }
  
  handleClickYes(event) {
    //click yes -> InputForm
    this.setState({showInputForm: true});
  }
   
  
  handleClickNo(event) {
    //click No -> error 
    alert('error : wrong location');
    
  }
  

  render() {
    return (
      <div >
        <h1>Your current location</h1>
        <button className="yes" onClick={this.handleClickYes}>YES</button>
        {this.state.showInputForm ? <InputForm /> : null}
        <p></p>
        <button className="no" onClick={this.handleClickNo}>NO</button>
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
      <Menu />
      <MyComponent />
      
      
      
      </div>
    );
  }
  
}

export default React.memo(App) 
