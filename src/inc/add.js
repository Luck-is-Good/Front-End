import React, { Component } from 'react';

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

class add extends Component {
  render() {
    return (
        <div>
          <Location />
        </div>
    );
  }
}

export default add;