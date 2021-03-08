import React from 'react'
import '../styles/CardDesign.css'

const CuisineCard = ({ onClick, image, name }) => (
  <div className="card" onClick={onClick}>
    {/* <div className="banner">
      <img src={image}></img>
    </div>
    <div className="details">
      <div className="titleBox">
        <div className="decBorder">
          <h3>{name}</h3>
        </div>
      </div>
    </div> */}

    <div className="card-image">
      <img src={image}></img>
    </div>
    <div className="card-text">
      <h3>{name}</h3>
      <p>Lorem ipsum dolore ipsum.</p>
    </div>



  </div>
)

export default CuisineCard
