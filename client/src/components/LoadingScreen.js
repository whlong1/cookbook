import React, { Component } from 'react'
import '../styles/LoadingScreen.css'
import CutleryIcon from '../assets/Cutlery.png'
import HatIcon from '../assets/Hat.png'





export default class LoadingScreen extends Component {


  render() {

    return (
      <div className="loading">
          <img className="iconTwo" src={CutleryIcon}></img>
          <img className="iconOne" src={HatIcon}></img>
          <h1>Loading</h1>
      </div>
    )

  }

}


