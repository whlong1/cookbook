import React, { Component } from 'react'
import '../styles/CardDesign.css'


export default class CuisineCard extends Component {


  render() {

    return (
      <div className="card" onClick={this.props.onClick}>
        <div className="card-image">
          <img src={this.props.image}></img>
        </div>
        <div className="card-text">
          <h3>{this.props.name}</h3>
          <div className="borderLine"></div>
          <p>Lorem ipsum dolore ipsum.</p>
          <p>{this.props.recipes.length} Results</p>
        </div>
      </div>
    )

  }

}


