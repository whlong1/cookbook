import React, { Component } from 'react'
import '../styles/CardDesign.css'


export default class CuisineCard extends Component {
  render() {
    const imageStyle = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: "cover"
    }

    const result = this.props.recipes.length > 1 || !this.props.recipes.length
      ? 'results'
      : 'result'

    return (
      <div style={imageStyle} className="card" onClick={this.props.onClick}>
        <div className="card-text">
          <h3>{this.props.name}</h3>
          <p>{this.props.recipes.length} {result}</p>
        </div>
      </div>
    )
  }
}