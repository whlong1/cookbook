import React, { Component } from 'react'
import '../styles/CardDesign.css'


export default class CuisineCard extends Component {
  render() {
    const imageStyle = {
      // width: "100%",
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover"
    };
    // const  = this.props.image 
    // console.log(style)
    return (
      <div style={imageStyle} className="card" onClick={this.props.onClick}>
        <div className="card-image">
          {/* <img src={this.props.image}></img> */}
        </div>
        <div className="card-text">
          <h3>{this.props.name}</h3>
          <p>{this.props.recipes.length} Results</p>
        </div>
      </div>
    )
  }
}