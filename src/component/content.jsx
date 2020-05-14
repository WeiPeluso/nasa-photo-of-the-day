import React from 'react'
import "./content.css";


function Content(props){
  
     return (
        <div className='content'>

        <h2>{props.date}</h2>
        <h3>{props.title}</h3>
        <p>{props.explanation}</p>
        <img src={props.url}></img>

        </div>
     )
  
}

export default Content