import React from 'react'

function Content(props){
  
     return (
        <div className='content'>

        <p>Date: {props.date}</p>
        <p>Explaintion:{props.explanation}</p>
        <p>Title:{props.title}</p>
        <p>Image: <img src={props.url}></img></p>

        </div>
     )
  
}

export default Content