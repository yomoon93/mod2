import React from 'react'
import { Map } from './map';


        class Api extends React.Component {
                constructor(props){
                    super(props)
                    this.state = {
                        city:"",
                        zpid:"",
                        lat:[],
                        lng:[],
                        images:[],
                        dataSet:[]
                    }
                    this.handleChange = this.handleChange.bind(this)
                }


            property =()=> {
              
                this.setState({city: document.getElementById("search").value.toString()})
                fetch("https://zillow-com1.p.rapidapi.com/property_url="+ this.state.city, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
                        "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(random => {
                    console.log(random);
                    // setTimeout(this.property,1500)
                })
                .catch(err => {
                    console.error(err);
                });
                
            }
                Image= ()=> {
                    console.log(this.state.zpid)
                fetch("https://zillow-com1.p.rapidapi.com/images?zpid="+this.state.zpid, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
                        "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(random => {
                    // setTimeout(random,2000)
                    console.log(random);
                    this.setState({images:random.images})
                    // let output = `<h5>List of Recent Screenshots</h5>`
                    // random.forEach(function(images){
                    //     output +=
                    //     <ul>
                    //         <li></li>
                    //         <li></li>
                    //         <li></li>
                    //     </ul>
                   
                })
                .catch(err => {
                    console.error(err);
                });
            }


    getData = (event) => {
        // event.preventDefault()
        
        this.setState({city: document.getElementById("search").value.toString()})
            console.log(this.state.city)

                    fetch("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location="+ this.state.city +"&home_type=Houses", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
            "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(random => {
        console.log(random);
        // console.log(random.props[0]['zpid'])
       
        this.setState({
            zpid:random.props[0]['zpid'],
            dataSet:random.props, 
        
        })
    
    })
  
    .catch(err => {
        console.error(err);
    });

}

handleChange(event){
   let n = event.target.name
   let value = event.target.value
   this.setState({[n]:value})
}

           handleClick =(event)=>{
                event.preventDefault()
                this.getData()
                // setTimeout(this.property,1200)
                setTimeout(this.Image,2200)
             
            }

            
            render(){
                return(
                    <div>
                        <form onSubmit={this.handleClick}>
                       <label>
                        <input id="search" placeholder="Search Bar" name="city" value={this.state.city} onChange={this.handleChange}></input> 
                       </label>
                       <button type="submit">Search</button>
                        </form>

                        {this.state.dataSet.map((data,key)=>{
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
                        })}
                            {this.state.images.map((images,key)=>{
                            return(
                                <li key={key} >
                                     <img src={images}></img>
                                </li>


                            )
                        })}
                      
                    
                    </div>


                )
            }
        }


export default Api