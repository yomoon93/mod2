import React from 'react'

import '../saved.css'


function Saved(props) {
    console.log(props.save)

   
    return (
        <div className="Saved">

{props.save.map((data,key)=>{
                            return(
                                <div className="container" key={key} >
                                <li  className="savedBox">


                             <div className="address">   Address: {data.address}    </div>  
                                    <br/>
                               <div className="price">   Price: {data.price}    </div> 
                                    <br/>
                               <div className="bedrooms">    Bedrooms: {data.bedrooms}   </div> 
                                    <br/>
                               <div className="bathrooms">     Bathrooms: {data.bathrooms}  </div> 
                                    <br/>
                               <div className="property">  PropertyType: {data.propertyType}     </div> 
                               <button id="btnS" onClick ={()=>this.props.setSave([...this.props.save, data])} >Save</button>
                               <button id="btnb"  onClick={(e)=>this.handleImage(e,data.zpid)}>Show Image</button>
                               
                                </li> 
                               {data.url && data.show  ?   <img  id="savedPhoto" onClick={data.url} alt="pix" src={data.url}/> : ''}
                         
                
                                </div>



                            )
                        })}
                        
                    
                    </div>
                               
        
    )
}
export default Saved