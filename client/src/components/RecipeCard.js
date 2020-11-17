import React from 'react'
import '../styles/Card.css'

const RecipeCard = ({onClick, image, title, author}) => (
  <div className="card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
        <div className="titleBorder">
          <h3>{title}</h3>
        </div>
        <h4>By: {author}</h4>
    </div>
  </div>
)

export default RecipeCard
