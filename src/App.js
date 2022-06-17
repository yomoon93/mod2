import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './components/home';

import Saved from './components/saved'
import Navbar from './components/navbar';
import {ReactComponent as Logo} from './img/logo.svg'
import React, {useState, useEffect} from 'react';
import Weather from './components/weather';
import Contact from './components/contact'
import About from './components/about';






function App(){
const[save,setSave] =useState([])
const [data, setData] = useState([])
const [city,setCity] = useState('')
const handleCity = (newCity) =>{
    // console.log('we made it here')
    setCity(newCity)
  }
  console.log(city) 
  return (
    <Router>

  <div className="App">
    
    <Navbar />
        
      <Switch>
        <Route path="/" exact >
         <Home  setData ={setData} handleCity = {handleCity} city={city} setSave ={setSave} save={save}/>
        </Route>
        <Route path="/weather"> 
          <Weather  data={data} city={city} />
         
        </Route>
        <Route path="/saved">
          <Saved  save={save} />
          
          </Route>  
        <Route path="/contact" component = {Contact}/>
        <Route path="/about" component = {About} />

      </Switch>
  </div>
  </Router>
);

}


export default App;
