import React from 'react'
import Weather from './weather';

import '../App.css'

        class Api extends React.Component {
                constructor(props){
                    super(props)
                    this.state = {
                        city:"",
                        zpid:"",
                        lat:[],
                        lng:[],
                        images:[],
                        dataSet:[],
                      
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
                   let dataSet = this.state.dataSet.map((result)=> {
                        if(zpid == result.zpid){
                            // i can pick the photo from the array to change the photo that gets rendered take of the array
                            // if the property doesnt exist it will create it for us in the array
                            result.url = random.images[0]
                            
                            if(result.show){
                                result.show = false
                            }else {result.show = true}
                        }
                        return result
                    })



                    this.setState({
                        dataSet:dataSet})
                    /*  for(let i = 0; i< random.images.length; i++){
                         
                        console.log(random.images[i]);
                    */
                    // console.log(random.images[0])
                     /* let output = `<h5>List of Recent Screenshots</h5>`
                     random.forEach(function(images){
                       output +=
                        <ul>
                            <li></li>
                           <li></li>
                            <li></li>
                       </ul>
                   */
                })
                .catch(err => {
                    console.error(err);
                });
            }





    getData = () => {
        // event.preventDefault()
          this.props.handleCity(this.state.city)
        //   (document.getElementById("search").value.toString())
        // console.log(this.state.city)
        
        fetch("https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location="+ this.state.city +"&home_type=Houses", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "397afdd1a1msh57cc8dbedc5788ap119f99jsn44718aac973d",
                "x-rapidapi-host": "zillow-com1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(random => {
            // console.log(random);
            // console.log(random.props[0]['zpid'])
            let copy =[]
            for(let i = 0; i < random.props.length; i++){
                // console.log(random.props[i]['zpid'])
                copy.push(random.props[i]['zpid'])
            }
           this.property()
            // this.setState({city: document.getElementById("search").value.toString()})
            this.setState({
            zpid:copy,
            dataSet:random.props 
        },()=>{
            // console.log(this.state.zpid)
        })


        this.props.setData(random.props)
      

 
    })
  
    .catch(err => {
        console.error(err);
    });

}

        // handleSave(event){
        //     let x = event.target.name
        // }




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
            // toggle for the button with the photos
            // toggle = () =>{
            //     this.setState({show:!this.state.show})
            // }




            
            render(){
                console.log(this.state.city)
                return(
                    <div id="contain">
                       
                        <form id="label" onSubmit={this.handleClick}>
                       <label >
                        <input id="search" placeholder="Search Bar" name="city" value={this.state.city} onChange={this.handleChange}></input>
                       <button id="btn" type="submit">Search</button>
                        <br/> 
                       </label>
                       <br/>
                        </form>

                        {this.state.dataSet.map((data,key)=>{
                            return(
                                <div key={key} >
                                <li  className="box">


                             <div>   Address: {data.address}    </div>  
                                    <br/>
                               <div>   Price: {data.price}    </div> 
                                    <br/>
                               <div>    Bedrooms: {data.bedrooms}   </div> 
                                    <br/>
                               <div>     Bathrooms: {data.bathrooms}  </div> 
                                    <br/>
                               <div>  PropertyType: {data.propertyType}     </div> 
                               <button id="btnS" onClick ={()=>this.props.setSave([...this.props.save, data])} >Save</button>
                               <button id="btnb"  onClick={(e)=>this.handleImage(e,data.zpid)}>Show Image</button>
                             
                                </li> 
                               {data.url && data.show  ?   <img id="photo" onClick={data.url} alt="pix" src={data.url}/> : ''}
                                {/* <button   onClick={(e)=>this.handleImage(e,data.zpid)}>Show Image</button>
                               {data.url && data.show  ?   <img id="photo" onClick={data.url} alt="pix" src={data.url}/> : ''} */}
                                
                                </div>



                            )
                        })}
                        
                    
                    </div>


                )
            }
        }


export default Api