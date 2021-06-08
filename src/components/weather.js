import React from 'react'

class Weather extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
            
        }


    }
    componentDidMount = () =>{
        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${this.props.city},us`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then((dataset)=> dataset.json())
    .then(response => {
        console.log(response);
        this.setState({
            data:[response.list[0]],
         
        })
        console.log("hey")
        console.log(this.props.city)
        console.log(this.state.data)
        console.log(response.list)
    })
    .catch(err => {
        console.error(err);
    });
    }
    


render(){
   let location = this.props.city
    return(
            
        <div>
           <h1 id="weather">Weather</h1>
          {this.state.data.map((dataSet,key)=>{
              const img = dataSet.weather[0].icon
              return(
                  <div className="wContainer">
                  <li id="listOne" key={key}>
                     
                        
                          <h2>{location.toUpperCase()}</h2>
                          <br/>
                          <img className="iconI" src={"http://openweathermap.org/img/w/"+dataSet.weather[0].icon+'.png'} />
                          <br/>
                         <h2>Date:  {dataSet.dt_txt}</h2> 
                         <br/>
                        <h2> Temperture:{Math.round((dataSet.main.temp-273.15) * (9/5) + 32)}</h2>
                        <br/>
                        
                        <h2>Humidity:{dataSet.main.humidity}</h2>
                        <br/>
                        <h2> Description:{dataSet.weather[0].description}</h2>
                
                  </li>      
                  </div>
              )
          })}
                        
</div>
            )      
            
    }
}
export default Weather