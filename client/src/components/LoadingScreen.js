import React from 'react'
import '../styles/LoadingScreen.css'
import HatIcon from '../assets/Hat.png'

const LoadingScreen = ({ }) => {
	return (
		<div className="loadingContainer">
			<div className="loading">
				<img className="iconOne" src={HatIcon}></img>
				<h3 className="loadingText">Preparing Your Order</h3>
			</div>
		</div>
	)
}

export default LoadingScreen