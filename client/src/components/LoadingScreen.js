import React, { Component } from 'react'
import '../styles/LoadingScreen.css'
import HatIcon from '../assets/Hat.png'



export default class LoadingScreen extends Component {


    render() {
        console.log(this.props)

        return (
            <div className="loadingContainer">
                <div className="loading">
                    <img className="iconOne" src={HatIcon}></img>
                    <h3 className="loadingText">Preparing Your Order</h3>
                </div>
            </div>
        )
    }
}


