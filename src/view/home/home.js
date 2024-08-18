import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import homeimg from "./../home/home-1.jpg"
import Footer from "./../../component/footer/footer"
import "./home.css"


function home() {
  return (
    <div>
        <Navbar/>
        
        <h1 className='heading'>home</h1>
        <img src={homeimg} className='images'/>
        
        
    
    <div >
        <h1 className='food-title' style={{color:THEME.highlight , padding:0 , margin:0}}> {MAIN_TITLE}</h1>
        <p className='food-tagline'>{TAG_LINE}</p>
     
        <div className='food-card-container'>  

     { PRODUCTS.map((foodItem)=>{

     return <Foodcard
        imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}
         isveg={foodItem.isveg}
         price={foodItem.price}
    />
  })
}
    </div>
    </div>
  



        
        <Footer/>
    </div>
  )
}

export default home