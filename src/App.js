import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/home';

import Contact from './components/contact'
import Navbar from './components/navbar';
import Crime from './components/crime';
import React, {useState, useEffect} from 'react';





function App(){
const [data, setData] = useState([])
const [city,setCity] = useState('')
  const handleCity = (newCity) =>{
    console.log('we made it here')
    setCity(newCity)
  }
  console.log(city) 
  return (
    <Router>

  <div className="App">
    <Navbar />
      <Switch>
        <Route path="/" exact >
         <Home  setData ={setData} handleCity = {handleCity} city={city}/>
        </Route>
        <Route path="/map"> 
          <Crime  data={data} city={city} />
        </Route>
        <Route path="/contact" component={Contact}/>
      </Switch>
  </div>
  </Router>
);

}


export default App;
