import React from 'react'

const RecipeCard = ({review}) => (
  <div>
    <div>
        <p> • {review.author.name}: {review.text}</p>
    </div>
  </div>
)

export default RecipeCard