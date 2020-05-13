import React from 'react'
import logo from '../logo/nasa.png'


function Header(){

    return (
       <div className="header">

        <img alt="logo" src={logo}></img>
        <p> The Image of the Day</p>

      </div>
    )


}

export default Header