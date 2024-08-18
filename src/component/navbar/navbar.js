import React from 'react'
import "./navbar.css"
import {Link } from "react-router-dom"

function navbar() {
  return (

    <div className='navbar'>
       <span className='brand-name'>  desserts</span> 

        <div className='navbar-link'>

         <Link to="/"  className='link'> 
         Home
         </Link>

         <Link to='/about' className='link'>
         About
         </Link>

         <Link to='/contact' className='link'> 
         Contact
         </Link>

        </div>
    </div>
  )
}

export default navbar