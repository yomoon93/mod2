import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

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
