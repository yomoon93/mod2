import React from 'react'

class Crime extends React.Component {
    constructor(){
        super()
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
            data:[response.list[0].weather[0]]
    
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
    console.log(this.props.city)
    return(

        <div>
          {this.state.data.map((dataSet,key)=>{
              return(
                  <li key={key}>
                      {dataSet.description}


                  </li>
              )
          })}

    
{/* {this.state.dataSet.map((data,key)=>{
    return(
        <li key={key} >

         Address: {data.address}
           <br/>
         Price: {data.price}
           <br/>
        Bedrooms: {data.bedrooms}
          <br/>
        Bathrooms: {data.bathrooms}
                  <br/>
        PropertyType: {data.propertyType}
                  <br/>
        Longitude: {data.longitude}
                  <br/>
         Latitude:  {data.latitude}

                </li>


)
})} */}
                        
</div>
            )      
            
    }
}
export default Crime