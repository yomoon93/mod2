import React from 'react'
import * as WiIcons from 'react-icons/wi'
import Moment from "react-moment";
import moment from "moment";

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
            "x-rapidapi-key":process.env.REACT_APP_KEY,
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
           <div className='weather-box'>
           
           
           
         
          {this.state.data.map((dataSet,key)=>{
              const img = dataSet.weather[0].icon
              return(
                  <div className="wContainer">
                  <li id="listOne" key={key}>
                     
                        
                          <h2 className='location'>{location.toUpperCase()}</h2>
                          <br/>
                          <img className="iconI" src={"http://openweathermap.org/img/w/"+dataSet.weather[0].icon+'.png'} />
                         <p> Description:{dataSet.weather[0].description}</p> 
                         <br/>
                    
                            Date:
                          <Moment format='LLLL'>
                             {moment().format(dataSet.dt_txt)}
                             
                          </Moment>
                        
                         <br/>
                        <p> Temperture:{Math.round((dataSet.main.temp-273.15) * (9/5) + 32)}&#8457; </p>
                        
                        
                        <p>Humidity:{dataSet.main.humidity} <WiIcons.WiHumidity/></p>
                        <br/>
                        
                
                  </li>      
                  </div>
              )
          })}
            </div>              
</div>
            )      
            
    }
}
export default Weather