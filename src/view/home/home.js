import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import homeimg from "./../home/home-1.jpg"
import Footer from "./../../component/footer/footer"


function home() {
  return (
    <div>
        <Navbar/>
        
        <h1 className='heading'>home</h1>
        <img src={homeimg} className='images'/>
        
      


        
        <Footer/>
    </div>
  )
}

export default home