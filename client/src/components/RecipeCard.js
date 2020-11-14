import React from 'react'

const RecipeCard = ({onClick, image, title, author, prep_time}) => (
  <div className="recipe-card" onClick={onClick}>
    <div className="banner">
        <img src={image}></img>
    </div>
    <div className="details">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{prep_time}</p>
    </div>
  </div>
)

export default RecipeCard


