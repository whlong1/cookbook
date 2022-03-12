import React from 'react'
import '../styles/CardDesign.css'

const RecipeCard = ({ onClick, title }) => (

  <div className="card" onClick={onClick}>
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

