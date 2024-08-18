import React from 'react'
import "./navbar.css"
import {Link } from "react-router-dom"
import dessertimg from "./close-up-fancy-dessert.jpg"

function navbar() {
  return (

    <div className='navbar'>

      <img src={dessertimg} style={{height:40}}/>
       <span className='brand-name'  >  desserts</span> 

        <div className='navbar-link'>

         <Link to="/"  className='link'> 
         Home
         </Link>

         <Link to='/about' className='link'>
         About
         </Link>

         

        </div>
    </div>
  )
}

export default navbar