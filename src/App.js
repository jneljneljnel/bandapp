import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Header from './Components/header.js';
import AddShow from './Components/addShow.js';
import AddRehersal from './Components/addRehersal.js';
import Merch from './Components/merch.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>       
        </div>
        <Route path="/addShow" name='jnel' component={AddShow}/>
        <Route path="/addRehersal" component={AddRehersal}/>
        <Route path="/Merch" component={Merch} name={'jnel'}/>
      </div>
    );
  }
}

export default App;
