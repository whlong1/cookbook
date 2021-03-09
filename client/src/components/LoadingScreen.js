import React, { Component } from 'react'
import '../styles/LoadingScreen.css'
import LoadingIcon from '../assets/Chef-01.png'


export default class LoadingScreen extends Component {


  render() {

    return (
      <div className="loading">
          <img className="iconOne" src={LoadingIcon}></img>
          <h1>Loading</h1>
      </div>
    )

  }

}


