import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/home';
import Map from './components/map';
import Contact from './components/contact'
import Navbar from './components/navbar';

import React, {useState, useEffect} from 'react';




function App(){

  
  return (
    <Router>

  <div className="App">
    <Navbar />
    
      <Switch>
        <Route path="/" exact >
         <Home />
        </Route>
        <Route path="/map" component={Map}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
  </div>
  </Router>
);

}


export default App;
