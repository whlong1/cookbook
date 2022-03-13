import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

export default ({ authenticated }) => {
	return authenticated ? (
		<header className="navBar">
			<nav>
				<NavLink activeClassName="nav" to="/"><p>SIGN OUT</p></NavLink>
				<NavLink activeClassName="nav" to="/home/recipes/add"><p>ADD RECIPE</p></NavLink>
				<NavLink activeClassName="nav" to="/home/cuisine/all"><p>BROWSE CUISINE</p></NavLink>
			</nav>
		</header>
	) : (
		<header className="navBar">
			<nav>
				<NavLink activeClassName="nav" to="/"><p>HOME</p></NavLink>
				<NavLink activeClassName="nav" to="/signup"><p>SIGN UP</p></NavLink>
				<NavLink activeClassName="nav" to="/login"><p>SIGN IN</p></NavLink>
				<NavLink activeClassName="nav" to="/home/cuisine/all"><p>BROWSE CUISINE</p></NavLink>
			</nav>
		</header>
	)
}