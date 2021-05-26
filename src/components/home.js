import React from 'react'
import '../App.css'
import Api from './api'

function Home(props) {
    return(
        <div>
            <h1 className="App">Welcome to MoonDoc Homes</h1>
            <Api setData ={props.setData}  handleCity = {props.handleCity} city={props.city}/>
            <div></div>
        </div>


    )
}
export default Home