import React from 'react'
import '../App.css'
import Api from './api'

function Home(props) {
    return(
        <div classname="container">
            <h1 className="title">Welcome to ZillowMoon</h1>
            <Api setData ={props.setData}  handleCity = {props.handleCity} city={props.city} setSave = {props.setSave} save={props.save}  handleImage ={props.handleImage}/>
            <div></div>
        </div>


    )
}
export default Home