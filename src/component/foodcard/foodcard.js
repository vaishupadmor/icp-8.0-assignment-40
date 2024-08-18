import React from 'react'
import "./foodcard.css"
import vegicon from "./veg.png"
import nonveg from "./non-veg.png"

function foodcard({imgUrl,title,description ,isveg,price}) {
  return (
    <div className="food-card">
        <img
        src={imgUrl}
        className='food-card-img'
        alt='food'/>
        <h1 className='food-card-name'> {title}</h1>
        <p> {description}</p>
        <img src={isveg ? vegicon : nonveg} className='food-card-icon' alt='veg icon'/>

        {price ? <p className='food-card-price'>
          $ {price}
        </p> : "not available"}
        <button className='food-card-button'> Add to card</button>
        
    </div>
  )
}

export default foodcard