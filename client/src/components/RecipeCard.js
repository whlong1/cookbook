import React from 'react'

const RecipeCard = ({onClick, image, title, author}) => (
  <div className="recipe-card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
        <h3>{title}</h3>
        <h4>By: {author}</h4>
    </div>
  </div>
)

export default RecipeCard


