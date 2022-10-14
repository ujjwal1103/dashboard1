
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Card from './Card'
import './products.css'
const Products = (props) => {
    
    const {products} = props
    
    
  return (
    <div className='products'>
         <div className="headings">
          <span className='name'>Products</span>
          <span className='price'>Price</span>
          <span className='quantity'>Quantity</span>
          <span className='rating'>Ratings</span>
          <span className='sales'>Total sales</span>
         </div>

         {products.map((product,index)=>{
            return <Card key = {index} data = {product}/>
         })}
         
    </div>
  )
}

export default Products