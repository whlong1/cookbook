import React, { Component } from 'react'
import '../styles/LoadingScreen.css'
import CutleryIcon from '../assets/Cutlery.png'
import HatIcon from '../assets/Hat.png'





export default class LoadingScreen extends Component {


    render() {
        console.log(this.props)

        return (
            <div className="loadingContainer">
                {this.props.cuisine ?
                    <div className="loading">
                        {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                        <img className="iconOne" src={HatIcon}></img>
                        <h3 className="loadingText">Loading Cuisine Count</h3>
                    </div>

                    :
                    <div className="loading">
                        {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                        <img className="iconOne" src={HatIcon}></img>
                        <h3 className="loadingText">Loading Recipe Count</h3>
                    </div>

                }
            </div>
        )

    }

}


