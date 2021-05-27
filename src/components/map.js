import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps';


 export default function Map(props)  {
    console.log(props)
    return  ( 
        
    <GoogleMap

    defaultZoom={10}
    defaultCenter={{lat:40.7095 , lng:-73.8565 }}
    >
    {props.data.map(value =>(
        <Marker key={value.props.zpid}
                position ={{
                    lat:40.7181,
                    lng:-73.8448
                }}
        />
    ))}
    
    </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export function MapG(){
    
    return (
        
        <div style={{width: "200px", height:"400px",position:"right"}}>
        <WrappedMap 
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA3uh8vqROFqXPwfvuU9x-Yee9bYdTsfv4"} 
        loadingElement={<div style={{height:"100%"}} />}
        containerElement={<div style={{height:"100%"}} />}
        mapElement={<div style={{height:"100%"}} />}
        
        />


        {/* {props.data.map((value)=>{
            return(
                <li>
                    {value.address}
                    {value.latitude}
                    {value.longitude}
                </li>
            )
        })} */}


    </div>
        ); 
}