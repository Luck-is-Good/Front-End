import React, { Component } from 'react';
import { firestore } from './firebase';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './inc/home.js';
import Add from './inc/add.js';
import User from './inc/user.js';
import Setting from './inc/setting.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path = "/" component = {Home} exact />
          <Route path = "/add" component = {Add} exact/>
          <Route path = "/user" component = {User} exact/>
          <Route path = "/setting" component = {Setting} exact/>

          <Link to='/'> <button className="home" onClick={this.handleClick}> <img src="/home.png" alt="home" width="50px" height="50px"/></button></Link>
          <Link to='/user'><button className="user" onClick={this.handleClick}> <img src="/user.png" alt="user" width="50px" height="50px"/></button></Link>
          <Link to='/add'><button className="add" onClick={this.handleClick}> <img src="/add.png" alt="add" width="50px" height="50px"/></button></Link>
          <Link to='/setting'><button className="setting" onClick={this.handleClick}> <img src="/settings.png" alt="setting" width="50px" height="50px"/></button></Link>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default React.memo(App) 
