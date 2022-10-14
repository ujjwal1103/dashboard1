import React from 'react'
import './card.css'
const Card = (props) => {
  console.log(props.data)
  // console.log(props)
  return (
    <div className='card'>
        
        <span className='name'><img src={props.data.image} alt="" />{props.data.title}</span>
        <span className='price'>$ {props.data.price}</span>
        <span className='quantity'>{props.data.rating.count * 2}</span>
        <span className='rating'>{props.data.rating.rate}</span>
        {/* <span className="sales">120</span> */}
        <span className='sales'>{parseInt(props.data.rating.count/2)}</span>
        
    </div>
  )
}

export default Card
