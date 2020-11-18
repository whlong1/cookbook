import React from 'react'
import '../styles/Card.css'

const RecipeCard = ({onClick, image, title, author}) => (
  <div className="card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
        <div className="titleBox">
          <div className="decBorder">
            <h3>{title}</h3>
          </div>
        </div>
    </div>
  </div>
)

export default RecipeCard

