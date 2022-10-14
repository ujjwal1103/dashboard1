import React from 'react'
import './card.css'
const Card = (props) => {
  const {data} = props
//   console.log(data);
  return(
   data.map((user,index)=>{
     console.log(user)
     let fullName = user.firstName +" "+ user.lastName
    return ( <div className='card' >
    <span className='id'>{user.id+100}</span>
    <span className='name2'><img src={user.image}/>{fullName}</span>
    <span className='email'>{user.email}</span>
    <span className='phone'>{user.phone}</span>
    <span className='rating'>{user.gender}</span>
</div>)

   })
   ) 
}

export default Card