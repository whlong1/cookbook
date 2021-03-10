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
                        <h3 className="loadingText">Preparing Your Menu</h3>
                    </div>

                    :
                    <div>
                        {this.props.recipes ?
                            <div className="loading">
                                {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                                <img className="iconOne" src={HatIcon}></img>
                                <h3 className="loadingText">Finding Recipes</h3>
                            </div>
                            :
                            <div className="loading">
                            {/* <img className="iconTwo" src={CutleryIcon}></img> */}
                            <img className="iconOne" src={HatIcon}></img>
                            <h3 className="loadingText">Preparing Your Menu</h3>
                        </div>
                        }
                    </div>

                }
            </div>
        )

    }

}


