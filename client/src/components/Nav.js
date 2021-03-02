import React from 'react'
import {NavLink} from 'react-router-dom'


export default ({className, authenticated}) => {

  return authenticated ? (


    <header className={className}>
      <div></div>
      <nav>
        <NavLink activeClassName="nav" to="/"><p className="login">SIGN OUT</p></NavLink>
        <NavLink activeClassName="nav" to="/home/recipes/add"><p className="add">ADD RECIPE</p></NavLink>
        <NavLink activeClassName="nav" to="/home/cuisine/all"><p className="add">BROWSE CUISINE</p></NavLink>
      </nav>
    </header>

  ) : (

    <header className={className}>
    <div></div>
    <nav>
      <NavLink activeClassName="nav" to="/signup"><p className="signup">SIGN UP</p></NavLink>
      <NavLink activeClassName="nav" to="/login"><p className="login">SIGN IN</p></NavLink>
      <NavLink activeClassName="nav" to="/home/cuisine/all"><p className="add">BROWSE CUISINE</p></NavLink>
    </nav>
  </header>
  )
}

