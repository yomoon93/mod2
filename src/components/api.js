import React from 'react'
import Crime from './crime';
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
                    this.property = this.property.bind(this)
                }


            property = () => {
              
               
                fetch("https://zillow-com1.p.rapidapi.com/property_url="+ this.props.city, {
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



                handleImage = (e,zpid)=> {
                    console.log(zpid)
                fetch("https://zillow-com1.p.rapidapi.com/images?zpid="+ zpid, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
                        "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(random => {
                    //setTimeout(random,2000)
                    // console.log(random);
                   let dataSet = this.state.dataSet.slice().map((result)=> {
                        if(zpid == result.zpid){
                            result.url = random.images[0]
                        }
                        return result
                    })

                    this.setState({
                        dataSet:dataSet})
                    //  for(let i = 0; i< random.images.length; i++){
                         
                    //    console.log(random.images[i]);
                    // }
                    console.log(random.images[0])
                     //let output = `<h5>List of Recent Screenshots</h5>`
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



            //     handleImage2= ()=> {
            //         console.log(this.state.zpid)
            //     fetch("https://zillow-com1.p.rapidapi.com/images?zpid="+ this.state.zpid, {
            //         "method": "GET",
            //         "headers": {
            //             "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
            //             "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
            //         }
            //     })
            //     .then(response => response.json())
            //     .then(random => {
            //         //setTimeout(random,2000)
            //         console.log(random);
            //         this.setState({images:random.images})
            //          for(let i = 0; i< random.images.length; i++){
            //            console.log(random.images[i]);
            //         }
            //         console.log(random.images.length)
            //          //let output = `<h5>List of Recent Screenshots</h5>`
            //         // random.forEach(function(images){
            //         //     output +=
            //         //     <ul>
            //         //         <li></li>
            //         //         <li></li>
            //         //         <li></li>
            //         //     </ul>
                   
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });
            // }


    getData = () => {
        // event.preventDefault()
          this.props.handleCity(document.getElementById("search").value.toString())
        console.log(this.state.city)
        
        fetch("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location="+ this.props.city +"&home_type=Houses", {
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
            let copy =[]
            for(let i = 0; i < random.props.length; i++){
                console.log(random.props[i]['zpid'])
                copy.push(random.props[i]['zpid'])
            }
           this.property()
            // this.setState({city: document.getElementById("search").value.toString()})
            this.setState({
            zpid:copy,
            dataSet:random.props 
        },()=>{
            console.log(this.state.zpid)
        })


        this.props.setData(random.props)
      

 
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
               
             
            }




            
            render(){
                console.log(this.state.city)
                return(
                    <div>
                        <Crime city={this.state.city}/>
                        <form onSubmit={this.handleClick}>
                       <label>
                        <input id="search" placeholder="Search Bar" name="city" value={this.state.city} onChange={this.handleChange}></input> 
                       </label>
                       <button type="submit">Search</button>
                        </form>

                        {this.state.dataSet.map((data,key)=>{
                            return(
                                <div key={key} >
                                <li >


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
                                <br/>
                                zpid: {data.zpid}
                                </li> 
                                <button onClick={(e)=>this.handleImage(e,data.zpid)}>Show Image</button>
                               {data.url ?  <img alt="pix" src={data.url}/> : ''}
                                
                                </div>



                            )
                        })}
                            {/* {this.state.images.map((images,key)=>{
                            return(
                                <li key={key} >
                                     <img src={images}></img>
                                </li>


                            )
                        })}
                       */}
                    
                    </div>


                )
            }
        }


export default Api