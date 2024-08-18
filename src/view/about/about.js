import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import aboutimg from "./../about/about.jpg"
import Footer from "./../../component/footer/footer"
import Foodcard from "./../../component/foodcard/foodcard"
import { PRODUCTS,MAIN_TITLE ,TAG_LINE ,THEME} from '../../config/data'

function about() {
  return (
    <div>
      <Navbar/>
        <h1 className='heading-1'> about</h1>
        <img src={aboutimg} className='images-1'/>
       

        <Footer/>

    </div>
  )
}

export default about