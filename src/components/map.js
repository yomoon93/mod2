import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps';


 export function Map()  {
    return  ( 
    <GoogleMap

    defaultZoom={10}
    defaultCenter={{lat:40.7095 , lng:-73.8565 }}
    />
       
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


export default function MapG(){
    return (
        <div style={{width: "200px", height:"400px",position:"right"}}>
        <WrappedMap 
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA3uh8vqROFqXPwfvuU9x-Yee9bYdTsfv4"} 
        loadingElement={<div style={{height:"100%"}} />}
        containerElement={<div style={{height:"100%"}} />}
        mapElement={<div style={{height:"100%"}} />}
        
        />
    </div>
        ); 
}