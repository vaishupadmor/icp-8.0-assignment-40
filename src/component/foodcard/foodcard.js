import React from 'react'
import "./foodcard.css"


function foodcard({imgUrl,title,description ,price}) {
  return (
    <div className="food-card">
        <img
        src={imgUrl}
        className='food-card-img'
        alt='food'/>
        <h1 className='food-card-name'> {title}</h1>
        <p> {description}</p>
        

        {price ? <p className='food-card-price'>
          $ {price}
        </p> : "not available"}
        <button className='food-card-button'> Add to card</button>
        
    </div>
  )
}

export default foodcard