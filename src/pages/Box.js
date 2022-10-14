import React from 'react'
import './dash.css'
const Box = (props) => {
  return (
    <div className="infoBox">
        <h1>{props.count}</h1>
        <p>{props.text}</p>
      </div>
  )
}

export default Box