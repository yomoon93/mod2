import logo from './logo.svg';
import './App.css';

function App() {
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
