import React from 'react'

const CuisineCard = ({onClick, image, name}) => (
  <div className="recipe-card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
        <h3>{name}</h3>
    </div>
  </div>
)

export default CuisineCard


