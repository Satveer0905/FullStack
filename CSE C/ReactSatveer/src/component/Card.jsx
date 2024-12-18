import React from 'react'
import pic from "../images/1.jpg"
import "./card.css"
function Card( props) {
  return (
    <div className='card'>  
        <h2>{props.name}</h2>
        <img src={props.img} alt='My image'></img>
        <h2>{props.roll}</h2>
        </div>

  )
}

export default Card