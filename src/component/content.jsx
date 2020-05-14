import React from 'react'
import "./content.css";
import './PStyle'
import PStyle from './PStyle';


function Content(props){
  
     return (
        <div className='content'>

        <h2>{props.date}</h2>
        <h3>{props.title}</h3>
        <PStyle>{props.explanation}</PStyle>
        <img src={props.url}></img>

        </div>
     )
  
}

export default Content