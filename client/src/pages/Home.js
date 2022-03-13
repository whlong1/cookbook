import React from 'react'
import '../styles/Home.css'
import Nav from '../components/Nav'
import FoodList from '../components/FoodList'

export default (props) => {
	return (
		<div className="homepage">
			<div className="homepage-left">
				<div className="welcome"><h2>Welcome to CookBook</h2></div>
				<div className="yellow-block"></div>
				<div>
					<Nav {...props}
						authenticated={props.authenticated}
					></Nav>
				</div>
			</div>
			<div className="homepage-right">
				<FoodList></FoodList>
			</div>
		</div>
	)
}