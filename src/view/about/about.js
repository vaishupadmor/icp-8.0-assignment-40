import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import aboutimg from "./../../view/about/about.jpg"
import "./../../component/footer/footer"

function about() {
  return (
    <div>
      <Navbar/>
        <h1 className='heading'> about</h1>
        <img src={aboutimg} className='images'/>

    </div>
  )
}

export default about