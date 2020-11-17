import React from 'react'
import '../styles/Card.css'

const CuisineCard = ({onClick, image, name}) => (
  <div className="card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
      <div className="titleBox">
        <div className="decBorder">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  </div>
)

export default CuisineCard

