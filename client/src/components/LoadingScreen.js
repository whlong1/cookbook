import React, { Component } from 'react'
import '../styles/LoadingScreen.css'
import CutleryIcon from '../assets/Cutlery.png'
import HatIcon from '../assets/Hat.png'





export default class LoadingScreen extends Component {


    render() {
        console.log(this.props)

        return (
            <div className="loading">
                {this.props.cuisine ?
                    <div>
                        {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                        <img className="iconOne" src={HatIcon}></img>
                        <h3>Loading Cuisine Count</h3>
                    </div>

                    :
                    <div>
                        {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                        <img className="iconOne" src={HatIcon}></img>
                        <h3>Loading Recipe Count</h3>
                    </div>

                }
            </div>
        )

    }

}


